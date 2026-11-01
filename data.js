// Datos del planificador estacional
// ING: código -> [nombre, categoría, kcal/100 g, proteína/100 g, hidrato escalable en descanso?, unidad [nombre, g/ud] o null, precio orientativo €/kg]
const ING = {
  pol: ["Pechuga de pollo", "carne", 110, 23, 0, null, 7.5],
  mus: ["Muslo de pollo deshuesado sin piel", "carne", 120, 20, 0, null, 6.5],
  pav: ["Pechuga de pavo", "carne", 105, 24, 0, null, 9],
  ter: ["Ternera magra", "carne", 130, 21, 0, null, 12],
  lom: ["Lomo de cerdo", "carne", 140, 21, 0, null, 7],
  jam: ["Jamón cocido extra", "carne", 110, 19, 0, null, 12],
  fpv: ["Pavo en lonchas", "carne", 100, 19, 0, null, 12],
  sal: ["Salmón (porciones congeladas)", "pescado", 200, 20, 0, null, 14],
  mer: ["Merluza (congelada)", "pescado", 75, 16, 0, null, 8],
  bac: ["Bacalao (lomos congelados)", "pescado", 80, 18, 0, null, 11],
  dor: ["Dorada de piscifactoría", "pescado", 100, 20, 0, null, 9],
  lub: ["Lubina de piscifactoría", "pescado", 100, 19, 0, null, 10],
  sar: ["Sardinas (limpias)", "pescado", 150, 20, 0, null, 5],
  cab: ["Caballa", "pescado", 180, 19, 0, null, 6],
  bon: ["Bonito (fresco en verano o congelado)", "pescado", 140, 24, 0, null, 11],
  atu: ["Atún al natural (lata)", "pescado", 110, 25, 0, ["latas", 56], 14],
  gam: ["Gambas peladas congeladas", "pescado", 85, 19, 0, null, 11],
  cal: ["Anillas de calamar congeladas", "pescado", 80, 16, 0, null, 8],
  sep: ["Sepia congelada", "pescado", 75, 16, 0, null, 9],
  hue: ["Huevos", "huevos", 140, 12.5, 0, ["uds", 55], 4.5],
  cla: ["Claras de huevo", "huevos", 50, 11, 0, null, 4],
  tof: ["Tofu firme", "huevos", 130, 13, 0, null, 6],
  lsl: ["Leche sin lactosa", "lacteos", 46, 3.3, 0, null, 1.1],
  sky: ["Yogur o skyr sin lactosa (marca blanca)", "lacteos", 63, 11, 0, null, 5],
  arr: ["Arroz integral", "cereal", 350, 7.5, 1, null, 2.2],
  qui: ["Quinoa", "cereal", 365, 14, 1, null, 7],
  pas: ["Pasta de arroz integral", "cereal", 355, 7.5, 1, null, 5],
  fid: ["Fideos de arroz", "cereal", 360, 6, 1, null, 6],
  pom: ["Polenta (harina de maíz)", "cereal", 360, 8, 1, null, 3],
  pat: ["Patata", "cereal", 80, 2, 1, null, 1.3],
  pan: ["Pan de masa madre de espelta", "cereal", 250, 9, 1, null, 7],
  avn: ["Copos de avena", "cereal", 375, 13, 0, null, 2],
  len: ["Lentejas cocidas (bote, escurridas)", "legumbre", 90, 7, 1, null, 2.5],
  gar: ["Garbanzos cocidos (bote, escurridos)", "legumbre", 120, 7, 1, null, 2.3],
  alu: ["Alubias blancas cocidas (bote, escurridas)", "legumbre", 95, 6.5, 1, null, 2.5],
  tor: ["Tortitas de arroz", "cereal", 380, 8, 0, ["uds", 9], 8],
  cbc: ["Calabacín", "verdura", 17, 1.2, 0, null, 1.8],
  zan: ["Zanahoria", "verdura", 40, 0.9, 0, null, 1.2],
  ber: ["Berenjena", "verdura", 25, 1, 0, null, 2.2],
  jud: ["Judía verde", "verdura", 30, 1.8, 0, null, 4],
  esp: ["Espinacas", "verdura", 23, 2.9, 0, null, 6],
  tom: ["Tomate", "verdura", 20, 0.9, 0, null, 2.5],
  tri: ["Tomate triturado", "verdura", 30, 1.3, 0, null, 1.5],
  pep: ["Pepino", "verdura", 13, 0.6, 0, null, 1.8],
  lec: ["Lechuga", "verdura", 15, 1.3, 0, null, 3],
  can: ["Canónigos", "verdura", 20, 2, 0, null, 12],
  ace: ["Acelgas", "verdura", 20, 1.8, 0, null, 2.5],
  pak: ["Pak choi", "verdura", 13, 1.5, 0, null, 6],
  cza: ["Calabaza", "verdura", 35, 1, 0, null, 1.8],
  chi: ["Chirivía", "verdura", 75, 1.2, 0, null, 4],
  nab: ["Nabo", "verdura", 28, 0.9, 0, null, 2.5],
  kal: ["Kale", "verdura", 35, 3, 0, null, 8],
  end: ["Endibias", "verdura", 17, 1.2, 0, null, 3],
  pue: ["Puerro (solo la parte verde)", "verdura", 30, 1.5, 0, null, 2.5],
  apn: ["Apionabo", "verdura", 42, 1.5, 0, null, 4],
  fre: ["Fresas", "fruta", 33, 0.7, 0, null, 4],
  ara: ["Arándanos congelados", "fruta", 57, 0.7, 0, null, 7],
  fra: ["Frambuesas congeladas", "fruta", 52, 1.2, 0, null, 8],
  kiw: ["Kiwi", "fruta", 61, 1.1, 0, null, 3.5],
  nar: ["Naranja", "fruta", 47, 0.9, 0, null, 1.5],
  man: ["Mandarina", "fruta", 53, 0.8, 0, null, 2],
  pla: ["Plátano poco maduro", "fruta", 90, 1.1, 0, null, 1.8],
  pin: ["Piña", "fruta", 50, 0.5, 0, null, 1.8],
  uva: ["Uva", "fruta", 69, 0.7, 0, null, 3],
  mel: ["Melón cantalupo", "fruta", 34, 0.8, 0, null, 1.8],
  pap: ["Papaya", "fruta", 43, 0.5, 0, null, 5],
  aov: ["Aceite de oliva virgen extra", "grasa", 900, 0, 0, null, 8.7],
  agu: ["Aguacate", "grasa", 160, 2, 0, null, 5],
  nue: ["Nueces", "grasa", 650, 15, 0, null, 12],
  alm: ["Almendras", "grasa", 600, 21, 0, null, 13],
  cac: ["Crema de cacahuete 100 %", "grasa", 600, 25, 0, null, 10],
  coc: ["Leche de coco ligera", "grasa", 70, 0.5, 0, null, 4],
  whe: ["Whey isolate (sin polioles ni inulina)", "suple", 370, 85, 0, null, 30],
};

const CATS = {
  carne: "Carne",
  pescado: "Pescado y marisco",
  huevos: "Huevos y tofu",
  lacteos: "Lácteos sin lactosa",
  cereal: "Cereales, pan y patata",
  legumbre: "Legumbres",
  verdura: "Verdura",
  fruta: "Fruta",
  grasa: "Aceite, frutos secos y grasas",
  suple: "Suplementos",
};

const SEASONS = {
  primavera: {
    name: "Primavera",
    range: "20 de marzo – 20 de junio",
    note: "Platos ligeros con verdura tierna, fresas y kiwi. Pescado blanco y marisco a la plancha.",
    desFruit: "fre",
    mmFruits: [["fre", 150], ["kiw", 150], ["nar", 130], ["pin", 150], ["fra", 120], ["kiw", 150], ["fre", 150]],
    comidas: [
      "Arroz con pollo y verduras de primavera|arr:70,pol:150,cbc:120,zan:80,jud:60,aov:10",
      "Quinoa con garbanzos, salmón y espinacas|qui:30,gar:120,sal:110,esp:150,tom:80,aov:5",
      "Pasta de arroz integral con atún y tomate|pas:70,atu:112,tri:150,cbc:100,aov:10",
      "Ternera salteada con arroz y judía verde|arr:70,ter:130,jud:150,zan:80,aov:10",
      "Patatas guisadas con merluza|pat:280,mer:180,zan:80,tom:60,aov:10",
      "Bowl de arroz con pavo, pepino y zanahoria|arr:70,pav:150,pep:100,zan:80,lec:40,aov:10",
      "Garbanzos salteados con espinacas y lomo|gar:180,lom:120,esp:150,tom:60,aov:10",
      "Paella de marisco|arr:70,gam:100,cal:100,jud:80,tom:60,aov:10",
      "Pollo al limón con patatas al horno|pat:280,pol:150,zan:100,jud:100,aov:10",
      "Ensalada de garbanzos con atún y huevo|gar:200,atu:56,hue:55,tom:100,pep:80,lec:40,aov:10",
      "Dorada con arroz y acelgas|arr:65,dor:170,ace:200,aov:10",
      "Tofu salteado con arroz, judía verde y zanahoria|arr:65,tof:200,jud:150,zan:80,aov:10",
      "Hamburguesa de ternera con patata asada y ensalada|ter:130,pat:250,lec:60,tom:100,aov:10",
      "Lentejas estofadas con zanahoria, calabacín y pollo|len:220,pol:100,zan:80,cbc:100,tri:60,arr:20,aov:10",
    ],
    cenas: [
      "Salmón al horno con patata y judías verdes|sal:120,pat:150,jud:150,aov:5",
      "Tortilla de espinacas con pan y tomate|hue:110,cla:100,esp:100,pan:50,tom:100,aov:5",
      "Merluza en papillote con zanahoria y calabacín|mer:200,pat:150,zan:80,cbc:120,aov:10",
      "Pavo a la plancha con ensalada de alubias y tomate|pav:140,alu:120,lec:60,tom:100,pan:30,aov:10",
      "Revuelto de gambas y calabacín con pan|gam:120,hue:55,cla:70,cbc:150,pan:50,aov:5",
      "Lubina al horno con patata y ensalada|lub:180,pat:150,lec:60,tom:80,aov:10",
      "Crema de calabacín y bacalao a la plancha|cbc:300,pat:100,bac:180,aov:10",
      "Pollo en aceite de ajo con arroz y judía verde|pol:150,arr:45,jud:150,aov:10",
      "Sepia a la plancha con patata y ensalada|sep:200,pat:150,lec:60,tom:100,aov:10",
      "Huevos rellenos de atún con ensalada|hue:110,atu:56,lec:80,tom:100,pep:80,pan:40,aov:5",
      "Lomo con acelgas rehogadas y patata|lom:140,ace:200,pat:120,aov:10",
      "Caballa a la plancha con arroz y calabacín|cab:120,arr:40,cbc:200,aov:5",
      "Ensalada tibia de lentejas con huevo y atún|len:150,hue:110,atu:56,lec:50,tom:80,aov:5",
      "Dorada al horno con patata panadera y tomate|dor:170,pat:150,tom:100,aov:10",
    ],
  },
  verano: {
    name: "Verano",
    range: "21 de junio – 22 de septiembre",
    note: "Platos fríos, ensaladas completas y pescado azul. Frutos rojos congelados, melón y piña.",
    desFruit: "fra",
    mmFruits: [["mel", 150], ["fra", 120], ["ara", 100], ["nar", 130], ["pin", 150], ["fre", 150], ["kiw", 150]],
    comidas: [
      "Ensalada de arroz con atún, huevo, tomate y pepino|arr:70,atu:112,tom:120,pep:100,hue:55,aov:10",
      "Gazpacho suave (sin pimiento, ajo ni cebolla) y pollo con patata|tom:250,pep:100,pan:20,pol:150,pat:150,aov:10",
      "Bonito a la plancha con arroz y ensalada|bon:140,arr:65,lec:60,tom:100,aov:10",
      "Pasta de arroz integral fría con gambas y calabacín|pas:70,gam:150,cbc:120,tom:80,aov:10",
      "Ensalada de alubias con pollo, tomate y pepino|alu:200,pol:130,tom:120,pep:100,aov:10",
      "Sardinas a la plancha con patata y tomate aliñado|sar:150,pat:250,tom:150,aov:5",
      "Ensalada de arroz con caballa y aguacate|arr:60,cab:110,pep:100,tom:100,agu:30",
      "Ternera a la plancha con arroz y calabacín|ter:130,arr:70,cbc:200,aov:10",
      "Arroz de sepia y verduras|arr:70,sep:200,ber:100,tom:80,jud:60,aov:10",
      "Ensalada de lentejas con bonito y tomate|len:220,bon:110,tom:120,pep:80,aov:10",
      "Pavo en tiras con arroz, calabacín y zanahoria|pav:150,arr:70,cbc:150,zan:80,aov:10",
      "Dorada a la plancha con arroz, pepino y tomate|dor:170,arr:65,pep:120,tom:100,aov:10",
      "Brochetas de pollo con arroz, berenjena y calabacín|pol:150,arr:70,ber:150,cbc:100,aov:10",
      "Ensalada de garbanzos con gambas y pepino|gar:200,gam:120,pep:100,tom:100,aov:10",
    ],
    cenas: [
      "Salmorejo sin ajo con huevo duro y jamón|tom:300,pan:50,hue:110,jam:80,aov:10",
      "Lubina a la plancha con tomate y patata|lub:180,tom:150,pat:150,aov:10",
      "Tortilla de calabacín con ensalada|hue:110,cla:100,cbc:150,lec:60,tom:80,pan:40,aov:5",
      "Gambas y calamares a la plancha con ensalada|gam:120,cal:120,lec:80,tom:100,pat:120,aov:10",
      "Pavo a la plancha con berenjena asada y pan|pav:150,ber:200,pan:50,aov:10",
      "Merluza con salteado de calabacín, berenjena y tomate|mer:200,cbc:120,ber:100,tom:80,pat:120,aov:10",
      "Ensalada de pollo con fresas y nueces|pol:140,lec:60,fre:80,pep:80,pan:40,nue:10,aov:5",
      "Sardinas a la plancha con calabacín y patata|sar:150,cbc:200,pat:150,aov:5",
      "Ensalada de garbanzos con huevo y atún|gar:150,hue:55,atu:56,tom:120,pep:80,aov:10",
      "Revuelto de claras con espinacas y gambas|hue:55,cla:150,esp:150,gam:80,pan:50,aov:5",
      "Sardinas al horno con ensalada de pepino y tomate|sar:150,pep:120,tom:120,pan:40,aov:5",
      "Hummus sin ajo con pollo a la plancha y crudités|gar:120,pol:130,pep:120,zan:80,pan:30,aov:10",
      "Dorada al horno con patata y tomate|dor:170,pat:150,tom:120,aov:10",
      "Ensalada de pollo con aguacate y tomate|pol:140,lec:80,tom:120,pep:80,agu:30,pan:40,aov:5",
    ],
  },
  otono: {
    name: "Otoño",
    range: "23 de septiembre – 20 de diciembre",
    note: "Calabaza, guisos suaves y pescado azul como la caballa. Mandarinas, uva y kiwi.",
    desFruit: "uva",
    mmFruits: [["man", 150], ["uva", 100], ["kiw", 150], ["pla", 100], ["nar", 130], ["man", 150], ["kiw", 150]],
    comidas: [
      "Arroz con pollo y calabaza|arr:70,pol:150,cza:150,zan:60,aov:10",
      "Caballa al horno con patata y judía verde|cab:130,pat:250,jud:150,aov:5",
      "Estofado de ternera con zanahoria y patata|ter:130,pat:250,zan:120,tri:80,aov:10",
      "Lentejas estofadas con calabaza y pavo|len:220,pav:100,cza:120,zan:80,tri:60,aov:10",
      "Alubias estofadas con calabaza y pollo|alu:220,pol:120,cza:120,zan:60,tri:60,aov:10",
      "Merluza en salsa verde de perejil con patata|mer:200,pat:250,jud:80,aov:10",
      "Lomo al horno con calabaza asada y arroz|lom:140,cza:150,arr:55,aov:10",
      "Arroz caldoso de sepia y gambas|arr:70,sep:150,gam:80,tom:80,zan:60,aov:10",
      "Muslo de pollo al horno con patata y zanahoria|mus:160,pat:250,zan:120,aov:10",
      "Polenta con ternera en salsa de tomate|pom:70,ter:130,tri:150,cbc:100,aov:5",
      "Dorada con arroz y calabacín|dor:170,arr:65,cbc:180,aov:10",
      "Tofu salteado con arroz, zanahoria y espinacas|tof:200,arr:65,zan:100,esp:120,aov:10",
      "Bacalao con patata y tomate|bac:180,pat:250,tom:120,aov:10",
      "Garbanzos con espinacas y bacalao|gar:200,bac:150,esp:150,tom:60,aov:10",
    ],
    cenas: [
      "Crema de calabaza y zanahoria con pollo a la plancha|cza:200,zan:100,pat:80,pol:140,aov:10",
      "Salmón con patata y acelgas|sal:120,pat:150,ace:150,aov:5",
      "Tortilla de patata sin cebolla con ensalada|hue:110,cla:100,pat:150,lec:60,tom:80,aov:10",
      "Merluza al horno con calabacín y patata|mer:200,cbc:200,pat:120,aov:10",
      "Garbanzos salteados con espinacas y pavo|gar:130,pav:130,esp:200,aov:10",
      "Caballa a la plancha con ensalada y patata|cab:120,lec:60,tom:100,pat:120,aov:5",
      "Sopa de pollo con fideos de arroz|pol:130,fid:40,zan:100,pue:50,cbc:100,aov:5",
      "Revuelto de gambas y calabacín con pan|hue:55,cla:100,gam:100,cbc:150,pan:40,aov:5",
      "Lomo a la plancha con puré de calabaza|lom:140,cza:200,pat:100,aov:5",
      "Lubina en papillote con zanahoria y calabacín|lub:180,zan:100,cbc:120,pat:120,aov:10",
      "Huevos al plato con tomate, espinacas y pan|hue:110,cla:70,tri:150,esp:80,pan:50,aov:5",
      "Sepia a la plancha con arroz y ensalada|sep:200,arr:40,lec:60,tom:80,aov:10",
      "Crema de lentejas, calabaza y zanahoria con huevo|len:150,zan:120,cza:100,hue:110,cla:70,aov:5",
      "Bacalao con acelgas y patata|bac:180,ace:200,pat:120,aov:10",
    ],
  },
  invierno: {
    name: "Invierno",
    range: "21 de diciembre – 19 de marzo",
    note: "Platos de cuchara, cremas y raíces como la chirivía y el nabo. Cítricos y kiwi en su mejor momento.",
    desFruit: "kiw",
    mmFruits: [["nar", 130], ["man", 150], ["kiw", 150], ["pin", 150], ["nar", 130], ["kiw", 150], ["man", 150]],
    comidas: [
      "Cocido ligero de garbanzos con pollo, zanahoria y nabo|gar:150,pol:130,pat:100,zan:100,nab:80,pue:40,aov:5",
      "Estofado de ternera con chirivía y zanahoria|ter:130,pat:200,chi:75,zan:80,tri:60,aov:10",
      "Arroz con bacalao y espinacas|arr:70,bac:180,esp:150,tom:60,aov:10",
      "Potaje de garbanzos con espinacas, bacalao y huevo|gar:200,bac:100,esp:150,hue:55,zan:60,tri:60,aov:10",
      "Merluza guisada con patata y zanahoria|mer:200,pat:250,zan:100,aov:10",
      "Muslo de pollo al horno con chirivía y calabaza|mus:160,chi:75,cza:150,pat:150,aov:10",
      "Arroz caldoso de pollo y acelgas|arr:70,pol:150,ace:150,zan:60,aov:10",
      "Lomo con puré de patata y espinacas|lom:140,pat:250,esp:150,aov:10",
      "Caballa al horno con arroz y espinacas|cab:120,arr:60,esp:150,aov:5",
      "Guiso de sepia con patata|sep:200,pat:280,zan:80,tri:80,aov:10",
      "Alubias blancas estofadas con merluza y acelgas|alu:220,mer:150,ace:150,zan:60,aov:10",
      "Dorada al horno con patata y nabo|dor:170,pat:250,nab:100,aov:10",
      "Lentejas guisadas con ternera, zanahoria y patata|len:220,ter:100,zan:100,pat:80,tri:60,aov:10",
      "Polenta con pollo guisado en tomate|pom:70,pol:150,tri:150,zan:80,aov:5",
    ],
    cenas: [
      "Crema de calabaza con huevo poché|cza:250,zan:80,pat:100,hue:110,cla:70,aov:10",
      "Sopa de merluza y gambas con arroz|mer:150,gam:80,arr:35,zan:80,pue:40,tom:60,aov:5",
      "Crema de lentejas y zanahoria con pavo a la plancha|len:150,zan:120,pav:130,pue:40,pat:80,aov:5",
      "Salmón al horno con nabo y zanahoria|sal:120,nab:80,zan:100,pat:100,aov:5",
      "Tortilla de espinacas con pan|hue:110,cla:100,esp:150,pan:50,aov:5",
      "Bacalao con puré de chirivía y patata|bac:180,chi:75,pat:150,aov:10",
      "Caldo de pollo con fideos de arroz y huevo|pol:120,fid:40,hue:55,zan:80,pue:40,aov:5",
      "Lubina al horno con acelgas y patata|lub:180,ace:200,pat:120,aov:10",
      "Lomo a la plancha con calabaza asada|lom:140,cza:200,pat:80,aov:5",
      "Revuelto de gambas y espinacas con pan|hue:55,cla:100,gam:100,esp:150,pan:50,aov:5",
      "Merluza con crema de calabacín|mer:200,cbc:300,pat:100,aov:10",
      "Pollo a la plancha con acelgas y quinoa|pol:150,ace:150,qui:40,zan:60,aov:10",
      "Alubias blancas con acelgas y bacalao|alu:150,ace:200,bac:120,pan:40,aov:5",
      "Dorada con endibias y patata|dor:170,end:100,pat:150,aov:10",
    ],
  },
};

// Desayunos (la fruta del A cambia según estación)
const DESAYUNOS = {
  A: { t: "Porridge de avena con whey, fruta y nueces", i: (s) => `avn:50,lsl:150,whe:30,${s.desFruit}:100,nue:10` },
  B: { t: "Tostada de masa madre de espelta con revuelto, tomate y batido de whey", i: () => "pan:60,hue:55,cla:70,tom:80,aov:5,whe:30" },
  C: { t: "Tortitas de avena, huevo y whey con plátano y crema de cacahuete", i: () => "avn:40,hue:55,whe:30,pla:60,cac:10" },
};
const DES_ROT = ["A", "B", "A", "C", "A", "B", "C"];
const DIAS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
const ENTRENO = [true, true, false, true, true, false, false];
const MER_ENT = [
  { t: "Plátano y 2 tortitas de arroz (60-90 min antes de entrenar)", i: "pla:110,tor:18" },
  { t: "Pan de espelta con pavo (60-90 min antes de entrenar)", i: "pan:50,fpv:40" },
];
const REST_FACTOR = 0.7; // hidratos de comida y cena en días de descanso

function parse(s) {
  return s.split(",").map((p) => { const [c, g] = p.split(":"); return [c, +g]; });
}
function dish(str) { const [t, i] = str.split("|"); return { t, items: parse(i) }; }

const PROT = ["pol","mus","pav","ter","lom","jam","fpv","sal","mer","bac","dor","lub","sar","cab","bon","atu","gam","cal","sep","tof"];
const LEG = ["len","gar","alu"];
// Comida y cena no repiten proteína principal ni legumbre el mismo día
function clash(a, b) {
  const ca = a.items.map((i) => i[0]), cb = b.items.map((i) => i[0]);
  if (ca.some((c) => PROT.includes(c) && cb.includes(c))) return true;
  return ca.some((c) => LEG.includes(c)) && cb.some((c) => LEG.includes(c));
}

// Construye el menú de una semana (w = 0..3)
function buildWeek(key, w) {
  const S = SEASONS[key];
  const days = [];
  const used = new Set();
  for (let d = 0; d < 7; d++) {
    const ent = ENTRENO[d];
    const ci = (d + 7 * (w % 2) + (w >= 2 ? 3 : 0)) % 14;
    const com0 = dish(S.comidas[ci]);
    let ni = (d + 7 * ((w + 1) % 2) + (w >= 2 ? 5 : 0) + 2) % 14;
    for (let j = 0; j < 14; j++) {
      const cand = (ni + j) % 14;
      if (!used.has(cand) && !clash(com0, dish(S.cenas[cand]))) { ni = cand; break; }
    }
    used.add(ni);
    const dk = DES_ROT[(d + w * 2) % 7];
    const des = { t: DESAYUNOS[dk].t, items: parse(DESAYUNOS[dk].i(S)), tag: dk };
    const [mf, mg] = S.mmFruits[(d + w) % 7];
    const mm = { t: `Skyr sin lactosa con ${ING[mf][0].toLowerCase()}`, items: [["sky", 150], [mf, mg]] };
    let mer;
    if (ent) { const m = MER_ENT[(d + w) % 2]; mer = { t: m.t, items: parse(m.i) }; }
    else { const [rf, rg] = S.mmFruits[(d + w + 3) % 7]; mer = { t: `${ING[rf][0]} y 12 almendras`, items: [[rf, rg], ["alm", 12]] }; }
    const scale = (o) => ent ? o : { t: o.t, items: o.items.map(([c, g]) => [c, ING[c][4] ? Math.round(g * REST_FACTOR / 5) * 5 : g]) };
    const com = scale(dish(S.comidas[ci]));
    const cen = scale(dish(S.cenas[ni]));
    const meals = [["Desayuno", des], ["Media mañana", mm], ["Comida", com], [ent ? "Pre-entreno" : "Merienda", mer], ["Cena", cen]];
    let kcal = 0, prot = 0;
    meals.forEach(([, m]) => m.items.forEach(([c, g]) => { kcal += ING[c][2] * g / 100; prot += ING[c][3] * g / 100; }));
    days.push({ dia: DIAS[d], ent, meals, kcal: Math.round(kcal), prot: Math.round(prot) });
  }
  return days;
}

function shopping(days) {
  const tot = {};
  days.forEach((d) => d.meals.forEach(([, m]) => m.items.forEach(([c, g]) => { tot[c] = (tot[c] || 0) + g; })));
  const out = {};
  let cost = 0;
  Object.entries(tot).forEach(([c, g]) => { cost += (ING[c][6] || 0) * g / 1000; });
  out._cost = cost;
  Object.entries(tot).forEach(([c, g]) => {
    const [n, cat, , , , u] = ING[c];
    let q;
    if (u) q = `${Math.ceil(g / u[1])} ${u[0]}`;
    else if (g >= 1000) q = `${(Math.ceil(g / 100) / 10).toString().replace(".", ",")} kg`;
    else q = `${Math.ceil(g / 10) * 10} g`;
    (out[cat] = out[cat] || []).push([n, q]);
  });
  return out;
}

function seasonOf(date) {
  const y = date.getFullYear();
  const t = (m, d, yy = y) => new Date(yy, m - 1, d);
  let key, start;
  if (date >= t(12, 21)) { key = "invierno"; start = t(12, 21); }
  else if (date >= t(9, 23)) { key = "otono"; start = t(9, 23); }
  else if (date >= t(6, 21)) { key = "verano"; start = t(6, 21); }
  else if (date >= t(3, 20)) { key = "primavera"; start = t(3, 20); }
  else { key = "invierno"; start = t(12, 21, y - 1); }
  const days = Math.floor((date - start) / 86400000);
  return { key, start, week: Math.floor(days / 7) % 4, dow: (date.getDay() + 6) % 7 };
}

if (typeof module !== "undefined") module.exports = { ING, SEASONS, buildWeek, shopping, seasonOf };
