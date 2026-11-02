// Planificador de menús: busca, para cada estación, las 4 semanas que cumplen TODAS las reglas
// y reparten mejor los platos (mínima repetición en el mes). Genera plan.js.
// Uso: node tools/planner.js
const fs = require("fs"), path = require("path"), vm = require("vm");
const root = path.join(__dirname, "..");
const ctx = { console };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(root, "data.js"), "utf8").replace(/if \(typeof module[^\n]*\n/, "") +
  "\nthis.X={SEASONS,famOf,keysOf,mainKey,tipoOf,isFiesta,clash,dish,LEG};", ctx);
const X = ctx.X;

// Generador pseudoaleatorio con semilla (resultado reproducible)
function rng(seed) { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }
const big = (f) => (f === "roja" ? "carne" : f === "azul" ? "pescado" : f);
const hasHig = (x) => /\bhig:/.test(x), hasLeg = (x) => /\b(len|gar|alu):([89]\d|\d{3})/.test(x);
const TIPO_MAX = { tortilla: 2, bullit: 1, crema: 2, ensalada: 3, arroz: 2, pasta: 1 };

function planSeason(key, seed, tries) {
  const S = X.SEASONS[key];
  const FEST = [], DIARIO = [];
  S.comidas.forEach((x, i) => (X.isFiesta(x) ? FEST : DIARIO).push(i));
  const CF = S.comidas.map((x) => X.famOf(x)), NF = S.cenas.map((x) => X.famOf(x));
  const CK = S.comidas.map((x) => X.keysOf(x)), NK = S.cenas.map((x) => X.keysOf(x));
  const CT = S.comidas.map((x) => X.tipoOf(x)), NT = S.cenas.map((x) => X.tipoOf(x));
  const CD = S.comidas.map((x) => X.dish(x)), ND = S.cenas.map((x) => X.dish(x));
  const R = rng(seed);
  let best = null, bestScore = Infinity;

  for (let t = 0; t < tries; t++) {
    const useC = {}, useN = {};
    const month = [];
    let ok = true;
    for (let w = 0; w < 4 && ok; w++) {
      let week = null;
      for (let attempt = 0; attempt < 60 && !week; attempt++) week = buildWeekPlan(w, useC, useN);
      if (!week) { ok = false; break; }
      week.CI.forEach((i) => { useC[i] = (useC[i] || 0) + 1; });
      week.NI.forEach((i) => { if (i >= 0) useN[i] = (useN[i] || 0) + 1; });
      month.push(week);
    }
    if (!ok) continue;
    // Puntuación: repetir platos en el mes penaliza mucho; platos sin usar, algo menos
    let score = 0;
    Object.values(useC).forEach((u) => { score += u * u; });
    Object.values(useN).forEach((u) => { score += u * u; });
    score += 2 * (DIARIO.filter((i) => !useC[i]).length + S.cenas.filter((_, i) => !useN[i]).length);
    if (score < bestScore) { bestScore = score; best = month; }
  }
  return { best, bestScore };

  function buildWeekPlan(w, useC, useN) {
    const CI = [], NI = [];
    const fest = FEST[w % FEST.length];
    const sunKeys = CK[fest];
    const keyCnt = {}; sunKeys.forEach((k) => { keyCnt[k] = 1; });
    const tipoCnt = {};
    let prevKeys = [];
    let higDone = hasHig(S.comidas[fest]);
    const riceDays = [];
    // Recuento de grupos de la semana (el plato del domingo cuenta desde el principio)
    const fam = { [CF[fest]]: 1 };
    let legCount = 0;
    const famOk = (f, add) => {
      const g = { ...fam }; add.forEach((x) => { g[x] = (g[x] || 0) + 1; });
      const P = (g.pescado || 0) + (g.azul || 0), C = (g.carne || 0) + (g.roja || 0);
      return P <= 6 && C <= 6 && (g.roja || 0) <= 2;
    };
    // candidatos ordenados al azar, con preferencia por los menos usados en el mes
    const order = (arr, use) => arr.map((i) => [i, (use[i] || 0) + R() * 0.9]).sort((a, b) => a[1] - b[1]).map((x) => x[0]);
    for (let d = 0; d < 6; d++) {
      let chosen = null;
      const left = 6 - d; // días entre semana que quedan, incluido este
      const needLeg = (3 - legCount) >= left;
      const azulNow = (fam.azul || 0);
      const needAzul = (2 - azulNow) >= left;
      const comCands = order(DIARIO, useC);
      for (const ci of comCands) {
        if (needLeg && !hasLeg(S.comidas[ci])) continue;
        if (CI.includes(ci)) continue;
        if (CK[ci].some((k) => (keyCnt[k] || 0) >= 2 || prevKeys.includes(k) || (d === 5 && sunKeys.includes(k)))) continue;
        if (higDone && hasHig(S.comidas[ci])) continue;
        const tc = CT[ci];
        if (tc !== "otro" && (tipoCnt[tc] || 0) >= TIPO_MAX[tc]) continue;
        if (tc === "arroz" && (riceDays.includes(d - 1) || d === 5)) continue;
        for (const ni of order(S.cenas.map((_, i) => i), useN)) {
          if (NI.includes(ni)) continue;
          if (big(CF[ci]) === big(NF[ni])) continue;
          if (/\bhue:/.test(S.comidas[ci]) && /\bhue:/.test(S.cenas[ni])) continue; // nunca huevo en comida y cena
          if (X.clash(CD[ci], ND[ni])) continue;
          const tn = NT[ni];
          if (tn !== "otro" && (tn === tc || (tipoCnt[tn] || 0) + (tn === tc ? 1 : 0) >= TIPO_MAX[tn])) continue;
          const ks = [...new Set(CK[ci].concat(NK[ni]))];
          if (CK[ci].some((k) => NK[ni].includes(k))) continue;
          if (NK[ni].some((k) => (keyCnt[k] || 0) >= 2 || prevKeys.includes(k) || (d === 5 && sunKeys.includes(k)))) continue;
          if (hasHig(S.cenas[ni]) && (higDone || hasHig(S.comidas[ci]))) continue;
          if (!famOk(null, [CF[ci], NF[ni]])) continue;
          if (needAzul && CF[ci] !== "azul" && NF[ni] !== "azul") continue;
          chosen = [ci, ni, ks];
          break;
        }
        if (chosen) break;
      }
      if (!chosen) { DIAG["día " + d + " sin combinación"] = (DIAG["día " + d + " sin combinación"] || 0) + 1; return null; }
      const [ci, ni, ks] = chosen;
      CI.push(ci); NI.push(ni);
      fam[CF[ci]] = (fam[CF[ci]] || 0) + 1; fam[NF[ni]] = (fam[NF[ni]] || 0) + 1;
      if (hasLeg(S.comidas[ci])) legCount++;
      ks.forEach((k) => { keyCnt[k] = (keyCnt[k] || 0) + 1; });
      [CT[ci], NT[ni]].forEach((tp) => { if (tp !== "otro") tipoCnt[tp] = (tipoCnt[tp] || 0) + 1; });
      if (CT[ci] === "arroz") riceDays.push(d);
      if (hasHig(S.comidas[ci]) || hasHig(S.cenas[ni])) higDone = true;
      prevKeys = ks;
    }
    // Domingo: plato de fiesta y sin cena; sus proteínas no pueden coincidir con las del sábado
    if (sunKeys.some((k) => prevKeys.includes(k))) { DIAG["sábado-domingo"] = (DIAG["sábado-domingo"] || 0) + 1; return null; }
    CI.push(fest); NI.push(-1);
    // Reglas de la semana completa
    const famT = {};
    CI.forEach((i) => { famT[CF[i]] = (famT[CF[i]] || 0) + 1; });
    NI.forEach((i) => { if (i >= 0) famT[NF[i]] = (famT[NF[i]] || 0) + 1; });
    const fam2 = famT;
    const P = (fam2.pescado || 0) + (fam2.azul || 0), C = (fam2.carne || 0) + (fam2.roja || 0);
    const fail = (r) => { DIAG[r] = (DIAG[r] || 0) + 1; return null; };
    if (P < 4) return fail("pescado<4"); if (P > 6) return fail("pescado>6"); if (C < 4) return fail("carne<4"); if (C > 6) return fail("carne>6");
    if ((fam2.azul || 0) < 2) return fail("azul<2"); if ((fam2.roja || 0) > 2) return fail("roja>2"); if ((fam2.huevo || 0) < 1) return fail("huevo<1");
    if (CI.slice(0, 6).filter((i) => hasLeg(S.comidas[i])).length < 3) return fail("legumbre<3");
    return { CI, NI };
  }
}

const DIAG = {};
if (process.env.DIAG) { const r = planSeason(process.env.DIAG, 7919, 300); console.log(process.env.DIAG, r.best ? "ok" : "sin plan", DIAG); process.exit(0); }
const out = {};
const report = [];
// ONLY=verano → solo replanifica esa estación y conserva el resto del plan existente
if (process.env.ONLY && fs.existsSync(path.join(root, "plan.js"))) Object.assign(out, require(path.join(root, "plan.js")).PLAN);
for (const key of Object.keys(X.SEASONS).filter((k) => !process.env.ONLY || k === process.env.ONLY)) {
  let res = null;
  // Varias semillas; se queda con el mejor plan encontrado
  for (let seed = 1; seed <= (+process.env.SEEDS || 3); seed++) {
    const r = planSeason(key, seed * 7919, +process.env.TRIES || 4000);
    if (r.best && (!res || r.bestScore < res.bestScore)) res = r;
  }
  if (!res) res = { best: null };
  if (!res.best) { console.error("No se encontró plan válido para", key); process.exit(1); }
  out[key] = res.best.map((wk) => [wk.CI, wk.NI]);
  const dc = new Set(res.best.flatMap((wk) => wk.CI)).size, dn = new Set(res.best.flatMap((wk) => wk.NI.filter((i) => i >= 0))).size;
  report.push(`${key}: comidas distintas ${dc}/28, cenas distintas ${dn}/24 (puntuación ${res.bestScore})`);
}
fs.writeFileSync(path.join(root, "plan.js"),
  "// Plan de platos por estación y semana, generado por tools/planner.js (no editar a mano).\n" +
  "// PLAN[estación][semana] = [índices de comidas (lun-dom), índices de cenas (lun-sáb; -1 = domingo sin cena)]\n" +
  "const PLAN = " + JSON.stringify(out) + ";\n" +
  "if (typeof module !== \"undefined\") module.exports = { PLAN };\n");
console.log(report.join("\n"));
