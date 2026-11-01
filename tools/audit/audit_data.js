// Auditoría completa de datos y reglas de la dieta
const fs = require("fs"), vm = require("vm");
const root = require("path").join(__dirname, "..", "..") + "/";
const ctx = { console }; vm.createContext(ctx);
vm.runInContext(
  fs.readFileSync(root + "plan.js", "utf8").replace(/if \(typeof module[^\n]*\n/, "") + "\n" +
  fs.readFileSync(root + "data.js", "utf8").replace(/if \(typeof module[^\n]*\n/, "") + "\n" +
  fs.readFileSync(root + "recipes.js", "utf8").replace(/if \(typeof module[^\n]*\n/, "") +
  "\nthis.X={ING,NUT,SEASONS,buildWeek,shopping,seasonOf,recetaDe,famOf,keysOf,tipoOf,isFiesta,LEG,PROT};", ctx);
const X = ctx.X;
const fails = [], warns = [];
const F = (cat, msg) => fails.push(`[${cat}] ${msg}`);
const W = (cat, msg) => warns.push(`[${cat}] ${msg}`);

// ---------- 1. Integridad de datos ----------
const allDish = [];
for (const k in X.SEASONS) {
  const S = X.SEASONS[k];
  if (S.comidas.length < 21 || S.cenas.length < 21) F("datos", `${k}: ${S.comidas.length} comidas / ${S.cenas.length} cenas`);
  [...S.comidas.map((x) => ["comida", x]), ...S.cenas.map((x) => ["cena", x])].forEach(([tp, x]) => {
    const [t, it] = x.split("|");
    if (!t || !it) F("datos", `formato: ${x}`);
    it.split(",").forEach((p) => {
      const [c, g] = p.split(":");
      if (!X.ING[c]) F("datos", `código ${c} sin ingrediente (${t})`);
      if (!X.NUT[c]) F("datos", `código ${c} sin nutrientes (${t})`);
      if (!(+g > 0)) F("datos", `gramos no válidos ${p} (${t})`);
    });
    allDish.push([k, tp, t, it]);
  });
}
for (const c in X.ING) { const I = X.ING[c]; if (I.length < 5 || typeof I[2] !== "number" || typeof I[3] !== "number") F("datos", `ingrediente mal definido ${c}`); if (!X.NUT[c]) F("datos", `ingrediente ${c} sin NUT`); }

// ---------- 2. Restricciones alimentarias (en nombres de platos e ingredientes) ----------
const banned = [
  [/cebolla(?!s? en polvo)/i, "cebolla"], [/\bpimientos?\b/i, "pimiento (verdura)"], [/coliflor/i, "coliflor"],
  [/manzana|\bpera\b|mango|sandía|cereza|\bhigo|caqui|\bmiel\b|agave|zumo|pasas|dátil/i, "fruta/edulcorante con fructosa"],
  [/champiñ|boniato|setas/i, "polioles"], [/morcilla(?! ni)/i, "morcilla"], [/\bleche\b(?! sin lactosa| enriquecida)/i, "leche con lactosa"],
];
for (const c in X.ING) {
  const n = X.ING[c][0];
  banned.forEach(([re, why]) => { if (re.test(n) && !/sin lactosa/.test(n)) F("restricción", `ingrediente "${n}" → ${why}`); });
  if (X.ING[c][1] === "lacteos" && !/sin lactosa|curado|parmesano|grana/i.test(n)) F("restricción", `lácteo posiblemente con lactosa: ${n}`);
}
allDish.forEach(([k, tp, t]) => banned.forEach(([re, why]) => { if (re.test(t) && !/sin cebolla|sin morcilla/.test(t)) F("restricción", `${k} ${tp} "${t}" → ${why}`); }));

// ---------- 3. Recorrido de las 16 semanas ----------
const MEAT = ["pol", "mus", "pav", "con", "ter", "lom", "cos", "hig", "jam", "fpv"];
const KEYS = X.keysOf;
const big = (f) => (f === "roja" ? "carne" : f === "azul" ? "pescado" : f);
const famItems = (items) => X.famOf("x|" + items.filter(([c]) => !["nar", "man", "kiw"].includes(c)).map(([c, g]) => `${c}:${g}`).join(","));
const stats = { kcalE: [], kcalD: [], kcalDom: [], prot: [], ca: [], fe: [], fib: [], fat: [], carb: [], week: [] };
for (const k in X.SEASONS) for (let w = 0; w < 4; w++) {
  const wk = X.buildWeek(k, w);
  const tag = `${k} S${w + 1}`;
  if (wk.length !== 7) F("semana", `${tag} no tiene 7 días`);
  const cTitles = wk.map((d) => d.meals[2][1].t), nTitles = wk.slice(0, 6).map((d) => d.meals[4][1].t);
  if (new Set(cTitles).size < 7) F("variedad", `${tag}: comida repetida`);
  if (new Set(nTitles).size < 6) F("variedad", `${tag}: cena repetida`);
  const fam = {}, keyC = {}, tipoC = {}, rice = [], dayKeys = [];
  let hig = 0, legL = 0, wk_k = 0;
  wk.forEach((d, i) => {
    const day = `${tag} ${d.dia}`;
    const [, des] = d.meals[0], [, alm] = d.meals[1], [, com] = d.meals[2], [lblM, mer] = d.meals[3], [, cen] = d.meals[4];
    if (d.meals.length !== 5) F("día", `${day}: ${d.meals.length} tomas`);
    // NaN / vacíos
    if (!Number.isFinite(d.kcal) || !Number.isFinite(d.prot)) F("datos", `${day}: kcal/prot no numérico`);
    d.meals.forEach(([l, m]) => { if (!m.items.length) F("día", `${day} ${l} vacío`); m.items.forEach(([c, g]) => { if (!(g > 0)) F("datos", `${day} ${l} ${c}:${g}`); }); });
    // Etiqueta pre-entreno coherente
    if (d.ent !== (lblM === "Pre-entreno")) F("día", `${day}: etiqueta merienda no coincide con entreno`);
    // Fiesta solo domingo
    if (i < 6 && X.isFiesta(com.t)) F("fiesta", `${day}: plato de fiesta entre semana (${com.t})`);
    if (i === 6 && !X.isFiesta(com.t)) F("fiesta", `${day}: domingo sin plato de fiesta`);
    // Domingo sin cena
    if (i === 6) { if (!/yogur|palomitas/i.test(cen.t)) F("domingo", `${day}: cena "${cen.t}"`); }
    else {
      // Cena ligera
      cen.items.forEach(([c, g]) => {
        if (["arr", "pas", "fid", "pom", ...X.LEG].includes(c)) F("cena", `${day}: cena con ${c} (${cen.t})`);
        if (c === "pat" && g > 100) F("cena", `${day}: ${g} g de patata en la cena`);
        if (c === "pan" && g > 30) F("cena", `${day}: ${g} g de pan en la cena`);
      });
      const kc = cen.items.reduce((a, [c, g]) => a + X.ING[c][2] * g / 100, 0);
      if (kc > 400) F("cena", `${day}: cena de ${Math.round(kc)} kcal`);
      if (/^(Coca|Minxos)/.test(cen.t)) F("cena", `${day}: coca/minxos por la noche`);
      // Grupos distintos
      const fc = famItems(com.items), fn = famItems(cen.items);
      if (big(fc) === big(fn)) F("grupos", `${day}: comida ${fc} y cena ${fn}`);
      if (com.items.some(([c]) => c === "hue") && X.famOf(cen.t + "|" + cen.items.map(([c, g]) => `${c}:${g}`).join(",")) === "huevo") F("grupos", `${day}: huevo en comida y cena`);
      fam[fn] = (fam[fn] || 0) + 1;
      const tc = X.tipoOf(com.t + "|" + com.items.map(([c, g]) => `${c}:${g}`).join(",")), tn = X.tipoOf(cen.t + "|x:1");
      if (tc !== "otro" && tc === tn) F("variedad", `${day}: mismo tipo de plato (${tc})`);
      if (tn !== "otro") tipoC[tn] = (tipoC[tn] || 0) + 1;
    }
    const fc = famItems(com.items); fam[fc] = (fam[fc] || 0) + 1;
    if (i < 6) { const tc = X.tipoOf(com.t + "|" + com.items.map(([c, g]) => `${c}:${g}`).join(",")); if (tc !== "otro") tipoC[tc] = (tipoC[tc] || 0) + 1; if (tc === "arroz") rice.push(i); }
    // Proteínas por semana / días seguidos
    const ks = new Set([com, cen].flatMap((m) => KEYS("x|" + m.items.map(([c, g]) => `${c}:${g}`).join(","))));
    ks.forEach((x) => { keyC[x] = (keyC[x] || 0) + 1; });
    dayKeys.push(ks);
    if (i > 0) ks.forEach((x) => { if (dayKeys[i - 1].has(x)) F("variedad", `${day}: ${x} también el día anterior`); });
    // Hígado
    const hc = [com, cen].filter((m) => m.items.some(([c]) => c === "hig")).length;
    if (hc > 1) F("hígado", `${day}: hígado en comida y cena`);
    hig += hc;
    if (com.items.some(([c]) => X.LEG.includes(c))) legL++;
    // Desayuno y almuerzo
    const FRU = ["fre", "ara", "fra", "kiw", "nar", "man", "pla", "pin", "uva", "mel", "pap"];
    const frs = d.meals.flatMap(([, m]) => m.items.filter(([c]) => FRU.includes(c)).map(([c]) => c));
    if (new Set(frs).size < frs.length) F("fruta", `${day}: fruta repetida (${frs.join(", ")})`);
    if (frs.length > 3) F("fruta", `${day}: ${frs.length} piezas de fruta`);
    d.meals.forEach(([l, m]) => { if (m.items.filter(([c]) => FRU.includes(c)).length > 1) F("fruta", `${day}: más de una fruta en ${l}`); });
    if (i > 0 && wk[i - 1].meals[0][1].t.slice(0, 18) === des.t.slice(0, 18)) F("desayuno", `${day}: mismo tipo de desayuno que el día anterior`);
    if (i > 0 && wk[i - 1].meals[0][1].items.some(([c]) => c === "pan") && des.items.some(([c]) => c === "pan")) F("desayuno", `${day}: tostada dos días seguidos`);
    const kD = des.items.reduce((a2, [c, g]) => a2 + X.ING[c][2] * g / 100, 0), pD = des.items.reduce((a2, [c, g]) => a2 + X.ING[c][3] * g / 100, 0);
    if (kD < 420 || kD > 600) F("desayuno", `${day}: desayuno de ${Math.round(kD)} kcal`);
    if (pD < 22) F("desayuno", `${day}: desayuno con solo ${Math.round(pD)} g de proteína`);
    const kA = alm.items.reduce((a2, [c, g]) => a2 + X.ING[c][2] * g / 100, 0);
    if (kA < 100 || kA > 260) F("almuerzo", `${day}: almuerzo de ${Math.round(kA)} kcal`);
    if (des.items.some(([c]) => c === "sky") && alm.items.some(([c]) => c === "sky")) F("almuerzo", `${day}: yogur en desayuno y almuerzo`);
    if (/Bocadill/.test(alm.t)) F("almuerzo", `${day}: bocadillo en el almuerzo`);
    // Un solo cereal o pan al día: el del desayuno
    [d.meals[1], d.meals[3], d.meals[4]].forEach(([l, m]) => { if (m.items.some(([c]) => ["pan", "avn", "tor"].includes(c))) F("pan", `${day}: ${l} con pan o cereal (${m.t})`); });
    // Dos bocadillos
    if (/Bocadill/.test(alm.t) && /Bocadill/.test(mer.t)) F("variedad", `${day}: dos bocadillos`);
    // Raciones según tolerancia
    d.meals.forEach(([l, m]) => m.items.forEach(([c, g]) => {
      const lim = { cza: 150 * 1.3, fra: 70, mel: 120, gar: 150 * 1.3, agu: 30, alm: 15 };
      if (lim[c] && g > lim[c]) F("tolerancia", `${day} ${l}: ${c} ${g} g`);
      if (c === "alm" && g > 10) W("tolerancia", `${day} ${l}: ${g} g de almendra (umbral orientativo ~10-12 g)`);
    }));
    // Energía
    const lim = i === 6 ? 1800 : d.ent ? 1850 : 1700;
    if (d.kcal > lim + 25) F("energía", `${day}: ${d.kcal} kcal (techo ${lim})`);
    if (d.kcal < 1350) W("energía", `${day}: solo ${d.kcal} kcal`);
    if (d.prot < 90) W("proteína", `${day}: ${d.prot} g`);
    (i === 6 ? stats.kcalDom : d.ent ? stats.kcalE : stats.kcalD).push(d.kcal);
    stats.prot.push(d.prot); stats.ca.push(d.ca); stats.fe.push(d.fe); stats.fib.push(d.fib); stats.fat.push(d.fat); stats.carb.push(d.carb);
    wk_k += d.kcal;
  });
  stats.week.push(wk_k / 7);
  const P = (fam.pescado || 0) + (fam.azul || 0), C = (fam.carne || 0) + (fam.roja || 0);
  if (P < 4 || P > 6) F("reparto", `${tag}: pescado ${P}`);
  if ((fam.azul || 0) < 2) F("reparto", `${tag}: azul ${fam.azul || 0}`);
  if (C < 4 || C > 6) F("reparto", `${tag}: carne ${C}`);
  if ((fam.roja || 0) > 2) F("reparto", `${tag}: carne roja ${fam.roja}`);
  if ((fam.huevo || 0) < 1) F("reparto", `${tag}: huevo ${fam.huevo || 0}`);
  if (legL < 2) F("reparto", `${tag}: legumbre al mediodía ${legL}`);
  if (hig > 1) F("hígado", `${tag}: hígado ${hig} veces`);
  Object.entries(keyC).forEach(([x, n]) => { if (n > 2) F("variedad", `${tag}: ${x} ${n} veces`); });
  if (rice.length > 2) F("variedad", `${tag}: arroz ${rice.length} días entre semana`);
  rice.forEach((x, j) => { if (j && x === rice[j - 1] + 1) F("variedad", `${tag}: arroz en días seguidos`); });
  if ((tipoC.tortilla || 0) > 2) F("variedad", `${tag}: ${tipoC.tortilla} tortillas`);
  if ((tipoC.bullit || 0) > 1) F("variedad", `${tag}: ${tipoC.bullit} bullit`);
  // Lista de la compra = suma exacta de la semana
  const sh = X.shopping(wk);
  const tot = {}; wk.forEach((d) => d.meals.forEach(([, m]) => m.items.forEach(([c, g]) => { tot[c] = (tot[c] || 0) + g; })));
  const listed = Object.values(sh).flat().length;
  if (listed !== Object.keys(tot).length) F("compra", `${tag}: ${listed} productos en lista vs ${Object.keys(tot).length} usados`);
  Object.values(sh).flat().forEach(([n, q]) => { if (/NaN|undefined/.test(q + n)) F("compra", `${tag}: ${n} ${q}`); });
}
// Diferencias entre las 4 semanas de cada estación
for (const k in X.SEASONS) {
  const sig = [0, 1, 2, 3].map((w) => X.buildWeek(k, w).map((d) => d.meals[2][1].t + d.meals[4][1].t).join());
  if (new Set(sig).size < 4) F("variedad", `${k}: semanas iguales`);
}

// ---------- 4. Calendario ----------
const cal = [
  [[2026, 10, 26], "otono", 4, "octubre", 3], [[2026, 11, 1], "otono", 4, "octubre", 3], [[2026, 11, 2], "otono", 1, "noviembre", 0],
  [[2026, 11, 30], "otono", 5, "noviembre", 1], [[2026, 12, 6], "otono", 5, "noviembre", 1], [[2026, 12, 7], "otono", 1, "diciembre", 0],
  [[2026, 12, 20], "otono", 2, "diciembre", 1], [[2026, 12, 21], "invierno", 3, "diciembre", 2], [[2027, 1, 1], "invierno", 4, "diciembre", 3],
  [[2027, 1, 4], "invierno", 1, "enero", 0], [[2027, 3, 19], "invierno", 3, "marzo", 2], [[2027, 3, 22], "primavera", 4, "marzo", 3],
  [[2027, 6, 21], "verano", 3, "junio", 2], [[2027, 9, 23], "verano", 3, "septiembre", 2], [[2027, 9, 27], "otono", 4, "septiembre", 3], [[2028, 2, 29], "invierno", 4, "febrero", 3],
];
cal.forEach(([[y, m, d], key, n, mes, menu]) => {
  const r = X.seasonOf(new Date(y, m - 1, d));
  if (r.key !== key || r.n !== n || r.month !== mes || r.week !== menu) F("calendario", `${d}/${m}/${y}: ${r.key} semana ${r.n} de ${r.month} menú ${r.week + 1} (esperado ${key} ${n} ${mes} menú ${menu + 1})`);
});

// ---------- Resumen ----------
const avg = (a) => a.reduce((x, y) => x + y, 0) / a.length;
console.log("=== RESUMEN NUTRICIONAL (112 días) ===");
console.log(`Energía: entreno ${Math.round(avg(stats.kcalE))} · descanso ${Math.round(avg(stats.kcalD))} · domingo ${Math.round(avg(stats.kcalDom))} · media semanal ${Math.round(avg(stats.week))} kcal (rango semanas ${Math.round(Math.min(...stats.week))}-${Math.round(Math.max(...stats.week))})`);
console.log(`Proteína ${Math.round(avg(stats.prot))} g (${(avg(stats.prot) / 67).toFixed(2)} g/kg con 67 kg; mín ${Math.min(...stats.prot)}) · grasa ${Math.round(avg(stats.fat))} g · hidratos ${Math.round(avg(stats.carb))} g · fibra ${Math.round(avg(stats.fib))} g`);
console.log(`Calcio ${Math.round(avg(stats.ca))} mg (mín ${Math.min(...stats.ca)}) · hierro ${avg(stats.fe).toFixed(1)} mg (mín ${Math.min(...stats.fe)})`);
console.log(`\nFALLOS: ${fails.length}`); fails.forEach((x) => console.log("  ✗ " + x));
console.log(`AVISOS: ${warns.length}`); [...new Set(warns.map((x) => x.replace(/ S\d.*?:/, ":")))].slice(0, 30).forEach((x) => console.log("  ! " + x));
