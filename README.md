# Menús de temporada

Web personal para planificar la comida de la semana. Al elegir una fecha:

- Indica la estación: primavera desde el 20 de marzo, verano desde el 21 de junio, otoño desde el 23 de septiembre e invierno desde el 21 de diciembre.
- Indica qué semana del mes toca. Las semanas van de lunes a domingo y cada una pertenece al mes de su lunes: el primer lunes del mes empieza la semana 1. Cada estación tiene 4 menús, uno por semana. Si el mes tiene una semana 5, usa el menú 2 para que no se repita con la semana 1 del mes siguiente.
- Muestra el menú de los 7 días: desayuno, media mañana, comida, merienda o pre-entreno y cena, con los gramos de cada ingrediente.
- Calcula las calorías y la proteína de cada día.
- Genera la lista de la compra de la semana con su coste estimado. Puedes marcar lo que ya tienes y copiar la lista.

## Pautas del plan

- Unas 1.800 kcal los días de entreno (lunes, martes, jueves y viernes) y unas 1.650 los de descanso. En los días de descanso, el arroz, la pasta, el pan, la patata y las legumbres de comida y cena bajan un 30 %.
- Unos 125-150 g de proteína al día, con whey isolate y yogur o skyr sin lactosa.
- Sin lactosa y sin fructosa en exceso: fuera la manzana, la pera, el mango, la sandía, la miel, los zumos y los polioles (E420, E421, E965, E967).
- Sin pimiento ni sus derivados (pimentón, cayena, curry), sin cebolla y sin coliflor.
- Cereales integrales: arroz integral, pasta de arroz integral y pan de espelta de masa madre.
- Legumbres 2-3 veces por semana.
- Comida y cena nunca repiten proteína ni llevan legumbre las dos el mismo día.
- Presupuesto ajustado, de unos 50-58 € por semana, con pescado congelado, legumbres de bote y marcas blancas.

Es una pauta general y no sustituye a un médico o dietista.

## Cómo editarla

| Archivo | Para qué sirve |
| --- | --- |
| `data.js` | Ingredientes (kcal, proteína y €/kg), platos de cada estación y lógica de los menús |
| `template.html` | Diseño y funcionamiento de la página |
| `index.html` | Página final, generada con `python3 build.py` |

Para cambiar un plato, edita su línea en `data.js` con el formato `"Nombre del plato|código:gramos,código:gramos"`. Después ejecuta `python3 build.py`.

## Publicación

La web se sirve con GitHub Pages desde la rama `main`, carpeta raíz.
