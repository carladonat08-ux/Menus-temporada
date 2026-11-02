// Recetas paso a paso. Las cantidades salen del menú de cada día; aquí solo van los pasos.
// Regla de la casa: sin cebolla, sin pimiento (verdura), sin lactosa. Especias todas, pimentón incluido. El ajo solo aromatiza el aceite.

const NOTA_AJO = "Aceite de ajo: calienta el aceite a fuego suave con 1-2 dientes de ajo laminados durante 2-3 minutos y retira el ajo antes de seguir. El sabor pasa al aceite, pero los fructanos no.";
const NOTA_TAPER = "Si se cocina el día antes: deja templar como mucho 1-2 horas, guarda en la nevera a 4 °C o menos y recalienta hasta que humee. El arroz y el pescado, mejor en 24 horas.";
const NOTA_INTEGRAL = "El arroz integral necesita más agua y más tiempo que el blanco (30-40 minutos). Si se queda seco antes de estar tierno, añade un poco de agua caliente.";
const NOTA_LEG = "Enjuaga bien las legumbres de bote con agua fría: se digieren mejor.";
const NOTA_CALDO = "No uses caldos ni pastillas de caldo comerciales: casi todos llevan cebolla y ajo. Si usas tinta de calamar o sepia, mira que la etiqueta no lleve cebolla ni ajo.";
const CALDO_CASERO = "Haz un caldo casero: hierve 15 minutos agua con sal, una hoja de laurel y, si tienes, unas cabezas de gamba o espinas de pescado (si no, usa solo agua). Cuélalo.";

const RECETAS = [
  // ---------------- Desayunos ----------------
  [/^Porridge de avena/, () => ({ tiempo: "10 min", pasos: [
    "Pon la avena con la leche sin lactosa en un cazo y cuece a fuego medio 4-5 minutos, removiendo, hasta que espese.",
    "Aparta del fuego y deja templar 1 minuto. Añade el whey y mezcla bien: si lo cueces, se apelmaza.",
    "Sírvelo con la fruta troceada y las nueces picadas por encima. Si te gusta, añade canela.",
  ] })],
  [/^Tostada de espelta con tomate y revuelto/, () => ({ tiempo: "10 min", pasos: [
    "Tuesta el pan y ralla el tomate por encima con una pizca de sal y el aceite.",
    "Bate el huevo con las claras y pimienta, y cuájalo en una sartén antiadherente a fuego suave, removiendo, hasta que quede jugoso.",
    "Pon el revuelto sobre la tostada y termina con el queso curado rallado o en lascas.",
  ] })],
  [/^Tostada de espelta con tomate, aceite, jamón/, () => ({ tiempo: "5 min", pasos: [
    "Tuesta el pan y ralla el tomate por encima con una pizca de sal y el aceite.",
    "Coloca encima el jamón cocido y el queso curado en lonchas finas.",
    "Prepara el café con la leche sin lactosa caliente (o sola, si lo prefieres sin café).",
  ] })],
  [/^Yogur o skyr con copos de avena/, () => ({ tiempo: "5 min", pasos: [
    "Pon el yogur o skyr sin lactosa en un bol.",
    "Añade los copos de avena (si te gusta, déjalos 5 minutos para que se ablanden) y la fruta troceada.",
    "Termina con las nueces picadas y canela al gusto.",
  ] })],
  [/^Tortitas de avena/, () => ({ tiempo: "15 min", pasos: [
    "Tritura la avena con la leche sin lactosa, las claras, el whey y la mitad del plátano hasta tener una masa espesa. Deja reposar 5 minutos.",
    "Calienta una sartén antiadherente con unas gotas de aceite. Vierte la masa en porciones pequeñas.",
    "Cuando salgan burbujas (unos 2 minutos), dales la vuelta y cocina 1-2 minutos más.",
    "Sírvelas con el resto del plátano en rodajas y la crema de cacahuete. Opcional: canela.",
  ] })],

  // ---------------- Arroces ----------------
  [/^Paella valenciana/, () => ({ tiempo: "1 h 10 min", notas: [NOTA_AJO, NOTA_INTEGRAL], pasos: [
    "En la paella, prepara el aceite de ajo y retira el ajo.",
    "Sala el pollo y el conejo troceados y dóralos a fuego medio unos 10-12 minutos, hasta que estén bien dorados por todos lados.",
    "Añade la bajoqueta troceada y el garrofó y rehoga 5 minutos.",
    "Echa el tomate rallado y sofríe 3-4 minutos. Añade una cucharadita de pimentón dulce y remueve unos segundos, sin que se queme.",
    "Añade agua (unas 4 veces el volumen del arroz), una ramita de romero y el azafrán. Deja hervir 20 minutos para hacer el caldo y prueba de sal.",
    "Quita el romero y reparte el arroz por toda la paella. A partir de aquí no se remueve.",
    "Cuece 10 minutos a fuego fuerte y después 20-25 minutos a fuego medio-bajo, hasta que el arroz esté tierno y sin caldo.",
    "Tapa con un paño limpio y deja reposar 5 minutos antes de servir.",
  ] })],
  [/^Paella de marisco/, () => ({ tiempo: "1 h", notas: [NOTA_AJO, NOTA_INTEGRAL, NOTA_CALDO], pasos: [
    CALDO_CASERO,
    "En la paella, prepara el aceite de ajo y retira el ajo. Marca las gambas peladas 1 minuto y resérvalas.",
    "Sofríe la sepia y el calamar troceados 5-6 minutos. Añade el tomate rallado y sofríe 3 minutos más. Añade media cucharadita de pimentón dulce y remueve unos segundos.",
    "Añade el caldo caliente (unas 3,5-4 veces el volumen del arroz) con el azafrán. Cuando hierva, reparte el arroz y no remuevas más.",
    "Cuece 10 minutos a fuego fuerte y 20-25 minutos a fuego medio. En los últimos 3 minutos coloca las gambas por encima.",
    "Deja reposar 5 minutos tapada con un paño.",
  ] })],
  [/^Arròs a banda/, () => ({ tiempo: "1 h", notas: [NOTA_AJO, NOTA_INTEGRAL, NOTA_CALDO], pasos: [
    CALDO_CASERO,
    "En la paella, prepara el aceite de ajo y retira el ajo. Dora la sepia troceada 6-8 minutos.",
    "Añade el tomate rallado y sofríe 3 minutos. Incorpora el arroz y remueve 1 minuto.",
    "Añade el caldo caliente (unas 3,5 veces el volumen del arroz) y el azafrán. Cuece 30-35 minutos, primero fuerte y después a fuego medio.",
    "En los últimos 3 minutos añade las gambas peladas. Reposa 5 minutos. Tradicionalmente lleva alioli; aquí sírvelo con limón.",
  ] })],
  [/^Arròs negre/, () => ({ tiempo: "55 min", notas: [NOTA_AJO, NOTA_INTEGRAL, NOTA_CALDO], pasos: [
    "En la paella, prepara el aceite de ajo y retira el ajo.",
    "Dora la sepia troceada a fuego medio 8 minutos.",
    "Añade el tomate rallado y sofríe 3 minutos. Incorpora el arroz y remueve 1 minuto.",
    "Añade agua caliente o caldo casero (unas 3,5 veces el volumen del arroz) con la tinta (1-2 sobres) y una hoja de laurel. Prueba de sal.",
    "Cuece 10 minutos a fuego fuerte y 20-25 minutos a fuego medio, sin remover. Reposa 5 minutos y sirve con limón.",
  ] })],
  [/^Arròs amb bledes/, () => ({ tiempo: "50 min", notas: [NOTA_AJO, NOTA_LEG, NOTA_INTEGRAL], pasos: [
    "Si el bacalao es salado, desálalo 24-36 horas en agua fría en la nevera, cambiando el agua 3-4 veces.",
    "Lava las acelgas. Corta las pencas en trozos pequeños y las hojas más grandes, por separado.",
    "En una olla, prepara el aceite de ajo y retira el ajo. Rehoga las pencas 5 minutos y después las hojas 2 minutos.",
    "Añade el tomate rallado y sofríe 3 minutos. Incorpora agua (unas 4 veces el volumen del arroz), el azafrán y una pizca de comino.",
    "Cuando hierva, añade el arroz y cuece 25 minutos. Añade las alubias y el bacalao en trozos y cuece 8-10 minutos más.",
    "Debe quedar meloso, con algo de caldo. Prueba de sal y deja reposar 3 minutos.",
  ] })],
  [/^Arròs amb fesols i naps/, () => ({ tiempo: "1 h 20 min", notas: [NOTA_LEG, NOTA_INTEGRAL], pasos: [
    "Pon la costilla troceada en una olla con agua fría, sal y una hoja de laurel. Hierve 30 minutos retirando la espuma.",
    "Añade el nabo pelado en dados y las acelgas troceadas. Cuece 15 minutos.",
    "Añade el azafrán y el arroz y cuece 25 minutos.",
    "Incorpora las alubias y cuece 8-10 minutos más, hasta que el arroz esté tierno. Debe quedar caldoso.",
    "Prueba de sal y reposa 5 minutos antes de servir.",
  ] })],
  [/^Arròs al forn/, () => ({ tiempo: "1 h 15 min", notas: [NOTA_AJO, NOTA_LEG, NOTA_INTEGRAL], pasos: [
    "Precalienta el horno a 200 °C. Prepara un caldo caliente: agua con sal, azafrán y una hoja de laurel.",
    "En una cazuela de barro (o una sartén que luego pasarás a una fuente), prepara el aceite de ajo y retira el ajo.",
    "Dora la costilla troceada y el magro en dados 8-10 minutos. Añade la mitad de la patata en rodajas y dórala 3 minutos.",
    "Añade la mitad del tomate rallado y sofríe 2 minutos. Añade una cucharadita de pimentón dulce y enseguida los garbanzos y el arroz; remueve 1 minuto.",
    "Vierte el caldo caliente (unas 3 veces el volumen del arroz). Coloca por encima el resto de la patata en rodajas y medio tomate cortado.",
    "Hornea 20 minutos tapado con papel de aluminio y después 20-25 minutos destapado, hasta que el arroz esté hecho y seco por arriba.",
    "Reposa 5 minutos fuera del horno.",
  ] })],
  [/^Arroz caldoso/, (t) => ({ tiempo: "55 min", notas: [NOTA_AJO, NOTA_INTEGRAL], pasos: [
    "En una olla, prepara el aceite de ajo y retira el ajo.",
    "Dora el pollo troceado con sal 6-8 minutos.",
    `Añade ${/bajoqueta/.test(t) ? "la bajoqueta troceada" : /calabaza/.test(t) ? "la calabaza en dados y la bajoqueta" : "las acelgas troceadas"}${/zanahoria|acelgas/.test(t) ? " y la zanahoria en rodajas" : ""} y rehoga 5 minutos.`,
    "Echa el tomate rallado (si lo lleva) y sofríe 2 minutos.",
    "Añade agua (unas 5 veces el volumen del arroz), el azafrán y una ramita de romero. Hierve 10 minutos.",
    "Añade el arroz y cuece 30-35 minutos, hasta que esté tierno. Debe quedar con bastante caldo.",
    "Sírvelo recién hecho. Si es para el día siguiente, guarda una parte del caldo aparte y añádelo al recalentar.",
  ] })],
  [/^Arroz con conejo/, () => ({ tiempo: "1 h", notas: [NOTA_AJO, NOTA_INTEGRAL], pasos: [
    "En una paella o cazuela, prepara el aceite de ajo y retira el ajo.",
    "Dora el conejo troceado con sal 10 minutos. Añade la bajoqueta y rehoga 5 minutos.",
    "Añade el tomate rallado y sofríe 3 minutos.",
    "Incorpora agua (unas 4 veces el volumen del arroz), el azafrán y una ramita de romero. Hierve 15 minutos.",
    "Quita el romero, añade el arroz y cuece 30-35 minutos sin remover. Reposa 5 minutos.",
  ] })],
  [/^Arroz de verduras/, () => ({ tiempo: "50 min", notas: [NOTA_AJO, NOTA_INTEGRAL], pasos: [
    "En una paella, prepara el aceite de ajo y retira el ajo.",
    "Dora la sepia troceada 6 minutos. Añade la berenjena y el calabacín en dados y saltea 5 minutos.",
    "Añade el tomate rallado y sofríe 3 minutos. Incorpora el arroz y remueve 1 minuto.",
    "Añade agua caliente (unas 3,5 veces el volumen del arroz) con el azafrán y sal. Cuece 30-35 minutos sin remover. Reposa 5 minutos.",
  ] })],
  [/^Fideuà/, (t) => ({ tiempo: "35 min", notas: [NOTA_AJO, NOTA_CALDO], pasos: [
    CALDO_CASERO,
    `En una paella, prepara el aceite de ajo y retira el ajo. Marca las gambas 1 minuto y resérvalas${/sepia/.test(t) ? ". Dora la sepia troceada 5 minutos" : ""}.`,
    "Añade el tomate rallado y sofríe 3 minutos. Vierte el caldo (unas 3 veces el peso de los fideos) con el azafrán.",
    "Cuando hierva, añade los fideos de arroz y cuécelos 4-5 minutos (mira el tiempo del paquete: se hacen rápido).",
    "Añade las gambas, deja 1 minuto más y reposa 2 minutos. Sirve con limón.",
  ] })],
  [/^Sepia a la plancha con arroz|^Calamares a la plancha con arroz|^Dorada a la plancha con arroz|^Pollo al limón con arroz/, null], // generador

  // ---------------- Legumbres y ollas ----------------
  [/^Lentejas con sepia/, (t) => ({ tiempo: "40 min", notas: [NOTA_AJO, NOTA_LEG, NOTA_TAPER], pasos: [
    "En una olla, prepara el aceite de ajo y retira el ajo. Dora la sepia en dados con sal 5 minutos.",
    `Añade ${/calabaza/.test(t) ? "la calabaza en dados" : "la zanahoria en rodajas"} y rehoga 3 minutos.`,
    "Añade el tomate triturado, una cucharadita de pimentón dulce, una pizca de comino y una hoja de laurel y sofríe 3 minutos.",
    "Cubre con agua y cuece 15 minutos, hasta que la sepia esté tierna.",
    "Incorpora las lentejas escurridas y cuece 8 minutos más. Prueba de sal y sirve caliente.",
  ] })],
  [/^Garbanzos con pollo/, (t) => ({ tiempo: "35 min", notas: [NOTA_AJO, NOTA_LEG, NOTA_TAPER], pasos: [
    "En una olla, prepara el aceite de ajo y retira el ajo. Dora el pollo en dados con sal 6-8 minutos.",
    ...(/calabaza/.test(t) ? ["Añade la calabaza en dados y rehoga 3 minutos."] : []),
    "Añade el tomate triturado, una cucharadita de comino y otra de pimentón dulce, y sofríe 2 minutos.",
    "Añade los garbanzos escurridos y un vaso de agua, y cuece 12 minutos.",
    "Añade las espinacas, deja 3 minutos más hasta que se ablanden y prueba de sal.",
  ] })],
  [/^Ensalada templada de lentejas/, () => ({ tiempo: "15 min", notas: [NOTA_LEG], pasos: [
    "Cuece el huevo 10 minutos, enfríalo y pélalo.",
    "Cuece la patata en dados 12-15 minutos en agua con sal y escúrrela.",
    "Enjuaga las lentejas y caliéntalas 2 minutos en una sartén con la mitad del aceite y una pizca de comino.",
    "Pon la rúcula en el plato con el tomate troceado, la patata y las lentejas templadas por encima.",
    "Añade el huevo duro en cuartos y aliña con el resto del aceite, sal y unas gotas de vinagre.",
  ] })],
  [/^Alubias blancas con (sepia|bacalao)/, (t) => ({ tiempo: "35 min", notas: [NOTA_AJO, NOTA_LEG, NOTA_TAPER], pasos: [
    ...(/bacalao/.test(t) ? ["Si el bacalao es salado, desálalo 24-36 horas antes en agua fría en la nevera, cambiando el agua 3-4 veces."] : []),
    `En una olla, prepara el aceite de ajo y retira el ajo. ${/sepia/.test(t) ? "Dora la sepia en dados con sal 5 minutos." : "Añade el tomate triturado."}`,
    `${/sepia/.test(t) ? "Añade el tomate triturado, u" : "U"}na cucharadita de pimentón dulce y una hoja de laurel, y sofríe 3 minutos.`,
    `Añade un vaso y medio de agua${/sepia/.test(t) ? " y cuece 12 minutos, hasta que la sepia esté tierna" : " y cuece 5 minutos"}.`,
    `Añade las alubias escurridas y ${/acelgas/.test(t) ? "las acelgas troceadas" : "las espinacas"}${/bacalao/.test(t) ? " y el bacalao en trozos" : ""}, y cuece 6-8 minutos más. Prueba de sal.`,
  ] })],
  [/^Olleta/, () => ({ tiempo: "1 h 10 min", notas: [NOTA_AJO, NOTA_LEG, NOTA_INTEGRAL, NOTA_TAPER], pasos: [
    "En una olla, prepara el aceite de ajo y retira el ajo. Dora el magro de cerdo en dados con sal 5 minutos.",
    "Añade las pencas de acelga troceadas (guarda las hojas) y el nabo en dados, y rehoga 3 minutos con una cucharadita de pimentón dulce.",
    "Cubre con 1 litro de agua, añade una hoja de laurel y una pizca de azafrán y cuece 25 minutos.",
    "Añade el arroz y cuece 30 minutos (arroz integral).",
    "Añade las alubias escurridas y las hojas de acelga y cuece 5 minutos más. Debe quedar caldosa. Prueba de sal.",
  ] })],
  [/^Ensalada de lentejas con caballa/, () => ({ tiempo: "20 min", notas: [NOTA_LEG], pasos: [
    "Haz la caballa a la plancha con sal, 3-4 minutos por cada lado, y desmígala sin espinas.",
    "Enjuaga las lentejas y escúrrelas bien.",
    "Mezcla las lentejas con el pepino y el tomate en dados y la caballa por encima.",
    "Aliña con el aceite, sal, comino y unas gotas de limón.",
  ] })],
  [/^Garbanzos con calamares/, () => ({ tiempo: "20 min", notas: [NOTA_AJO, NOTA_LEG], pasos: [
    "En una sartén, prepara el aceite de ajo y retira el ajo. Saltea los calamares en anillas con sal 3 minutos a fuego fuerte y resérvalos.",
    "En la misma sartén, saltea el calabacín en dados 4 minutos.",
    "Añade el tomate triturado y una cucharadita de pimentón dulce y deja 2 minutos.",
    "Añade los garbanzos escurridos y los calamares, y saltea 3 minutos más. Prueba de sal.",
  ] })],
  [/^Lentejas con arroz/, () => ({ tiempo: "45 min", notas: [NOTA_AJO, NOTA_LEG, NOTA_TAPER], pasos: [
    "Cuece los huevos 10 minutos en agua hirviendo, enfríalos y pélalos.",
    "En una olla, prepara el aceite de ajo y retira el ajo. Rehoga la zanahoria en dados 5 minutos.",
    "Añade el tomate triturado, una cucharadita de pimentón dulce, una hoja de laurel y una pizca de comino y sofríe 3 minutos.",
    "Añade 2 vasos de agua y el arroz y cuece 25 minutos.",
    "Incorpora las lentejas escurridas y cuece 10 minutos más, hasta que el arroz esté tierno. Prueba de sal.",
    "Sirve con el huevo duro en cuartos por encima.",
  ] })],
  [/^Ensalada de lentejas/, () => ({ tiempo: "40 min", notas: [NOTA_LEG], pasos: [
    "Hierve el arroz en agua con sal 35 minutos, escúrrelo y enfríalo.",
    "Enjuaga las lentejas y escúrrelas bien.",
    "Mezcla las lentejas y el arroz con el tomate y el pepino en dados, la lechuga y el atún escurrido.",
    "Aliña con el aceite, sal, comino y unas gotas de vinagre o limón. Mejor si reposa 15 minutos en la nevera.",
  ] })],
  [/^Potaje de garbanzos/, () => ({ tiempo: "35 min", notas: [NOTA_AJO, NOTA_LEG, NOTA_TAPER], pasos: [
    "Si el bacalao es salado, desálalo 24-36 horas antes en agua fría en la nevera, cambiando el agua 3-4 veces.",
    "En una olla, prepara el aceite de ajo y retira el ajo. Añade el tomate triturado, una cucharadita de pimentón dulce, el comino y una hoja de laurel y sofríe 3 minutos.",
    "Añade 2 vasos de agua y los garbanzos y cuece 10 minutos.",
    "Añade las espinacas y el bacalao en trozos y cuece 6-8 minutos más. Prueba de sal y sirve caliente.",
  ] })],
  [/^Fesols amb bledes/, () => ({ tiempo: "35 min", notas: [NOTA_AJO, NOTA_LEG, NOTA_TAPER], pasos: [
    "Cuece el huevo 10 minutos, enfríalo y pélalo.",
    "Pon la patata pelada en trozos en una olla con agua, sal y laurel y cuécela 15 minutos.",
    "Añade las acelgas troceadas (primero las pencas y 3 minutos después las hojas) y cuece 8 minutos.",
    "Añade las alubias y deja 3-4 minutos más. Escurre casi todo el caldo.",
    "Aliña con el aceite de ajo, sal y comino, y sirve con el huevo duro.",
  ] })],
  [/^Garbanzos guisados con pollo/, () => ({ tiempo: "45 min", notas: [NOTA_AJO, NOTA_LEG, NOTA_TAPER], pasos: [
    "En una olla, prepara el aceite de ajo y retira el ajo. Dora el pollo troceado con sal 8 minutos.",
    "Añade la zanahoria en rodajas y la patata en trozos y rehoga 3 minutos.",
    "Añade el tomate triturado, una cucharadita de pimentón dulce, la cúrcuma, el comino y una hoja de laurel y sofríe 2 minutos.",
    "Cubre con agua y cuece 20 minutos. Añade los garbanzos y cuece 10 minutos más. Prueba de sal.",
  ] })],
  [/^Ensalada de (garbanzos|alubias)/, (t, it) => {
    const has = (c) => it.some(([x]) => x === c);
    const verd = ["tom", "pep", "lec"].filter(has).map((c) => ({ tom: "el tomate", pep: "el pepino", lec: "la lechuga" }[c]));
    const resto = [has("pat") && "la patata", has("atu") && "el atún escurrido", has("pol") && "el pollo en tiras", has("hue") && "el huevo en cuartos", has("oli") && "las aceitunas"].filter(Boolean);
    return { tiempo: "15 min", notas: [NOTA_LEG], pasos: [
      ...(has("hue") ? ["Cuece el huevo 10 minutos, enfríalo y pélalo."] : []),
      ...(has("pat") ? ["Cuece la patata en dados 12-15 minutos en agua con sal, escúrrela y deja que se temple."] : []),
      "Enjuaga la legumbre y escúrrela bien.",
      ...(has("pol") ? ["Haz el pollo a la plancha con sal y especias, y córtalo en tiras."] : []),
      `Corta ${verd.join(", ").replace(/, ([^,]*)$/, " y $1")} y mézclalo con la legumbre${resto.length ? ", " + resto.join(", ").replace(/, ([^,]*)$/, " y $1") : ""}.`,
      "Aliña con aceite, sal, comino y unas gotas de vinagre o limón.",
    ] };
  }],
  [/^Garbanzos salteados con gambas/, () => ({ tiempo: "20 min", notas: [NOTA_AJO, NOTA_LEG], pasos: [
    "En una sartén, prepara el aceite de ajo y retira el ajo.",
    "Saltea el calabacín en dados 5 minutos con sal.",
    "Añade las gambas peladas y saltéalas 1-2 minutos.",
    "Incorpora los garbanzos escurridos y el tomate rallado, con pimentón y comino, y saltea 3 minutos más.",
    "Termina con perejil y unas gotas de limón.",
  ] })],
  [/^Brocheta de pollo/, () => ({ tiempo: "20 min", pasos: [
    "Corta el pollo en dados y el calabacín en rodajas gruesas. Alíñalos con sal, pimentón, tomillo y unas gotas de aceite.",
    "Ensártalos alternando en palillos de brocheta (opcional) y hazlos a la plancha 8-10 minutos, dándoles la vuelta.",
    "Sirve con el tomate en rodajas aliñado con orégano.",
  ] })],
  [/^Putxero/, () => ({ tiempo: "1 h 45 min", notas: [NOTA_LEG, NOTA_TAPER], pasos: [
    "Separa unos 30 g de la ternera, pícala muy fina y mézclala con perejil, nuez moscada y sal. Forma 2-3 pilotes pequeñas apretando bien.",
    "Pon en una olla el resto de la ternera y el pollo con agua fría, sal y una hoja de laurel. Hierve 60 minutos retirando la espuma.",
    "Añade la patata, la zanahoria, el nabo y la chirivía pelados y en trozos grandes, y las pilotes. Cuece 25 minutos.",
    "Añade los garbanzos y cuece 10 minutos más. Prueba de sal.",
    "Sirve el caldo aparte o junto con las verduras y la carne. El caldo que sobre sirve para la sopa de putxero.",
  ] })],
  [/^Pilotes de ternera/, (t) => ({ tiempo: "45 min", notas: [NOTA_AJO, NOTA_TAPER], pasos: [
    "Mezcla la carne picada con el huevo batido, perejil picado, nuez moscada, pimienta negra y sal. Forma bolitas del tamaño de una nuez, apretando bien.",
    "Dóralas en una cazuela con el aceite de ajo (ya sin el ajo) 4-5 minutos y resérvalas.",
    "En la misma cazuela, cuece el tomate triturado con una hoja de laurel y orégano 10 minutos.",
    "Añade las pilotes y cuece tapado 10-12 minutos a fuego suave.",
    /arroz/.test(t) ? "Mientras, hierve el arroz en agua con sal 35 minutos y escúrrelo." : "Mientras, cuece la patata en trozos en agua con sal 15-20 minutos.",
  ] })],

  // ---------------- Pescado tradicional ----------------
  [/^Giraboix/, () => ({ tiempo: "40 min", notas: [NOTA_AJO, NOTA_TAPER], pasos: [
    "Si el bacalao es salado, desálalo 24-36 horas antes en agua fría en la nevera, cambiando el agua 3-4 veces.",
    "Cuece el huevo 10 minutos, enfríalo y pélalo.",
    "En una olla con agua, sal y una hoja de laurel, cuece la patata en trozos 12 minutos.",
    "Añade la bajoqueta troceada y cuece 8 minutos. Añade el bacalao en trozos y cuece 5 minutos más.",
    "Escurre y sirve todo junto con el huevo duro, regado con el aceite de ajo y una pizca de pimentón. Tradicionalmente lleva alioli, que aquí se sustituye por el aceite de ajo.",
  ] })],
  [/^Borreta/, () => ({ tiempo: "35 min", notas: [NOTA_AJO, NOTA_TAPER], pasos: [
    "Si el bacalao es salado, desálalo 24-36 horas antes, cambiando el agua 3-4 veces.",
    "En una cazuela, prepara el aceite de ajo y retira el ajo. Fuera del fuego, añade una cucharadita de pimentón dulce y remueve. Añade la patata en trozos, cúbrela de agua con laurel y comino y cuece 15 minutos.",
    "Añade las espinacas y cuece 3 minutos. Incorpora el bacalao en trozos y cuece 4 minutos.",
    "Casca el huevo encima, tapa y deja que se escalfe 3-4 minutos. Prueba de sal y sirve.",
  ] })],
  [/^Bullit/, (t) => ({ tiempo: "35 min", notas: [NOTA_TAPER], pasos: [
    "Pon a hervir una olla con agua, sal y una hoja de laurel.",
    /huevo/.test(t) ? "Añade los huevos con cáscara (lavados) y cuécelos 10 minutos junto a la verdura. Sácalos, enfríalos y pélalos." : "Prepara todo el pescado y la verdura limpios y troceados.",
    "Echa la patata en trozos y cuece 10 minutos.",
    `Añade ${[/bajoqueta/.test(t) && "la bajoqueta", /calabacín/.test(t) && "el calabacín", /calabaza/.test(t) && "la calabaza", /zanahoria/.test(t) && "la zanahoria", /acelgas/.test(t) && "las acelgas"].filter(Boolean).join(", ") || "la verdura"} y cuece 8-10 minutos más.`,
    /merluza/.test(t) ? "Añade la merluza en trozos en los últimos 5-6 minutos." : "Comprueba con un cuchillo que la patata está tierna.",
    ...(/atún/.test(t) ? ["Escurre el atún y repártelo por encima al servir."] : []),
    "Escurre y sirve aliñado con el aceite (puede ser aceite de ajo), sal y limón.",
  ] })],
  [/^Merluza en salsa verde/, () => ({ tiempo: "35 min", notas: [NOTA_AJO, NOTA_TAPER, NOTA_CALDO], pasos: [
    "Cuece la patata en rodajas y la bajoqueta en agua con sal 15-18 minutos.",
    "En una cazuela baja, prepara el aceite de ajo y retira el ajo. Añade una cucharadita de harina de espelta o de maíz y remueve 1 minuto.",
    "Añade medio vaso de agua poco a poco, removiendo, y mucho perejil picado.",
    "Coloca la merluza y cuécela 6-8 minutos moviendo la cazuela para que la salsa ligue. Sirve con la patata y la bajoqueta.",
  ] })],
  [/^Boquerones en vinagre/, () => ({ tiempo: "20 min + marinado", notas: ["Importante: congela los boquerones limpios a -20 °C al menos 5 días antes de marinarlos, para eliminar el anisakis."], pasos: [
    "Limpia los boquerones: quita la cabeza, las tripas y la espina central, y ábrelos en lomos.",
    "Congélalos al menos 5 días. Descongélalos en la nevera.",
    "Cúbrelos con vinagre de vino, un poco de agua y sal y déjalos en la nevera 6-8 horas, hasta que estén blancos.",
    "Escúrrelos y cúbrelos con aceite y perejil picado (puede ser aceite de ajo).",
    "Para la ensalada: cuece la patata 20 minutos, enfríala, trocéala y mézclala con el tomate y el pepino. Aliña con aceite y sal.",
  ] })],
  [/^Pulpo/, () => ({ tiempo: "30 min", pasos: [
    "Cuece la patata con piel en agua con sal y una hoja de laurel 20-25 minutos. Pélala y córtala en rodajas.",
    "Calienta el pulpo cocido 2 minutos en el agua de las patatas, escúrrelo y córtalo en rodajas con tijera.",
    "Pon el pulpo sobre la patata y aliña con aceite de oliva, sal gruesa y pimentón (dulce, picante o mezcla), como el pulpo a la gallega.",
    "Acompaña con la lechuga y el tomate (si lo lleva) aliñados con sal y unas gotas de vinagre.",
  ] })],
  [/^(Clòtxines|Mejillones).*vapor/, (t) => ({ tiempo: "20 min", notas: ["Si usas carne de mejillón congelada ya cocida, solo tienes que calentarla 2-3 minutos al vapor o en la sartén."], pasos: [
    "Limpia las clòtxines (mejillones) bajo el grifo y quítales las barbas. Desecha las que estén abiertas o rotas.",
    "Ponlas en una olla con un dedo de agua, una hoja de laurel y unas rodajas de limón. Tapa y cuece a fuego fuerte 4-5 minutos, hasta que se abran. Desecha las que sigan cerradas.",
    /patata/.test(t) ? "Cuece la patata en agua con sal 20 minutos." : "Tuesta el pan.",
    "Prepara la lechuga (y el tomate, si lo lleva) aliñada con aceite, sal y limón.",
    "Sírvelas con limón, pimienta negra y un hilo de aceite.",
  ] })],
  [/^(Mejillones|Clòtxines).*salsa de tomate/, () => ({ tiempo: "25 min", notas: [NOTA_AJO], pasos: [
    "En una sartén, prepara el aceite de ajo y retira el ajo.",
    "Añade el tomate triturado, una hoja de laurel y orégano y cuece 10 minutos.",
    "Añade los mejillones (carne o abiertos al vapor) y cuece 3-4 minutos.",
    "Sírvelo con el pan tostado para mojar.",
  ] })],

  // ---------------- Carne tradicional ----------------
  [/^Figatells/, (t) => ({ tiempo: "35 min", notas: ["El hígado debe quedar bien hecho por dentro, sin partes rosadas."], pasos: [
    "Pica (o pide picados en la carnicería) el lomo y el hígado juntos.",
    "Mezcla la carne con sal, pimienta negra, una pizca de clavo molido y nuez moscada.",
    "Forma 3-4 hamburguesitas planas. Tradicionalmente se envuelven en redaño (tela de cerdo), pero es opcional.",
    "Hazlas a la plancha con unas gotas de aceite, 4-5 minutos por cada lado.",
    /puré de calabaza/.test(t) ? "Cuece la calabaza y la patata en trozos 20 minutos, escurre y chafa con un poco de aceite, sal y nuez moscada."
      : /acelgas/.test(t) ? "Cuece la patata en trozos 15 minutos y añade las acelgas los últimos 8 minutos. Escurre y aliña con aceite."
      : "Cuece la patata en trozos 15-20 minutos en agua con sal.",
    /ensalada/.test(t) ? "Prepara la ensalada de lechuga y tomate y alíñala." : /tomate/.test(t) ? "Corta el tomate y alíñalo con sal, aceite y orégano." : "Sirve los figatells con la guarnición.",
  ] })],
  [/^Conejo al ajillo/, () => ({ tiempo: "50 min", notas: [NOTA_AJO, NOTA_TAPER], pasos: [
    "Precalienta el horno a 200 °C. Corta la patata en rodajas finas, alíñala con unas gotas de aceite y sal y hornéala 30 minutos.",
    "En una sartén honda, prepara el aceite de ajo y retira el ajo.",
    "Dora el conejo troceado con sal, romero, tomillo y, si te gusta, una guindilla o una pizca de cayena, a fuego medio 12-15 minutos.",
    "Añade medio vaso de agua y un chorrito de limón, tapa y cuece 10 minutos más.",
    "Mientras, cuece la bajoqueta 8 minutos en agua con sal. Sírvelo todo junto.",
  ] })],
  [/^Conejo guisado/, () => ({ tiempo: "55 min", notas: [NOTA_AJO, NOTA_TAPER], pasos: [
    "En una cazuela, prepara el aceite de ajo y retira el ajo. Dora el conejo troceado con sal 10 minutos.",
    "Añade la zanahoria en rodajas y la patata en trozos y rehoga 3 minutos.",
    "Añade el tomate triturado, una hoja de laurel, romero y tomillo y sofríe 2 minutos.",
    "Cubre a medias con agua y cuece tapado 30-35 minutos, hasta que el conejo esté tierno. Prueba de sal.",
  ] })],
  [/^Pollo al horno/, (t) => ({ tiempo: "50 min", notas: [NOTA_TAPER], pasos: [
    "Precalienta el horno a 200 °C.",
    `Corta la patata en rodajas y ${/calabaza/.test(t) ? "la calabaza en dados" : /chirivía/.test(t) ? "la chirivía en bastones" : "la zanahoria en rodajas"}. Ponlo en una fuente con la mitad del aceite, sal y las especias, y hornea 15 minutos.`,
    "Sala el pollo, úntalo con el resto del aceite, romero, tomillo y pimienta, y ponlo sobre la verdura.",
    "Hornea 30-35 minutos, dándole la vuelta a mitad de tiempo, hasta que esté dorado y sin jugos rosados.",
  ] })],
  [/^Pavo en salsa de almendras/, () => ({ tiempo: "45 min", notas: [NOTA_AJO, NOTA_INTEGRAL, NOTA_TAPER], pasos: [
    "Hierve el arroz en agua con sal 35 minutos y escúrrelo.",
    "En una sartén, prepara el aceite de ajo y retira el ajo. Dora el pavo en dados con sal 5 minutos y resérvalo.",
    "Tuesta las almendras 2 minutos en la misma sartén. Tritúralas con el tomate triturado y medio vaso de agua.",
    "Vierte la salsa en la sartén, añade el pavo y cuece 8-10 minutos a fuego suave. Sirve con el arroz.",
  ] })],
  [/^Lomo con puré/, () => ({ tiempo: "30 min", notas: [NOTA_AJO], pasos: [
    "Cuece la patata en trozos 20 minutos, escúrrela y cháfala con un poco de su agua de cocción, la mitad del aceite, sal y nuez moscada.",
    "Saltea las espinacas 2-3 minutos con el aceite de ajo.",
    "Haz el lomo a la plancha con sal, orégano y pimienta, 3-4 minutos por lado. Sírvelo con el puré y las espinacas.",
  ] })],

  // ---------------- Pasta ----------------
  [/^Macarrones integrales con carne/, () => ({ tiempo: "30 min", notas: [NOTA_AJO, NOTA_TAPER], pasos: [
    "Cuece la pasta en agua con sal el tiempo que indique el paquete y escúrrela.",
    "En una sartén, prepara el aceite de ajo y retira el ajo. Dora la carne picada con sal y pimienta 5 minutos.",
    "Añade el tomate triturado y orégano y cuece 12-15 minutos a fuego suave.",
    "Mezcla con la pasta y sirve con el parmesano rallado.",
  ] })],
  [/^Macarrones integrales con atún/, () => ({ tiempo: "25 min", notas: [NOTA_AJO, NOTA_TAPER], pasos: [
    "Cuece la pasta en agua con sal el tiempo que indique el paquete y escúrrela.",
    "En una sartén, prepara el aceite de ajo y retira el ajo. Añade el tomate triturado con orégano y cuece 10 minutos.",
    "Añade el atún escurrido y desmigado y calienta 2 minutos.",
    "Mezcla con la pasta y sirve con el parmesano rallado.",
  ] })],
  [/^Macarrones integrales fríos/, () => ({ tiempo: "20 min", pasos: [
    "Cuece la pasta según el paquete, escúrrela y pásala por agua fría.",
    "Mézclala con el tomate en dados, el atún escurrido y la mozzarella sin lactosa en dados.",
    "Aliña con el aceite, sal, orégano y albahaca. Guárdala en la nevera hasta servir.",
  ] })],

  // ---------------- Huevos ----------------
  [/^Tortilla de patata/, (t) => ({ tiempo: "35 min", pasos: [
    "Pela la patata y córtala en láminas finas. Para usar poco aceite, ponla en un plato con sal, tápala y cuécela en el microondas 8-10 minutos, hasta que esté tierna.",
    "Bate los huevos y las claras con sal y mézclalos con la patata. Deja reposar 5 minutos.",
    "En una sartén antiadherente con unas gotas de aceite, cuaja la tortilla a fuego medio-bajo 4-5 minutos. Dale la vuelta con un plato y cuaja 2-3 minutos más.",
    /ensalada valenciana|aceitunas/.test(t) ? "Prepara la ensalada valenciana: lechuga, tomate y aceitunas, aliñada con aceite y sal." : "Prepara la ensalada y alíñala con el resto del aceite.",
  ] })],
  [/^Tortilla de bajoqueta/, () => ({ tiempo: "25 min", notas: [NOTA_AJO], pasos: [
    "Corta la bajoqueta en trocitos y cuécela 8 minutos en agua con sal. Escúrrela bien.",
    "Saltéala 2 minutos en una sartén con la mitad del aceite de ajo.",
    "Bate los huevos y las claras con sal y pimienta y viértelos sobre la bajoqueta. Cuaja a fuego medio-bajo y dale la vuelta.",
    "Sirve con el tomate aliñado con sal, aceite y orégano, y el pan.",
  ] })],
  [/^Tortilla de (calabacín|espinacas)/, (t) => ({ tiempo: "20 min", pasos: [
    `${/calabacín/.test(t) ? "Corta el calabacín en dados pequeños y saltéalo 6-7 minutos" : "Saltea las espinacas 2-3 minutos"} en una sartén antiadherente con la mitad del aceite y sal.`,
    `Bate los huevos y las claras con pimienta y nuez moscada${/queso/.test(t) ? " y añade el queso curado rallado" : ""}.`,
    "Viértelo sobre la verdura y cuaja la tortilla a fuego medio-bajo, dándole la vuelta con un plato.",
    /ensalada/.test(t) ? "Sírvela con la ensalada aliñada y el pan." : "Sírvela con el pan.",
  ] })],
  [/^Tortilla francesa/, (t) => ({ tiempo: "10 min", pasos: [
    "Bate los huevos (y las claras, si las lleva) con sal y pimienta.",
    "Cuaja la tortilla en una sartén antiadherente con unas gotas de aceite a fuego medio.",
    `Antes de doblarla, pon dentro ${/jamón/.test(t) ? "el jamón cocido" : "el queso curado rallado"}.`,
    "Sírvela con el tomate en rodajas aliñado con aceite y orégano, y el pan.",
  ] })],
  [/^Revuelto/, (t) => ({ tiempo: "15 min", pasos: [
    `Saltea ${/calabacín/.test(t) ? "el calabacín en dados 5 minutos" : "las espinacas 2 minutos"} en una sartén con el aceite.`,
    "Añade las gambas peladas y saltea 1-2 minutos.",
    "Baja el fuego, añade el huevo y las claras batidos con sal y pimienta, y remueve hasta que cuajen jugosos.",
    "Sírvelo con el pan tostado.",
  ] })],
  [/^Crema de calabacín/, () => ({ tiempo: "30 min", pasos: [
    "Cuece el calabacín y la patata en trozos con poca agua y sal 15 minutos.",
    "Tritura con el aceite hasta que quede fina. Ajusta de sal y pimienta.",
    "Vuelve a poner la crema al fuego suave, casca el huevo encima, tapa y deja que se haga (escalfado) 3-4 minutos.",
    "Sirve con los taquitos de jamón cocido marcados 1 minuto en la sartén y el queso curado rallado.",
  ] })],
  [/^Crema de calabaza/, () => ({ tiempo: "35 min", pasos: [
    "Cuece la calabaza, la zanahoria y la patata en trozos con poca agua y sal 20 minutos.",
    "Tritura con el aceite, nuez moscada y una pizca de jengibre y comino.",
    "Vuelve a poner la crema al fuego suave, casca el huevo encima, tapa y deja que se haga (escalfado) 3-4 minutos.",
    "Sirve con los taquitos de jamón cocido marcados 1 minuto en la sartén y el queso curado rallado.",
  ] })],

  // ---------------- Masas ----------------
  [/^Tomate aliñado/, () => ({ tiempo: "15 min", pasos: [
    "Cuece el huevo 10 minutos, enfríalo y pélalo.",
    "Corta el tomate maduro en gajos y aliña con sal, aceite y orégano.",
    "Añade el atún escurrido y el huevo en cuartos. Sirve con el pan.",
  ] })],
  [/^Ensalada caprese/, () => ({ tiempo: "10 min", pasos: [
    "Corta el tomate y la mozzarella sin lactosa en rodajas y alterna en el plato.",
    "Añade el jamón cocido.",
    "Aliña con aceite, sal, pimienta y albahaca. Sirve con el pan.",
  ] })],
  [/^Ensalada de arroz/, () => ({ tiempo: "45 min", notas: [NOTA_INTEGRAL, NOTA_TAPER], pasos: [
    "Hierve el arroz en agua con sal 35 minutos, escúrrelo y enfríalo bajo el grifo.",
    "Cuece el huevo 10 minutos, enfríalo y pícalo.",
    "Mezcla el arroz con el tomate y el pepino en dados, el atún escurrido y el huevo.",
    "Aliña con aceite, sal, orégano y limón. Guárdala en la nevera.",
  ] })],
  [/^Ensalada valenciana/, () => ({ tiempo: "15 min", pasos: [
    "Cuece los huevos 10 minutos, enfríalos y pélalos.",
    "Lava la lechuga y córtala. Corta el tomate en gajos y el pepino en rodajas.",
    "Monta la ensalada con las aceitunas, el huevo en cuartos y el atún (si lo lleva).",
    "Aliña con aceite, sal y vinagre de vino. Sirve con el pan.",
  ] })],
  [/^Sardinas en lata.*endibias/, () => ({ tiempo: "10 min", pasos: [
    "Corta el tomate en rodajas y las endibias en hojas o tiras.",
    "Aliña con aceite, sal y orégano.",
    "Pon por encima las sardinas escurridas, enteras o en trozos, y unas gotas de limón.",
  ] })],
  [/^Sardinas en lata/, () => ({ tiempo: "10 min", pasos: [
    "Corta el tomate en rodajas y alíñalo con sal, aceite y orégano.",
    "Pon encima las sardinas escurridas, enteras o en trozos (la espina se come: aporta calcio).",
    "Termina con unas gotas de limón y perejil picado.",
  ] })],
  [/^Caldo de putxero/, () => ({ tiempo: "45 min", pasos: [
    "Pon el pollo en una olla con agua fría, sal, una hoja de laurel, la zanahoria, el nabo y la parte verde del puerro. Hierve 35-40 minutos a fuego suave.",
    "Mientras, cuece el huevo 10 minutos, enfríalo y pícalo.",
    "Saca el pollo, desmígalo y devuélvelo al caldo con la verdura en trocitos.",
    "Sirve el caldo bien caliente con el huevo picado y perejil.",
  ] })],
  [/^Ensalada de tomate con atún/, () => ({ tiempo: "15 min", pasos: [
    "Cuece el huevo 10 minutos, enfríalo y pélalo.",
    "Corta el tomate en gajos y la lechuga en tiras.",
    "Añade el atún escurrido, el huevo en cuartos y las aceitunas.",
    "Aliña con aceite, sal, orégano y unas gotas de vinagre.",
  ] })],
];

// ---------------- Generador para platos a la plancha / al horno ----------------
const PESC_BL = ["mer", "bac", "dor", "lub", "tru"], PESC_AZ = ["sar", "cab", "bon", "jur", "boq", "sal"], MARISCO = ["gam", "cal", "sep"];
const NOMBRES = {
  mer: ["la merluza", "f"], bac: ["el bacalao", "m"], dor: ["la dorada", "f"], lub: ["la lubina", "f"], tru: ["la trucha", "f"],
  sar: ["las sardinas", "fp"], cab: ["la caballa", "f"], bon: ["el bonito", "m"], jur: ["el sorell (jurel)", "m"], boq: ["los boquerones", "mp"], sal: ["el salmón", "m"],
  gam: ["las gambas", "fp"], cal: ["los calamares", "mp"], sep: ["la sepia", "f"],
  pol: ["la pechuga de pollo", "f"], pav: ["la pechuga de pavo", "f"], mus: ["el muslo de pollo", "m"], lom: ["el lomo", "m"],
};
const yList = (a) => a.length < 2 ? a.join("") : a.slice(0, -1).join(", ") + " y " + a[a.length - 1];
function genReceta(t, items) {
  const has = (c) => items.some(([x]) => x === c);
  const tl = t.toLowerCase();
  const horno = /al horno|papillote/.test(tl);
  const pasos = [];
  const notas = [];
  // Guarniciones que tardan más: primero
  if (has("pat")) {
    if (/puré/.test(tl)) pasos.push("Cuece la patata en trozos 20 minutos, escúrrela y cháfala con un poco de aceite y sal.");
    else if (horno || /patatas? al horno|asada/.test(tl)) pasos.push("Precalienta el horno a 200 °C. Corta la patata en rodajas finas, alíñala con unas gotas de aceite y sal, y hornéala 25-30 minutos.");
    else if (/ensalada de patata/.test(tl)) pasos.push("Cuece la patata con piel 20-25 minutos, enfríala, pélala y trocéala.");
    else pasos.push("Cuece la patata en trozos en agua con sal y una hoja de laurel 15-20 minutos.");
  }
  if (has("arr")) { pasos.push("Hierve el arroz integral en agua con sal 35 minutos y escúrrelo."); notas.push(NOTA_INTEGRAL); }
  if (has("cza")) pasos.push(/puré/.test(tl) ? "Cuece la calabaza en trozos 15-20 minutos y cháfala con nuez moscada." : "Corta la calabaza en dados y ásala en el horno a 200 °C 25 minutos con unas gotas de aceite, sal y comino.");
  if (has("ber")) pasos.push("Corta la berenjena en rodajas y ásala a la plancha o en el horno 15-20 minutos con sal y orégano.");
  if (has("nab")) pasos.push("Cuece el nabo pelado en dados 12-15 minutos en agua con sal (o ásalo junto al pescado).");
  // Proteína
  const P = items.find(([c]) => PROT.includes(c));
  const pc = P ? P[0] : null;
  if (pc) {
    const [n, g] = NOMBRES[pc] || [ING[pc][0].toLowerCase(), "m"];
    const lo = { m: "lo", f: "la", mp: "los", fp: "las" }[g];
    const fin = { m: "o", f: "a", mp: "os", fp: "as" }[g];
    if (horno && (PESC_BL.includes(pc) || PESC_AZ.includes(pc)))
      pasos.push(`Coloca ${n} en una fuente${has("pat") ? " sobre la patata" : ""}${has("tom") ? " con el tomate en rodajas" : ""}, con sal, las especias, un chorrito de limón y un poco de aceite. Hornea a 200 °C 15-20 minutos${/papillote/.test(tl) ? ", envuelto en papel de horno" : ""}.`);
    else if (PESC_BL.includes(pc) || ["bon", "cab", "jur", "sal"].includes(pc))
      pasos.push(`Seca ${n} con papel de cocina, sala y haz${lo} a la plancha bien caliente con unas gotas de aceite, 3-4 minutos por lado según el grosor.`);
    else if (["sar", "boq"].includes(pc)) pasos.push(`Limpia ${n}, sala con sal gruesa y haz${lo} a la plancha bien caliente 2 minutos por lado.`);
    else if (MARISCO.includes(pc)) pasos.push(`Limpia ${n}${pc === "gam" ? "" : " y trocéa" + lo}. Haz${lo} a la plancha muy caliente con unas gotas de aceite ${pc === "gam" ? "1-2 minutos por lado" : "3-4 minutos, hasta que esté" + (g.endsWith("p") ? "n" : "") + " dorad" + fin}. Termina con perejil y limón.`);
    else if (pc === "hig") pasos.push("Limpia el hígado de nervios, sálalo y hazlo a la plancha 2-3 minutos por lado, hasta que no quede rosado por dentro.");
    else if (pc === "con") pasos.push("Sala el conejo troceado y hazlo a la plancha o en la sartén con romero y tomillo 15-20 minutos, dándole vueltas, hasta que esté dorado y hecho.");
    else if (["pol", "pav", "mus"].includes(pc)) pasos.push(`Sala ${n} y haz${lo} a la plancha con unas gotas de aceite y las especias, 4-5 minutos por lado, hasta que no quede rosad${fin}${/limón/.test(tl) ? ". Al final, añade el zumo de medio limón" : ""}.`);
    else if (pc === "lom") pasos.push("Sala el lomo y hazlo a la plancha con pimentón, orégano y pimienta, 3-4 minutos por lado.");
    else pasos.push(`Cocina ${n} a la plancha con sal y unas gotas de aceite.`);
  }
  // Verdura y acompañamientos rápidos
  if (has("cbc") && !has("ber")) pasos.push(/vapor/.test(tl) ? "Cuece al vapor el calabacín y la zanahoria 8-10 minutos." : "Corta el calabacín en rodajas o dados y hazlo a la plancha o salteado 5-6 minutos con sal.");
  else if (has("zan") && /vapor/.test(tl)) pasos.push("Cuece la zanahoria al vapor 8-10 minutos.");
  if (has("ace")) pasos.push("Cuece las acelgas troceadas 8 minutos (o rehógalas con el aceite de ajo) y escúrrelas.");
  if (has("esp")) pasos.push("Saltea las espinacas 2-3 minutos con unas gotas de aceite (puede ser aceite de ajo).");
  if (has("end")) pasos.push("Corta las endibias por la mitad y márcalas a la plancha 2 minutos, o sírvelas crudas en hojas aliñadas.");
  if (has("jud")) pasos.push("Cuece la bajoqueta (judía verde) troceada 8-10 minutos en agua con sal.");
  const ens = [has("lec") && "lechuga", has("tom") && "tomate", has("pep") && "pepino", has("oli") && "aceitunas", /ensalada de patata/.test(tl) && "la patata cocida", has("jud") && /ensalada de patata/.test(tl) && "la bajoqueta"].filter(Boolean);
  if (has("lec") || (/ensalada/.test(tl) && ens.length)) pasos.push(`Prepara la ensalada con ${yList(ens)}, y alíñala con aceite, sal y vinagre o limón.`);
  else if (has("tom") && !horno) pasos.push("Corta el tomate en rodajas y alíñalo con sal, aceite y orégano.");
  if (has("pep") && !has("lec") && !/ensalada/.test(tl)) pasos.push("Corta el pepino en rodajas y añádelo al tomate.");
  if (has("pan")) pasos.push("Tuesta el pan.");
  pasos.push("Aliña el plato con el aceite que quede, las especias recomendadas y unas gotas de limón.");
  if (/ajillo|aceite de ajo/.test(tl)) notas.unshift(NOTA_AJO);
  const tiempo = has("pat") && (horno || /asada|al horno/.test(tl)) || has("arr") || has("cza") ? "40 min" : has("pat") ? "30 min" : "20 min";
  return { tiempo, pasos, notas };
}

function recetaDe(meal, slot) {
  const base = meal.t.split(" + ")[0]; // sin guarnición ni postre
  let r = null;
  for (const [re, fn] of RECETAS) { if (re.test(base)) { if (fn) r = fn(base, meal.items); break; } }
  if (!r) r = genReceta(base, meal.items);
  // Si el plato no lleva huevo, se quitan los pasos y menciones del huevo
  if (!meal.items.some(([c]) => c === "hue")) {
    r.pasos = r.pasos
      .filter((p) => !/^(Cuece|Si lleva huevo, cuécelo|Cuece el huevo|Cuece los huevos)[^.]*huevo/.test(p.trim()))
      .map((p) => p
        .replace(/,? (el|y el) huevo( duro)?( en cuartos| picado)?( por encima)?/g, "")
        .replace(/ Sirve con el huevo duro picado por encima\./, "")
        .replace(/Sirve con el huevo duro picado por encima\./, "Sirve caliente.")
        .replace(/Sirve con el huevo y el resto del tomate\./, "Sirve con el resto del tomate.")
        .replace(/, el huevo en cuartos y las aceitunas/, " y las aceitunas")
        .replace(/ con el huevo duro\./, ".")
        .replace(/ \(huevos y claras\)/, ""))
      .filter((p) => p.trim());
  }
  if (meal.patExtra) r.pasos.unshift("Cuece la patata en dados 12-15 minutos en agua con sal (o 6 minutos al microondas, tapada) y alíñala con un poco del aceite.");
  // Guarnición de verdura de temporada
  if (meal.side && GUARN[meal.side]) {
    let sv = -1; r.pasos.forEach((p, i) => { if (/S[ií]rv|Emplata/.test(p)) sv = i; }); // antes del último paso de servir
    if (sv >= 0) r.pasos.splice(sv, 0, GUARN[meal.side].paso); else r.pasos.push(GUARN[meal.side].paso);
  }
  // Ensalada de acompañamiento añadida para llegar a la ración de verdura
  if (meal.items.some(([c]) => c === "lec") && !r.pasos.some((p) => /lechuga|ensalada/i.test(p))) {
    r.pasos.push("Acompaña con una ensalada de lechuga (y el tomate, si lleva), aliñada con un poco del aceite del plato, sal y vinagre o limón.");
  }
  // Si el plato de hoy no lleva pan (por ejemplo, las cenas), se quitan las referencias al pan
  if (!meal.items.some(([c]) => c === "pan")) {
    r.pasos = r.pasos
      .filter((p) => !/^Tuesta el pan\.?$/.test(p.trim()))
      .map((p) => p
        .replace(/^Tuesta el pan y ralla el tomate por encima con una pizca de sal\./, "Ralla o corta el tomate y alíñalo con una pizca de sal.")
        .replace(/Pon las sardinas escurridas sobre el pan\./, "Pon las sardinas escurridas sobre el tomate.")
        .replace(/,? y (el )?pan( tostado)?\./g, ".")
        .replace(/ Sirve con el pan( tostado)?( para mojar)?\./g, "")
        .replace(/Sírvelo con el pan tostado( para mojar)?\./, "Sírvelo bien caliente.")
        .replace(/Sírvela con el pan\./, "Sírvela recién hecha.")
        .replace(/ y tuesta el pan/g, "")
        .replace(/Prepara la ensalada y tuesta el pan\./, "Prepara la ensalada.")
        .replace(/Sirve con el tomate aliñado con sal, aceite y orégano, y el pan\./, "Sirve con el tomate aliñado con sal, aceite y orégano."))
      .filter((p) => p.trim());
  }
  const notas = [...(r.notas || [])];
  if (/de postre$/.test(meal.t)) notas.push("De postre, una fruta rica en vitamina C: ayuda a absorber el hierro de la legumbre.");
  if (slot === "c" && !notas.includes(NOTA_TAPER)) notas.push(NOTA_TAPER);
  return { titulo: base, tiempo: r.tiempo, pasos: r.pasos, notas };
}

if (typeof module !== "undefined") module.exports = { recetaDe, RECETAS };
