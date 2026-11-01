# Menús de temporada

Web personal para planificar la comida de la semana. Al elegir una fecha:

- Indica la estación: primavera desde el 20 de marzo, verano desde el 21 de junio, otoño desde el 23 de septiembre e invierno desde el 21 de diciembre.
- Indica qué semana del mes toca. Las semanas van de lunes a domingo y cada una pertenece al mes de su lunes: el primer lunes del mes empieza la semana 1. Cada estación tiene 4 menús, uno por semana. Si el mes tiene una semana 5, usa el menú 2 para que no se repita con la semana 1 del mes siguiente.
- Muestra el menú de los 7 días: desayuno, media mañana, comida, merienda o pre-entreno y cena, con los gramos de cada ingrediente.
- Calcula las calorías y la proteína de cada día.
- Genera la lista de la compra de la semana. Puedes marcar lo que ya tienes y copiar la lista.
- Te deja elegir tus días de entreno desde el botón de ajustes. Las cantidades se ajustan solas.
- Diseño tipo app: estación arriba, selector de semana y de día (se abre en el día de hoy), un día a la vista y la lista de la compra en su propia pestaña.
- Botón «Receta» en el desayuno, la comida y la cena: abre los pasos para prepararlo, con tu ración del día, el tiempo, las especias y notas (aceite de ajo, arroz integral, conservación si se cocina el día antes).

## Pautas del plan

- Dieta para perder grasa: unas 1.800 kcal los días de entreno y unas 1.650 los de descanso, con un techo diario de 1.850 y 1.700 kcal. Si un menú se pasa, la app recorta los hidratos de la comida y la cena. En los días de descanso, el arroz, la pasta, el pan, la patata y las legumbres de comida y cena bajan un 20 %.
- Cocina de casa de Ontinyent y la Vall d'Albaida: paella valenciana, arròs al forn, arròs amb fesols i naps, arròs amb bledes, putxero con pilotes, giraboix, borreta, bullit, minxos, figatells, clòtxines, tortilla de bajoqueta… El sofrito va con aceite de ajo, tomate y pimentón (azafrán en los arroces), sin morcilla ni alioli.
- 21 comidas y 21 cenas por estación, y almuerzo a media mañana (yogur con fruta o bocadillito).
- Platos pequeños: unas 500 kcal como máximo en la comida y 420 en la cena, con al menos 150 g de verdura por plato.
- Cada comida y cena sugiere especias (pimentón, azafrán, romero, comino, cúrcuma, nuez moscada…). Todas las especias están permitidas.
- Calcio de ~1.000 mg al día (yogur, leche enriquecida, queso curado, sardinas con espina) y hierro de ~16 mg (hígado como máximo 1 vez por semana, moluscos, carne, y legumbres con cítrico de postre).
- Unos 125-130 g de proteína al día (1,9-2 g/kg), repartidos en tomas de 15-35 g. Si un plato pasa de 33 g, el alimento proteico principal se reduce automáticamente.
- Sin lactosa y sin fructosa en exceso: fuera la manzana, la pera, el mango, la sandía, la miel, los zumos y los polioles (E420, E421, E965, E967).
- Sin pimiento como verdura, sin cebolla y sin coliflor. Las especias sí, pimentón incluido.
- Cereales integrales: arroz integral, pasta de arroz integral y pan de espelta de masa madre.
- Legumbres al menos 2 días por semana, garantizado por el algoritmo.
- Comida y cena nunca repiten proteína ni llevan legumbre las dos el mismo día.
- Raciones ajustadas a la tolerancia: calabaza japonesa como máximo 150 g, frambuesas 70 g, melón 120 g y garbanzos 150 g.
- Pensado para un presupuesto ajustado: pescado congelado, legumbres de bote y marcas blancas.

Es una pauta general y no sustituye a un médico o dietista.

## Cómo editarla

| Archivo | Para qué sirve |
| --- | --- |
| `data.js` | Ingredientes (kcal, proteína y nutrientes), platos de cada estación y lógica de los menús |
| `recipes.js` | Recetas paso a paso (escritas a mano para los platos tradicionales y generadas para los de plancha u horno) |
| `template.html` | Diseño y funcionamiento de la página |
| `index.html` | Página final, generada con `python3 build.py` |

Para cambiar un plato, edita su línea en `data.js` con el formato `"Nombre del plato|código:gramos,código:gramos"`. Después ejecuta `python3 build.py`.

## Publicación

La web se sirve con GitHub Pages desde la rama `main`, carpeta raíz.
