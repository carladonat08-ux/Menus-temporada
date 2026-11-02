// Auditoría de recetas: cobertura, ingredientes prohibidos y coherencia receta ↔ ingredientes ↔ título
const fs = require("fs"), vm = require("vm");
const root = require("path").join(__dirname, "..", "..") + "/";
const strip = (f) => fs.readFileSync(root + f, "utf8").replace(/if \(typeof module[^\n]*\n/g, "");
const ctx = { console }; vm.createContext(ctx);
vm.runInContext(strip("plan.js") + "\n" + strip("data.js") + "\n" + strip("recipes.js") + "\nthis.X={ING,SEASONS,buildWeek,recetaDe,RECETAS,GUARN};", ctx);
const X = ctx.X;
const fails = [], seen = new Map();
const F = (m) => fails.push(m);

// Palabras de la receta → códigos que deben estar en el plato
const WORDS = [
  [/\bpatatas?\b/, ["pat"]], [/\barroz\b(?! con)/, ["arr", "fid"]], [/\bpasta\b/, ["pas"]], [/\bfideos\b/, ["fid"]], [/\bpan\b(?! rallado)/, ["pan"]],
  [/\bhuevos?\b/, ["hue"]], [/\bclaras\b/, ["cla"]], [/\btomate\b/, ["tom", "tri"]], [/\bbajoqueta\b|judía verde/, ["jud"]],
  [/\bcalabaza\b/, ["cza"]], [/\bcalabacín\b/, ["cbc"]], [/\bzanahoria\b/, ["zan"]], [/\bespinacas\b/, ["esp"]], [/\bacelgas\b/, ["ace"]],
  [/\bberenjena\b/, ["ber"]], [/\bnabo\b/, ["nab"]], [/\bchirivía\b/, ["chi"]], [/\bendibias\b/, ["end"]], [/\blechuga\b/, ["lec"]], [/\bpepino\b/, ["pep"]],
  [/\baceitunas\b/, ["oli"]], [/\bgarbanzos\b/, ["gar"]], [/\balubias\b/, ["alu"]], [/\blentejas\b/, ["len"]], [/\bgarrofó\b/, ["grf"]],
  [/\bqueso\b/, ["que", "par", "moz"]], [/\bmozzarella\b/, ["moz"]], [/\bparmesano\b/, ["par"]], [/\bjamón\b/, ["jam"]],
  [/\bpollo\b/, ["pol", "mus", "hig"]], [/\bpavo\b/, ["pav", "fpv"]], [/\bconejo\b/, ["con"]], [/\bcostilla\b/, ["cos"]], [/\blomo\b/, ["lom"]], [/\bternera\b|carne picada/, ["ter"]],
  [/\bmerluza\b/, ["mer"]], [/\bbacalao\b/, ["bac"]], [/\bsepia\b/, ["sep"]], [/\bcalamar(es)?\b/, ["cal"]], [/\bgambas\b/, ["gam"]], [/\bsardinas\b/, ["sar", "sca"]],
  [/\batún\b/, ["atu"]], [/\bmejillones|clòtxines\b/, ["mej"]], [/\bpulpo\b/, ["pul"]], [/\bhígado\b/, ["hig"]], [/\bavena\b/, ["avn"]], [/\bwhey\b/, ["whe"]],
  [/\bplátano\b/, ["pla"]], [/\bnueces\b/, ["nue"]], [/\balmendras\b/, ["alm"]], [/crema de cacahuete/, ["cac"]], [/\bleche\b(?! de coco)/, ["lsl"]],
];
// Ingredientes opcionales/aromáticos que una receta puede mencionar aunque no estén en la lista
const OPC = /(si lo lleva|si la lleva|si las lleva|si los lleva|si lleva|opcional|o una|o un |puede ser|si usas|según la receta|si no tienes|si te gusta|en lugar de|opción rápida)/;

const MESES_EST = { primavera: [3, 4, 5, 6], verano: [6, 7, 8, 9], otono: [9, 10, 11, 12], invierno: [12, 1, 2, 3] };
for (const k in X.SEASONS) for (const mo of MESES_EST[k]) for (let w = 0; w < 4; w++) X.buildWeek(k, w, { month: mo }).forEach((d) => {
  d.meals.forEach(([l, m]) => { if (/Sirve con\.|con y |, y\.|  |\by y\b|\bcon con\b/.test(m.t) || / y [^,+()]* y [^,+()]* y /.test(m.t.split(" + ")[0]) || (l !== "Comida" && l !== "Cena" && / y [^,]* y /.test(m.t.replace(/ \(60-90.*\)/, "")) && !/^Tostada|^Tortitas|^Porridge|^Yogur o skyr con copos/.test(m.t))) F(`frase rota en ${l}: "${m.t}"`); });
  [[0, "d"], [2, "c"], [4, "n"]].forEach(([j, slot]) => {
    const m = d.meals[j][1];
    if (m.noRecipe) return;
    const base = m.t.split(" + ")[0];
    const r = X.recetaDe(m, slot);
    const keyId = base + "|" + m.items.map((x) => x[0]).sort().join(",");
    if (seen.has(keyId)) return; seen.set(keyId, 1);
    if (!r || !r.pasos || r.pasos.length < 2) F(`sin receta o con menos de 2 pasos: ${base}`);
    const text = (r.pasos.join(" ") + " ").toLowerCase();
    r.pasos.forEach((p) => { if (/Sirve con\.|con y |, y\.|\by y\b|\bcon con\b|undefined|NaN/.test(p)) F(`frase rota en la receta de ${base}: "${p.slice(0, 80)}"`); });
    const codes = new Set(m.items.map((x) => x[0]));
    // Prohibidos en la receta
    if (/cebolla/.test(text.replace(/sin cebolla|ni cebolla|cebolla o ajo en polvo/g, ""))) F(`cebolla en receta: ${base}`);
    if (/\bpimientos?\b/.test(text)) F(`pimiento en receta: ${base}`);
    if (/coliflor|champiñ|boniato|\bmiel\b|manzana|\bpera\b/.test(text)) F(`ingrediente no tolerado en receta: ${base}`);
    if (/alioli/.test(text) && !/tradicionalmente lleva alioli|sin alioli|se sustituye/.test(text)) F(`alioli: ${base}`);
    if (/\bajo\b/.test(text) && !/aceite de ajo|retira el ajo|ajo laminado|ajo y retira|el ajo\./.test(text) && !/ajillo/.test(base.toLowerCase())) F(`ajo sin retirar: ${base}`);
    // Cena: nunca arroz/pasta/legumbres en la receta
    if (slot === "n" && /\b(arroz|pasta|fideos|lentejas|garbanzos|alubias)\b/.test(text)) F(`cena con hidrato prohibido en la receta: ${base}`);
    // Coherencia receta → ingredientes
    r.pasos.forEach((p) => {
      const pl = p.toLowerCase();
      if (OPC.test(pl)) return;
      WORDS.forEach(([re, cs]) => { if (re.test(pl) && !cs.some((c) => codes.has(c))) F(`"${base}" (${slot}): la receta menciona ${re.source.replace(/\\b|\(|\)|\?|s\?/g, "")} y el plato no lo lleva → "${p.slice(0, 70)}…"`); });
    });
    // Coherencia título → ingredientes
    const tl = base.toLowerCase();
    WORDS.forEach(([re, cs]) => { if (re.test(tl) && !cs.some((c) => codes.has(c)) && !/sin (cebolla|morcilla|alioli|ajo)/.test(tl.match(re)?.input || "")) F(`título "${base}" menciona ${re.source} y no está en ingredientes`); });
    // Ingredientes principales que la receta no explica
    const MAIN = ["pat", "arr", "pas", "fid", "hue", "pol", "mus", "pav", "con", "ter", "lom", "cos", "hig", "mer", "bac", "dor", "lub", "tru", "sar", "cab", "bon", "jur", "boq", "sca", "atu", "gam", "cal", "sep", "mej", "pul", "len", "gar", "alu", "esp", "ace", "cza", "cbc", "jud", "ber", "nab", "chi", "end", "lec", "pan", "que", "moz"];
    const NAMEW = { pat: /patata/, arr: /arroz/, pas: /pasta|macarrones/, fid: /fideos/, hue: /huevo|tortilla|revuelto/, pol: /pollo/, mus: /pollo|muslo/, pav: /pavo/, con: /conejo/, ter: /ternera|carne|pilotes/, lom: /lomo|magro|carne|figatells/, cos: /costilla/, hig: /hígado|figatells/,
      mer: /merluza|pescado/, bac: /bacalao/, dor: /dorada|pescado/, lub: /lubina|pescado/, tru: /trucha|pescado/, sar: /sardinas/, cab: /caballa|pescado/, bon: /bonito|pescado/, jur: /sorell|jurel|pescado/, boq: /boquerones/, sca: /sardinas/, atu: /atún|pescado/,
      gam: /gambas|marisco/, cal: /calamar/, sep: /sepia/, mej: /mejillones|clòtxines/, pul: /pulpo/, len: /lentejas|legumbre/, gar: /garbanzos|legumbre/, alu: /alubias|legumbre/, esp: /espinacas|verdura/, ace: /acelgas|pencas|verdura/, cza: /calabaza|verdura/,
      cbc: /calabacín|verdura/, jud: /bajoqueta|judía|verdura/, ber: /berenjena|verdura/, nab: /nabo|verdura/, chi: /chirivía|verdura/, end: /endibias/, lec: /lechuga|ensalada/, pan: /pan|tostada|masa/, que: /queso/, moz: /mozzarella/ };
    m.items.forEach(([c]) => { if (MAIN.includes(c) && NAMEW[c] && !NAMEW[c].test(text)) F(`"${base}" (${slot}): la receta no dice qué hacer con ${X.ING[c][0]}`); });
  });
});
console.log(`Recetas distintas revisadas: ${seen.size}`);
const uniq = [...new Set(fails)];
console.log(`FALLOS: ${uniq.length}`); uniq.forEach((x) => console.log("  ✗ " + x));
