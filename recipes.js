// Recetas paso a paso. Las cantidades salen del menú de cada día; aquí solo van los pasos.
// Regla de la casa: sin cebolla, sin pimiento (verdura), sin lactosa. Especias todas, pimentón incluido. El ajo solo aromatiza el aceite.

const NOTA_AJO = "Aceite de ajo: calienta el aceite a fuego suave con 1-2 dientes de ajo laminados durante 2-3 minutos y retira el ajo antes de seguir. El sabor pasa al aceite, pero los fructanos no.";
const NOTA_TAPER = "Si se cocina el día antes: deja templar como mucho 1-2 horas, guarda en la nevera a 4 °C o menos y recalienta hasta que humee. El arroz y el pescado, mejor en 24 horas.";
const NOTA_INTEGRAL = "El arroz integral necesita más agua y más tiempo que el blanco (30-40 minutos). Si se queda seco antes de estar tierno, añade un poco de agua caliente.";
const NOTA_LEG = "Enjuaga bien las legumbres de bote con agua fría: se digieren mejor.";

const RECETAS = [
  // ---------------- Desayunos ----------------
  [/^Porridge de avena/, () => ({ tiempo: "10 min", pasos: [
    "Pon la avena con la leche sin lactosa en un cazo y cuece a fuego medio 4-5 minutos, removiendo, hasta que espese.",
    "Aparta del fuego y deja templar 1 minuto. Añade el whey y mezcla bien: si lo cueces, se apelmaza.",
    "Sírvelo con la fruta troceada y las nueces picadas por encima. Si te gusta, añade canela.",
  ] })],
  [/^Tostada de espelta con 2 huevos revueltos/, () => ({ tiempo: "10 min", pasos: [
    "Tuesta el pan.",
    "Bate los huevos con una pizca de sal y pimienta negra. Cuájalos en una sartén antiadherente con el aceite, a fuego suave y removiendo, hasta que queden jugosos.",
    "Ralla el tomate sobre el pan, pon el revuelto encima y termina con el queso curado rallado o en lascas.",
  ] })],
  [/^Tortitas de avena/, () => ({ tiempo: "15 min", pasos: [
    "Tritura la avena con la leche, el huevo, el whey y la mitad del plátano hasta tener una masa espesa. Deja reposar 5 minutos.",
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
  [/^Paella de marisco/, () => ({ tiempo: "1 h", notas: [NOTA_AJO, NOTA_INTEGRAL], pasos: [
    "Haz un caldo rápido: hierve las cabezas y cáscaras de las gambas con agua, sal y una hoja de laurel 15 minutos y cuélalo.",
    "En la paella, prepara el aceite de ajo y retira el ajo. Marca las gambas peladas 1 minuto y resérvalas.",
    "Sofríe la sepia y el calamar troceados 5-6 minutos. Añade el tomate rallado y sofríe 3 minutos más. Añade media cucharadita de pimentón dulce y remueve unos segundos.",
    "Añade el caldo caliente (unas 3,5-4 veces el volumen del arroz) con el azafrán. Cuando hierva, reparte el arroz y no remuevas más.",
    "Cuece 10 minutos a fuego fuerte y 20-25 minutos a fuego medio. En los últimos 3 minutos coloca las gambas por encima.",
    "Deja reposar 5 minutos tapada con un paño.",
  ] })],
  [/^Arròs a banda/, () => ({ tiempo: "1 h", notas: [NOTA_AJO, NOTA_INTEGRAL], pasos: [
    "Hierve las cabezas de las gambas con agua, sal y laurel 15-20 minutos para hacer el caldo y cuélalo.",
    "En la paella, prepara el aceite de ajo y retira el ajo. Dora la sepia troceada 6-8 minutos.",
    "Añade el tomate rallado y sofríe 3 minutos. Incorpora el arroz y remueve 1 minuto.",
    "Añade el caldo caliente (unas 3,5 veces el volumen del arroz) y el azafrán. Cuece 30-35 minutos, primero fuerte y después a fuego medio.",
    "En los últimos 3 minutos añade las gambas peladas. Reposa 5 minutos. Tradicionalmente lleva alioli; aquí sírvelo con limón.",
  ] })],
  [/^Arròs negre/, () => ({ tiempo: "55 min", notas: [NOTA_AJO, NOTA_INTEGRAL], pasos: [
    "En la paella, prepara el aceite de ajo y retira el ajo.",
    "Dora la sepia troceada a fuego medio 8 minutos.",
    "Añade el tomate rallado y sofríe 3 minutos. Incorpora el arroz y remueve 1 minuto.",
    "Añade agua o caldo de pescado caliente (unas 3,5 veces el volumen del arroz) con la tinta (1-2 sobres) y una hoja de laurel. Prueba de sal.",
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
    "Dora la costilla troceada 8-10 minutos. Añade la mitad de la patata en rodajas y dórala 3 minutos.",
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
  [/^Fideuà/, (t) => ({ tiempo: "35 min", notas: [NOTA_AJO], pasos: [
    "Hierve las cabezas y cáscaras de las gambas con agua, sal y laurel 15 minutos para hacer el caldo y cuélalo.",
    `En una paella, prepara el aceite de ajo y retira el ajo. Marca las gambas 1 minuto y resérvalas${/sepia/.test(t) ? ". Dora la sepia troceada 5 minutos" : ""}.`,
    "Añade el tomate rallado y sofríe 3 minutos. Vierte el caldo (unas 3 veces el peso de los fideos) con el azafrán.",
    "Cuando hierva, añade los fideos de arroz y cuécelos 4-5 minutos (mira el tiempo del paquete: se hacen rápido).",
    "Añade las gambas, deja 1 minuto más y reposa 2 minutos. Sirve con limón.",
  ] })],
  [/^Sepia a la plancha con arroz|^Calamares a la plancha con arroz|^Dorada a la plancha con arroz|^Pollo al limón con arroz/, null], // generador

  // ---------------- Legumbres y ollas ----------------
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
    "Cuece el huevo 10 minutos, enfríalo y pélalo.",
    "En una olla, prepara el aceite de ajo y retira el ajo. Añade el tomate triturado, una cucharadita de pimentón dulce, el comino y una hoja de laurel y sofríe 3 minutos.",
    "Añade 2 vasos de agua y los garbanzos y cuece 10 minutos.",
    "Añade las espinacas y el bacalao en trozos y cuece 6-8 minutos más. Prueba de sal.",
    "Sirve con el huevo duro picado por encima.",
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
  [/^Ensalada de (garbanzos|alubias)/, () => ({ tiempo: "15 min", notas: [NOTA_LEG], pasos: [
    "Si lleva huevo, cuécelo 10 minutos, enfríalo y pélalo.",
    "Enjuaga la legumbre y escúrrela bien.",
    "Corta el tomate, el pepino y la lechuga y mézclalo con la legumbre, el pescado escurrido, el huevo y las aceitunas (lo que lleve la receta).",
    "Aliña con aceite, sal, comino y unas gotas de vinagre o limón.",
  ] })],
  [/^Putxero/, () => ({ tiempo: "1 h 45 min", notas: [NOTA_LEG, NOTA_TAPER], pasos: [
    "Separa unos 30 g de la ternera, pícala y mézclala con perejil, nuez moscada, sal, una cucharada de pan rallado de espelta y un poco de huevo batido. Forma 2-3 pilotes.",
    "Pon en una olla el resto de la ternera y el pollo con agua fría, sal y una hoja de laurel. Hierve 60 minutos retirando la espuma.",
    "Añade la patata, la zanahoria, el nabo y la chirivía pelados y en trozos grandes, y las pilotes. Cuece 25 minutos.",
    "Añade los garbanzos y cuece 10 minutos más. Prueba de sal.",
    "Sirve el caldo aparte o junto con las verduras y la carne. El caldo que sobre sirve para la sopa de putxero.",
  ] })],
  [/^Sopa de putxero/, () => ({ tiempo: "50 min", pasos: [
    "Si no tienes caldo del putxero, haz uno: hierve el pollo con agua, sal, la zanahoria, la parte verde del puerro y una hoja de laurel 40 minutos.",
    "Cuece el huevo 10 minutos, enfríalo y pícalo.",
    "Saca el pollo, desmígalo y devuélvelo al caldo con la zanahoria en trocitos.",
    "Cuando hierva, añade los fideos de arroz y cuécelos 3-4 minutos. Sirve con el huevo picado.",
  ] })],
  [/^Pilotes de ternera/, (t) => ({ tiempo: "45 min", notas: [NOTA_AJO, NOTA_TAPER], pasos: [
    "Remoja el pan en un poco de agua o leche sin lactosa y escúrrelo.",
    "Mezcla la carne picada con el pan, el huevo, perejil picado, nuez moscada, pimienta negra y sal. Forma bolitas del tamaño de una nuez.",
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
    "Escurre y sirve aliñado con el aceite (puede ser aceite de ajo), sal y limón.",
  ] })],
  [/^Merluza en salsa verde/, () => ({ tiempo: "35 min", notas: [NOTA_AJO, NOTA_TAPER], pasos: [
    "Cuece la patata en rodajas y la bajoqueta en agua con sal 15-18 minutos.",
    "En una cazuela baja, prepara el aceite de ajo y retira el ajo. Añade una cucharadita de harina de espelta o de maíz y remueve 1 minuto.",
    "Añade medio vaso de agua o caldo de pescado poco a poco, removiendo, y mucho perejil picado.",
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
  ] })],
  [/^Clòtxines.*vapor|^Clòtxines al vapor/, (t) => ({ tiempo: "20 min", notas: ["Si usas carne de mejillón congelada ya cocida, solo tienes que calentarla 2-3 minutos al vapor o en la sartén."], pasos: [
    "Limpia las clòtxines (mejillones) bajo el grifo y quítales las barbas. Desecha las que estén abiertas o rotas.",
    "Ponlas en una olla con un dedo de agua, una hoja de laurel y unas rodajas de limón. Tapa y cuece a fuego fuerte 4-5 minutos, hasta que se abran. Desecha las que sigan cerradas.",
    /patata/.test(t) ? "Cuece la patata en agua con sal 20 minutos." : "Prepara la ensalada y tuesta el pan.",
    "Sírvelas con limón, pimienta negra y un hilo de aceite.",
  ] })],
  [/mejillones\) en salsa de tomate|^Clòtxines \(mejillones\) en salsa/, () => ({ tiempo: "25 min", notas: [NOTA_AJO], pasos: [
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
    "Cuece la patata en trozos 20 minutos, escúrrela y cháfala con un chorrito de leche sin lactosa, la mitad del aceite, sal y nuez moscada.",
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
    "Bate los huevos (y las claras) con sal y pimienta.",
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
    "Cuece el huevo 10 minutos (o escálfalo al final en la crema).",
    "Cuece el calabacín y la patata en trozos con poca agua y sal 15 minutos.",
    "Tritura con el aceite hasta que quede fina. Ajusta de sal y pimienta.",
    "Sirve con el huevo en trozos y el queso curado rallado por encima.",
  ] })],
  [/^Crema de calabaza/, () => ({ tiempo: "35 min", pasos: [
    "Cuece el huevo 10 minutos, enfríalo y pélalo.",
    "Cuece la calabaza, la zanahoria y la patata en trozos con poca agua y sal 20 minutos.",
    "Tritura con el aceite, nuez moscada y una pizca de jengibre y comino.",
    "Sirve con el huevo duro en trozos y el queso curado rallado.",
  ] })],

  // ---------------- Masas ----------------
  [/^Coca de espelta/, (t) => ({ tiempo: "35 min", notas: ["Opción rápida: usa una base de pan de espelta abierto en lugar de hacer la masa."], pasos: [
    "Precalienta el horno a 200 °C.",
    "Masa: mezcla unos 60 g de harina de espelta, agua templada (unos 35 ml), una cucharadita de aceite, sal y una pizca de levadura. Amasa 5 minutos y deja reposar 15 minutos.",
    "Estira la masa fina sobre papel de horno.",
    "Cuece el tomate triturado 5 minutos con orégano para que espese y extiéndelo sobre la masa.",
    `Reparte por encima ${/sardinas/.test(t) ? "las sardinas" : "el atún desmigado"}${/aceitunas|atún/.test(t) ? " y las aceitunas en rodajas" : ""}.`,
    "Hornea 12-15 minutos, hasta que los bordes estén dorados.",
  ] })],
  [/^Minxos/, () => ({ tiempo: "40 min", notas: [NOTA_AJO], pasos: [
    "Si el bacalao es salado, desálalo 24-36 horas antes, cambiando el agua 3-4 veces.",
    "Masa: mezcla unos 60 g de harina de espelta con agua, una cucharadita de aceite y sal hasta tener una masa lisa. Reposa 10 minutos.",
    "Estírala muy fina y cuécela en una plancha o sartén caliente 1-2 minutos por lado.",
    "En una sartén, prepara el aceite de ajo y retira el ajo. Saltea las espinacas 2 minutos y añade el bacalao desmigado 3-4 minutos.",
    "Reparte el relleno sobre la masa y sirve abierto o enrollado.",
  ] })],

  // ---------------- Ensaladas y platos fríos ----------------
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
  [/^Ensalada de pollo/, () => ({ tiempo: "20 min", pasos: [
    "Haz el pollo a la plancha con sal y pimienta y córtalo en tiras.",
    "Mezcla la lechuga, las fresas laminadas y el pepino.",
    "Añade el pollo y las nueces y aliña con aceite, sal y vinagre.",
  ] })],
  [/^Sardinas en lata/, () => ({ tiempo: "15 min", pasos: [
    "Cuece el huevo 10 minutos (o hazlo a la plancha).",
    "Tuesta el pan y ralla el tomate por encima con una pizca de sal.",
    "Pon las sardinas escurridas sobre el pan. Sirve con el huevo y el resto del tomate.",
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
  if (has("lec") || /ensalada/.test(tl)) pasos.push(`Prepara la ensalada con ${yList(["lechuga", has("tom") && "tomate", has("pep") && "pepino", has("oli") && "aceitunas"].filter(Boolean))}, y alíñala con aceite, sal y vinagre o limón.`);
  else if (has("tom") && !horno) pasos.push("Corta el tomate en rodajas y alíñalo con sal, aceite y orégano.");
  if (has("pep") && !has("lec") && !/ensalada/.test(tl)) pasos.push("Corta el pepino en rodajas y añádelo al tomate.");
  if (has("pan")) pasos.push("Tuesta el pan.");
  pasos.push("Aliña el plato con el aceite que quede, las especias recomendadas y unas gotas de limón.");
  if (/ajillo|aceite de ajo/.test(tl)) notas.unshift(NOTA_AJO);
  const tiempo = has("pat") && (horno || /asada|al horno/.test(tl)) || has("arr") || has("cza") ? "40 min" : has("pat") ? "30 min" : "20 min";
  return { tiempo, pasos, notas };
}

function recetaDe(meal, slot) {
  const base = meal.t.replace(/ \+ .* de postre$/, "");
  let r = null;
  for (const [re, fn] of RECETAS) { if (re.test(base)) { if (fn) r = fn(base); break; } }
  if (!r) r = genReceta(base, meal.items);
  const notas = [...(r.notas || [])];
  if (/de postre$/.test(meal.t)) notas.push("De postre, la fruta cítrica: su vitamina C ayuda a absorber el hierro de la legumbre.");
  if (slot === "c" && !notas.includes(NOTA_TAPER)) notas.push(NOTA_TAPER);
  return { titulo: base, tiempo: r.tiempo, pasos: r.pasos, notas };
}

if (typeof module !== "undefined") module.exports = { recetaDe, RECETAS };
