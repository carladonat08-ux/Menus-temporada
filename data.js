// Datos del planificador estacional
// ING: código -> [nombre, categoría, kcal/100 g, proteína/100 g, hidrato escalable en descanso?, unidad opcional [nombre, g/ud]]
const ING = {
  pol: ["Pechuga de pollo", "carne", 110, 23, 0],
  mus: ["Muslo de pollo deshuesado sin piel", "carne", 120, 20, 0],
  pav: ["Pechuga de pavo", "carne", 105, 24, 0],
  ter: ["Ternera magra (filetes o para guisar)", "carne", 130, 21, 0],
  lom: ["Lomo de cerdo", "carne", 140, 21, 0],
  jam: ["Jamón cocido extra", "carne", 110, 19, 0],
  fpv: ["Pavo en lonchas", "carne", 100, 19, 0],
  que: ["Queso curado (manchego u oveja)", "lacteos", 400, 25, 0],
  par: ["Parmesano o grana padano", "lacteos", 390, 33, 0],
  moz: ["Mozzarella sin lactosa", "lacteos", 250, 18, 0],
  mej: ["Mejillones cocidos (carne, congelados)", "pescado", 172, 24, 0],
  pul: ["Pulpo cocido", "pescado", 90, 18, 0],
  jur: ["Jurel", "pescado", 120, 20, 0],
  boq: ["Boquerones", "pescado", 115, 20, 0],
  tru: ["Trucha", "pescado", 120, 20, 0],
  sca: ["Sardinas en lata con espina (escurridas)", "pescado", 210, 25, 0, ["latas", 85]],
  hig: ["Hígado de pollo", "carne", 120, 17, 0],
  con: ["Conejo troceado", "carne", 135, 21, 0],
  sal: ["Salmón (porciones congeladas)", "pescado", 200, 20, 0],
  mer: ["Merluza (congelada)", "pescado", 75, 16, 0],
  bac: ["Bacalao (lomos congelados)", "pescado", 80, 18, 0],
  dor: ["Dorada de piscifactoría", "pescado", 100, 20, 0],
  lub: ["Lubina de piscifactoría", "pescado", 100, 19, 0],
  sar: ["Sardinas (limpias)", "pescado", 150, 20, 0],
  cab: ["Caballa", "pescado", 180, 19, 0],
  bon: ["Bonito (fresco en verano o congelado)", "pescado", 140, 24, 0],
  atu: ["Atún al natural (lata)", "pescado", 110, 25, 0, ["latas", 56]],
  gam: ["Gambas peladas congeladas", "pescado", 85, 19, 0],
  cal: ["Anillas de calamar congeladas", "pescado", 80, 16, 0],
  sep: ["Sepia congelada", "pescado", 75, 16, 0],
  hue: ["Huevos", "huevos", 140, 12.5, 0, ["uds", 55]],
  cla: ["Claras de huevo", "huevos", 50, 11, 0],
  tof: ["Tofu firme", "huevos", 130, 13, 0],
  lsl: ["Leche sin lactosa enriquecida en calcio", "lacteos", 46, 3.3, 0],
  sky: ["Yogur o skyr sin lactosa (marca blanca)", "lacteos", 63, 11, 0],
  arr: ["Arroz integral", "cereal", 350, 7.5, 1],
  qui: ["Quinoa", "cereal", 365, 14, 1],
  pas: ["Pasta de arroz integral", "cereal", 355, 7.5, 1],
  fid: ["Fideos de arroz", "cereal", 360, 6, 1],
  pom: ["Polenta (harina de maíz)", "cereal", 360, 8, 1],
  pat: ["Patata", "cereal", 80, 2, 1],
  pan: ["Pan de masa madre de espelta", "cereal", 250, 9, 1],
  avn: ["Copos de avena", "cereal", 375, 13, 0],
  len: ["Lentejas cocidas (bote, escurridas)", "legumbre", 90, 7, 1],
  gar: ["Garbanzos cocidos (bote, escurridos)", "legumbre", 120, 7, 1],
  alu: ["Alubias blancas cocidas (bote, escurridas)", "legumbre", 95, 6.5, 1],
  tor: ["Tortitas de arroz", "cereal", 380, 8, 0, ["uds", 9]],
  cbc: ["Calabacín", "verdura", 17, 1.2, 0],
  zan: ["Zanahoria", "verdura", 40, 0.9, 0],
  ber: ["Berenjena", "verdura", 25, 1, 0],
  jud: ["Judía verde", "verdura", 30, 1.8, 0],
  esp: ["Espinacas", "verdura", 23, 2.9, 0],
  tom: ["Tomate", "verdura", 20, 0.9, 0],
  tri: ["Tomate triturado", "verdura", 30, 1.3, 0],
  pep: ["Pepino", "verdura", 13, 0.6, 0],
  lec: ["Lechuga", "verdura", 15, 1.3, 0],
  can: ["Canónigos", "verdura", 20, 2, 0],
  ace: ["Acelgas", "verdura", 20, 1.8, 0],
  pak: ["Pak choi", "verdura", 13, 1.5, 0],
  cza: ["Calabaza japonesa (kabocha)", "verdura", 35, 1, 0],
  chi: ["Chirivía", "verdura", 75, 1.2, 0],
  nab: ["Nabo", "verdura", 28, 0.9, 0],
  kal: ["Kale", "verdura", 35, 3, 0],
  end: ["Endibias", "verdura", 17, 1.2, 0],
  pue: ["Puerro (solo la parte verde)", "verdura", 30, 1.5, 0],
  apn: ["Apionabo", "verdura", 42, 1.5, 0],
  fre: ["Fresas", "fruta", 33, 0.7, 0],
  ara: ["Arándanos congelados", "fruta", 57, 0.7, 0],
  fra: ["Frambuesas congeladas", "fruta", 52, 1.2, 0],
  kiw: ["Kiwi", "fruta", 61, 1.1, 0],
  nar: ["Naranja", "fruta", 47, 0.9, 0],
  man: ["Mandarina", "fruta", 53, 0.8, 0],
  pla: ["Plátano poco maduro", "fruta", 90, 1.1, 0],
  pin: ["Piña", "fruta", 50, 0.5, 0],
  uva: ["Uva", "fruta", 69, 0.7, 0],
  mel: ["Melón cantalupo", "fruta", 34, 0.8, 0],
  pap: ["Papaya", "fruta", 43, 0.5, 0],
  aov: ["Aceite de oliva virgen extra", "grasa", 900, 0, 0],
  agu: ["Aguacate", "grasa", 160, 2, 0],
  nue: ["Nueces", "grasa", 650, 15, 0],
  alm: ["Almendras", "grasa", 600, 21, 0],
  cac: ["Crema de cacahuete 100 %", "grasa", 600, 25, 0],
  coc: ["Leche de coco ligera", "grasa", 70, 0.5, 0],
  whe: ["Whey isolate (sin polioles ni inulina)", "suple", 370, 85, 0],
};


// Nutrientes por 100 g en crudo: [grasa g, hidratos g, fibra g, calcio mg, hierro mg] (tablas BEDCA/USDA aproximadas)
const NUT = {
  pol:[1.5,0,0,5,.4], mus:[4.5,0,0,10,.9], pav:[1,0,0,8,.7], ter:[5,0,0,6,2.3], lom:[6,0,0,6,.8], jam:[3,1,0,10,.7], fpv:[2,2,0,10,.6], hig:[5,1,0,8,9], con:[5.5,0,0,20,1.5],
  sal:[13,0,0,10,.3], mer:[1.5,0,0,30,.4], bac:[.7,0,0,15,.4], dor:[4,0,0,20,.5], lub:[4,0,0,15,.4], sar:[9,0,0,50,2.5], cab:[12,0,0,15,1.2], bon:[6,0,0,20,1.2], atu:[1,0,0,10,1.3],
  gam:[1,0,0,60,1.5], cal:[1.3,3,0,30,.7], sep:[.7,.8,0,90,6], mej:[4.5,7,0,33,6.7], pul:[1,2,0,50,5.3], jur:[4,0,0,30,1.1], boq:[4.5,0,0,60,1.8], tru:[4.5,0,0,30,.4], sca:[12,0,0,380,2.9],
  hue:[10,.7,0,55,1.8], cla:[.2,.7,0,7,.1], tof:[7,1.5,.9,350,2.7], lsl:[1.6,4.8,0,160,0], sky:[.2,4,0,100,.1], que:[33,.5,0,1000,.5], par:[28,0,0,1180,.8], moz:[17,1,0,450,.3],
  arr:[2.7,72,3.5,23,1.5], qui:[6,64,7,47,4.6], pas:[2.5,75,3,15,1.2], fid:[.6,80,1.6,18,.7], pom:[1.5,77,4,5,1], pat:[.1,17,1.8,10,.8], pan:[2,46,6,25,2.5], avn:[7,59,10,50,4.3], tor:[3,80,4,10,1.5],
  len:[.4,13,6,20,2.3], gar:[2.5,14,6,40,1.6], alu:[.5,13,6,60,1.7],
  cbc:[.3,2.2,1.1,16,.4], zan:[.2,7,2.8,33,.3], ber:[.2,3,3,9,.2], jud:[.2,4.5,3,37,1], esp:[.4,1.4,2.2,99,2.7], tom:[.2,3,1.2,10,.3], tri:[.2,5,1.5,15,.6], pep:[.1,3,.5,16,.3], lec:[.2,1.5,1.3,36,.9],
  can:[.4,1.6,1.5,38,2], ace:[.2,2,1.6,51,1.8], pak:[.2,2.2,1,105,.8], cza:[.1,8,1.5,20,.5], chi:[.3,18,4.9,36,.6], nab:[.1,6,1.8,30,.3], kal:[.9,4,4,150,1.5], end:[.2,3,3,52,.2], pue:[.3,6,1.8,59,2], apn:[.3,9,1.8,43,.7],
  fre:[.3,7.7,2,16,.4], ara:[.3,14,2.4,6,.3], fra:[.7,12,6.5,25,.7], kiw:[.5,15,3,34,.3], nar:[.1,12,2.4,40,.1], man:[.3,13,1.8,37,.2], pla:[.3,23,2.6,5,.3], pin:[.1,13,1.4,13,.3], uva:[.2,18,.9,10,.4], mel:[.2,8,.9,9,.2], pap:[.3,11,1.7,20,.3],
  aov:[100,0,0,1,.6], agu:[15,9,7,12,.6], nue:[65,14,6.7,98,2.9], alm:[50,22,12,269,3.7], cac:[50,20,6,40,1.9], coc:[7,2,0,5,.5], whe:[1,3,0,100,.5],
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
    mmFruits: [["fre", 150], ["kiw", 150], ["nar", 130], ["pin", 150], ["fra", 70], ["kiw", 150], ["fre", 150]],
    comidas: [
      "Arroz con pollo y verduras de primavera|arr:70,pol:150,cbc:120,zan:80,jud:60,aov:10",
      "Quinoa con garbanzos, salmón y espinacas|qui:30,gar:120,sal:110,esp:150,tom:80,aov:5",
      "Pasta de arroz integral con atún y tomate|pas:70,atu:112,tri:150,cbc:100,aov:10",
      "Ternera salteada con arroz y judía verde|arr:70,ter:130,jud:150,zan:80,aov:10",
      "Patatas guisadas con merluza|pat:280,mer:180,zan:80,tom:60,aov:10",
      "Bowl de arroz integral con lentejas, pavo y pepino|arr:40,len:120,pav:120,pep:100,zan:80,lec:40,aov:10",
      "Garbanzos salteados con espinacas y lomo|gar:150,lom:120,esp:150,tom:60,aov:10",
      "Paella de marisco|arr:70,gam:100,cal:100,jud:80,tom:60,aov:10",
      "Pollo al limón con patatas al horno|pat:280,pol:150,zan:100,jud:100,aov:10",
      "Ensalada de garbanzos con atún y huevo|gar:150,atu:56,hue:55,tom:100,pep:80,lec:40,aov:10",
      "Dorada con arroz y acelgas|arr:65,dor:170,ace:200,aov:10",
      "Tofu salteado con arroz, judía verde y zanahoria|arr:65,tof:200,jud:150,zan:80,aov:10",
      "Hamburguesa de ternera con patata asada y ensalada|ter:130,pat:250,lec:60,tom:100,aov:10",
      "Lentejas estofadas con zanahoria, calabacín y pollo|len:220,pol:100,zan:80,cbc:100,tri:60,arr:20,aov:10",
      "Conejo en aceite de ajo con patatas al horno|con:180,pat:250,jud:100,aov:10",
      "Hígado de pollo salteado con arroz integral y espinacas|hig:140,arr:65,esp:150,aov:10",
      "Mejillones al vapor con limón y patata cocida|mej:150,pat:250,lec:60,tom:80,aov:10",
      "Ensalada de pasta integral con mozzarella, tomate y atún|pas:65,moz:60,tom:150,atu:56,aov:5",
      "Boquerones a la plancha con arroz integral y ensalada|boq:170,arr:60,lec:60,tom:100,aov:5",
      "Trucha al horno con patata y judía verde|tru:180,pat:220,jud:120,aov:5",
      "Arroz meloso de gambas con parmesano y calabacín|arr:70,gam:120,par:15,cbc:120,aov:5",
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
      "Hígado de pollo a la plancha con patata y ensalada|hig:150,pat:150,lec:60,tom:100,aov:10",
      "Lomo con acelgas rehogadas y patata|lom:140,ace:200,pat:120,aov:10",
      "Caballa a la plancha con arroz y calabacín|cab:120,arr:40,cbc:200,aov:5",
      "Ensalada tibia de lentejas con huevo y atún|len:150,hue:110,atu:56,lec:50,tom:80,aov:5",
      "Dorada al horno con patata panadera y tomate|dor:170,pat:150,tom:100,aov:10",
      "Tortilla de calabacín con queso curado y ensalada|hue:110,cla:70,cbc:150,que:20,lec:60,tom:80,pan:40,aov:5",
      "Sardinas en lata con espina, huevo y tostada con tomate|sca:85,hue:55,pan:70,tom:120,lec:60",
      "Jurel al horno con patata y tomate|jur:170,pat:150,tom:120,aov:10",
      "Pulpo cocido con patata y aceite de oliva|pul:150,pat:220,lec:50,aov:10",
      "Pollo a la plancha con ensalada de mozzarella y tomate|pol:130,moz:50,tom:150,lec:60,pan:40,aov:5",
      "Calamares a la plancha con arroz integral y espinacas|cal:200,arr:40,esp:150,aov:10",
      "Conejo al horno con zanahoria y patata|con:160,zan:120,pat:150,aov:5",
    ],
  },
  verano: {
    name: "Verano",
    range: "21 de junio – 22 de septiembre",
    note: "Platos fríos, ensaladas completas y pescado azul. Frutos rojos congelados, melón y piña.",
    desFruit: "fra",
    mmFruits: [["mel", 120], ["fra", 70], ["ara", 100], ["nar", 130], ["pin", 150], ["fre", 150], ["kiw", 150]],
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
      "Pavo en tiras con lentejas, arroz, calabacín y zanahoria|pav:130,len:150,arr:30,cbc:150,zan:80,aov:10",
      "Dorada a la plancha con arroz, pepino y tomate|dor:170,arr:65,pep:120,tom:100,aov:10",
      "Brochetas de pollo con arroz, berenjena y calabacín|pol:150,arr:70,ber:150,cbc:100,aov:10",
      "Ensalada de garbanzos con gambas y pepino|gar:150,gam:120,pep:100,tom:100,aov:10",
      "Boquerones en vinagre con ensalada de patata|boq:160,pat:250,tom:100,pep:80,aov:10",
      "Ensalada de pulpo con patata y tomate|pul:150,pat:220,tom:120,pep:80,pan:30,aov:10",
      "Mejillones al vapor con arroz integral y tomate|mej:140,arr:60,tom:120,aov:5",
      "Conejo a la plancha con ensalada de arroz|con:170,arr:60,tom:100,pep:80,lec:40,aov:10",
      "Hígado de pollo con patata y tomate aliñado|hig:160,pat:220,tom:150,aov:10",
      "Trucha a la plancha con quinoa, pepino y tomate|tru:170,qui:55,pep:120,tom:100,aov:5",
      "Ensalada de pasta integral con mozzarella, atún y tomate|pas:70,moz:70,atu:56,tom:150,aov:5",
    ],
    cenas: [
      "Salmorejo sin ajo con huevo duro y jamón|tom:300,pan:50,hue:110,jam:80,aov:10",
      "Lubina a la plancha con tomate y patata|lub:180,tom:150,pat:150,aov:10",
      "Hígado de pollo a la plancha con ensalada de tomate y pan|hig:150,tom:150,lec:60,pan:50,aov:10",
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
      "Sardinas en lata con espina, huevo, tomate y tostada|sca:85,hue:55,pan:60,tom:150,pep:80",
      "Jurel a la plancha con calabacín y patata|jur:170,cbc:200,pat:120,aov:10",
      "Calamares a la plancha con ensalada y patata|cal:200,lec:80,tom:100,pat:150,aov:10",
      "Ensalada caprese con jamón cocido y tostada|moz:80,tom:200,jam:80,pan:40,aov:5",
      "Tortilla de calabacín con queso curado|hue:110,cla:100,cbc:150,que:20,pan:40,aov:5",
      "Pollo al limón con ensalada de tomate y pepino|pol:150,tom:150,pep:100,pat:120,aov:10",
      "Boquerones al horno con limón y ensalada|boq:170,lec:80,tom:120,pan:50,aov:5",
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
      "Garbanzos guisados con muslo de pollo y zanahoria|gar:150,mus:130,zan:100,pat:80,tri:60,aov:10",
      "Polenta con ternera en salsa de tomate|pom:70,ter:130,tri:150,cbc:100,aov:5",
      "Dorada con arroz y calabacín|dor:170,arr:65,cbc:180,aov:10",
      "Tofu salteado con arroz, zanahoria y espinacas|tof:200,arr:65,zan:100,esp:120,aov:10",
      "Bacalao con patata y tomate|bac:180,pat:250,tom:120,aov:10",
      "Garbanzos con espinacas y bacalao|gar:150,bac:150,esp:150,tom:60,aov:10",
      "Conejo guisado con patata y zanahoria|con:170,pat:220,zan:100,tri:60,aov:10",
      "Hígado de pollo con arroz integral y calabaza|hig:150,arr:60,cza:120,aov:10",
      "Mejillones en salsa de tomate con patata|mej:150,tri:120,pat:220,aov:5",
      "Jurel al horno con arroz integral y espinacas|jur:170,arr:60,esp:150,aov:5",
      "Pasta integral con boloñesa de ternera y parmesano|pas:65,ter:110,tri:150,zan:60,par:10,aov:5",
      "Pulpo con patata cocida y ensalada|pul:160,pat:250,lec:60,tom:80,aov:10",
      "Arroz integral con conejo y judía verde|arr:70,con:150,jud:120,tom:60,aov:10",
    ],
    cenas: [
      "Crema de calabaza y zanahoria con pollo a la plancha|cza:150,zan:100,pat:80,pol:140,aov:10",
      "Salmón con patata y acelgas|sal:120,pat:150,ace:150,aov:5",
      "Tortilla de patata sin cebolla con ensalada|hue:110,cla:100,pat:150,lec:60,tom:80,aov:10",
      "Merluza al horno con calabacín y patata|mer:200,cbc:200,pat:120,aov:10",
      "Garbanzos salteados con espinacas y pavo|gar:130,pav:130,esp:200,aov:10",
      "Caballa a la plancha con ensalada y patata|cab:120,lec:60,tom:100,pat:120,aov:5",
      "Sopa de pollo con fideos de arroz|pol:130,fid:40,zan:100,pue:50,cbc:100,aov:5",
      "Revuelto de gambas y calabacín con pan|hue:55,cla:100,gam:100,cbc:150,pan:40,aov:5",
      "Lomo a la plancha con puré de calabaza|lom:140,cza:150,pat:100,aov:5",
      "Lubina en papillote con zanahoria y calabacín|lub:180,zan:100,cbc:120,pat:120,aov:10",
      "Hígado de pollo a la plancha con puré de calabaza|hig:150,cza:150,pat:100,aov:10",
      "Sepia a la plancha con arroz y ensalada|sep:200,arr:40,lec:60,tom:80,aov:10",
      "Crema de lentejas, calabaza y zanahoria con huevo|len:150,zan:120,cza:100,hue:110,cla:70,aov:5",
      "Bacalao con acelgas y patata|bac:180,ace:200,pat:120,aov:10",
      "Sardinas en lata con espina con patata y huevo|sca:85,pat:150,hue:55,lec:60,tom:100",
      "Boquerones al horno con calabacín y patata|boq:170,cbc:200,pat:120,aov:10",
      "Revuelto de gambas y espinacas con queso curado|hue:55,cla:100,gam:100,esp:150,que:15,pan:40,aov:5",
      "Trucha a la plancha con puré de calabaza|tru:170,cza:150,pat:100,aov:5",
      "Crema de calabacín con mejillones|cbc:300,pat:100,mej:120,aov:5",
      "Tortilla de patata con queso curado y ensalada|hue:110,cla:70,pat:150,que:20,lec:60,tom:80,aov:10",
      "Conejo a la plancha con acelgas y patata|con:160,ace:200,pat:100,aov:10",
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
      "Potaje de garbanzos con espinacas, bacalao y huevo|gar:150,bac:100,esp:150,hue:55,zan:60,tri:60,aov:10",
      "Merluza guisada con patata y zanahoria|mer:200,pat:250,zan:100,aov:10",
      "Garbanzos con pollo, chirivía y calabaza|gar:150,mus:130,chi:75,cza:100,aov:10",
      "Arroz caldoso de pollo y acelgas|arr:70,pol:150,ace:150,zan:60,aov:10",
      "Lomo con puré de patata y espinacas|lom:140,pat:250,esp:150,aov:10",
      "Caballa al horno con arroz y espinacas|cab:120,arr:60,esp:150,aov:5",
      "Guiso de sepia con patata|sep:200,pat:280,zan:80,tri:80,aov:10",
      "Alubias blancas estofadas con merluza y acelgas|alu:220,mer:150,ace:150,zan:60,aov:10",
      "Dorada al horno con patata y nabo|dor:170,pat:250,nab:100,aov:10",
      "Lentejas guisadas con ternera, zanahoria y patata|len:220,ter:100,zan:100,pat:80,tri:60,aov:10",
      "Polenta con pollo guisado en tomate|pom:70,pol:150,tri:150,zan:80,aov:5",
      "Hígado de pollo con puré de patata y espinacas|hig:150,pat:250,esp:150,aov:10",
      "Conejo guisado con chirivía y zanahoria|con:170,chi:75,zan:100,pat:150,aov:10",
      "Arroz caldoso de mejillones|mej:140,arr:70,tom:60,zan:60,pue:40,aov:5",
      "Guiso de pulpo con patata y zanahoria|pul:160,pat:220,zan:80,tri:60,aov:10",
      "Jurel al horno con patata y nabo|jur:170,pat:220,nab:100,aov:10",
      "Macarrones integrales con atún, tomate y parmesano|pas:70,atu:112,tri:150,par:10,aov:5",
      "Trucha al horno con arroz integral y acelgas|tru:170,arr:60,ace:150,aov:5",
    ],
    cenas: [
      "Crema de calabaza con huevo poché|cza:150,zan:80,pat:100,hue:110,cla:70,aov:10",
      "Sopa de merluza y gambas con arroz|mer:150,gam:80,arr:35,zan:80,pue:40,tom:60,aov:5",
      "Crema de lentejas y zanahoria con pavo a la plancha|len:150,zan:120,pav:130,pue:40,pat:80,aov:5",
      "Salmón al horno con nabo y zanahoria|sal:120,nab:80,zan:100,pat:100,aov:5",
      "Tortilla de espinacas con pan|hue:110,cla:100,esp:150,pan:50,aov:5",
      "Bacalao con puré de chirivía y patata|bac:180,chi:75,pat:150,aov:10",
      "Caldo de pollo con fideos de arroz y huevo|pol:120,fid:40,hue:55,zan:80,pue:40,aov:5",
      "Lubina al horno con acelgas y patata|lub:180,ace:200,pat:120,aov:10",
      "Lomo a la plancha con calabaza asada|lom:140,cza:150,pat:80,aov:5",
      "Hígado de pollo a la plancha con endibias y pan|hig:150,end:120,pan:50,aov:10",
      "Merluza con crema de calabacín|mer:200,cbc:300,pat:100,aov:10",
      "Pollo a la plancha con acelgas y quinoa|pol:150,ace:150,qui:40,zan:60,aov:10",
      "Alubias blancas con acelgas y bacalao|alu:150,ace:200,bac:120,pan:40,aov:5",
      "Dorada con endibias y patata|dor:170,end:100,pat:150,aov:10",
      "Sardinas en lata con espina sobre tostada, huevo y endibias|sca:85,pan:60,end:120,hue:55",
      "Boquerones al horno con patata y espinacas|boq:170,pat:150,esp:150,aov:5",
      "Tortilla de espinacas con queso curado|hue:110,cla:100,esp:150,que:20,pan:40,aov:5",
      "Crema de calabaza con queso curado y huevo|cza:150,zan:120,pat:100,que:20,hue:110,cla:70,aov:5",
      "Conejo al horno con calabaza y zanahoria|con:160,cza:120,zan:100,pat:80,aov:5",
      "Calamares a la plancha con arroz integral y acelgas|cal:200,arr:40,ace:150,aov:10",
      "Mejillones al vapor con patata y limón|mej:140,pat:180,lec:60,aov:5",
    ],
  },
};

// Desayunos (la fruta del A cambia según estación)
const DESAYUNOS = {
  A: { t: "Porridge de avena con leche, whey, fruta y nueces", i: (s) => `avn:60,lsl:200,whe:15,${s.desFruit}:100,nue:15` },
  B: { t: "Tostada de espelta con 2 huevos revueltos, queso curado y tomate", i: () => "pan:70,hue:110,que:20,tom:80,aov:5" },
  C: { t: "Tortitas de avena con leche, huevo y whey, con plátano y crema de cacahuete", i: () => "avn:50,lsl:150,hue:55,whe:15,pla:80,cac:15" },
};
const DES_ROT = ["A", "B", "A", "C", "A", "B", "C"];
const DIAS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
const ENTRENO_DEF = [true, true, false, true, true, false, false];
const MER_ENT = [
  { t: "Plátano y yogur sin lactosa (60-90 min antes de entrenar)", i: "pla:110,sky:125" },
  { t: "Bocadillo pequeño de espelta con pavo y queso curado (60-90 min antes de entrenar)", i: "pan:50,fpv:40,que:15" },
];
const REST_FACTOR = 0.8; // hidratos de comida y cena en días de descanso
const CITRICO = { primavera: "kiw", verano: "kiw", otono: "man", invierno: "nar" };

function parse(s) {
  return s.split(",").map((p) => { const [c, g] = p.split(":"); return [c, +g]; });
}
function dish(str) { const [t, i] = str.split("|"); return { t, items: parse(i) }; }

const PROT = ["pol","mus","pav","ter","lom","jam","fpv","hig","con","sal","mer","bac","dor","lub","sar","cab","bon","atu","gam","cal","sep","mej","pul","jur","boq","tru","sca","tof"];
const LEG = ["len","gar","alu"];
// Comida y cena no repiten proteína principal ni legumbre el mismo día
function clash(a, b) {
  const ca = a.items.map((i) => i[0]), cb = b.items.map((i) => i[0]);
  if (ca.some((c) => PROT.includes(c) && cb.includes(c))) return true;
  return ca.some((c) => LEG.includes(c)) && cb.some((c) => LEG.includes(c));
}

function nutrients(items) {
  const t = { kcal: 0, prot: 0, fat: 0, carb: 0, fib: 0, ca: 0, fe: 0 };
  items.forEach(([c, g]) => {
    const I = ING[c], n = NUT[c] || [0, 0, 0, 0, 0], q = g / 100;
    t.kcal += I[2] * q; t.prot += I[3] * q; t.fat += n[0] * q; t.carb += n[1] * q; t.fib += n[2] * q; t.ca += n[3] * q; t.fe += n[4] * q;
  });
  return t;
}

// Proteína por comida/cena: como máximo ~33 g (reparte mejor y evita excesos).
// Se reduce solo el alimento proteico principal, nunca por debajo del 65 %.
const MAX_P_MEAL = 33;
function capProt(o) {
  const p = o.items.reduce((s, [c, g]) => s + ING[c][3] * g / 100, 0);
  if (p <= MAX_P_MEAL) return o;
  const pMain = o.items.filter(([c]) => PROT.includes(c)).reduce((s, [c, g]) => s + ING[c][3] * g / 100, 0);
  if (!pMain) return o;
  const f = Math.max(0.65, 1 - (p - MAX_P_MEAL) / pMain);
  return { ...o, items: o.items.map(([c, g]) => [c, PROT.includes(c) && !ING[c][5] ? Math.round(g * f / 5) * 5 : g]) };
}

// Índices por defecto de comida (w = 0..3). Con 21 platos, las semanas 1-3 no repiten; la 4 mezcla.
function defaultComida(w, d, N) { return w < 3 ? (d + 7 * w) % N : (d * 3 + 1) % N; }
function defaultCena(w, d, N) { return w < 3 ? (d + 7 * ((w + 1) % 3) + 2) % N : (d * 3 + 2) % N; }

// Construye el menú de una semana. opts: { ent: [7 booleanos] }
// Reglas: comida y cena sin la misma proteína ni doble legumbre; hígado máx. 1 vez/semana;
// al menos 2 días con legumbres a la semana.
function buildWeek(key, w, opts = {}) {
  const S = SEASONS[key];
  const ENT = opts.ent || ENTRENO_DEF;
  const NC = S.comidas.length, NN = S.cenas.length;
  const hasHig = (str) => /\bhig:/.test(str);
  const hasLeg = (str) => /\b(len|gar|alu):/.test(str);

  // 1) Elegir platos
  const CI = [], NI = [];
  const usedC = new Set(), usedN = new Set();
  let higUsed = false;
  for (let d = 0; d < 7; d++) {
    let ci = defaultComida(w, d, NC);
    for (let j = 0; j < NC; j++) { const c = (ci + j) % NC; if (!usedC.has(c) && !(higUsed && hasHig(S.comidas[c]))) { ci = c; break; } }
    usedC.add(ci);
    const com0 = dish(S.comidas[ci]);
    let ni = defaultCena(w, d, NN);
    for (let j = 0; j < NN; j++) {
      const cand = (ni + j) % NN;
      if (!usedN.has(cand) && !clash(com0, dish(S.cenas[cand])) && !((higUsed || hasHig(S.comidas[ci])) && hasHig(S.cenas[cand]))) { ni = cand; break; }
    }
    usedN.add(ni);
    if (hasHig(S.comidas[ci]) || hasHig(S.cenas[ni])) higUsed = true;
    CI.push(ci); NI.push(ni);
  }
  // 2) Asegurar al menos 2 días con legumbres
  const legDays = () => CI.filter((c, d) => hasLeg(S.comidas[c]) || hasLeg(S.cenas[NI[d]])).length;
  for (let d = 0; d < 7 && legDays() < 2; d++) {
    if (hasLeg(S.comidas[CI[d]]) || hasLeg(S.cenas[NI[d]])) continue;
    for (let cand = 0; cand < NN; cand++) {
      if (hasLeg(S.cenas[cand]) && !NI.includes(cand) && !hasHig(S.cenas[cand]) && !clash(dish(S.comidas[CI[d]]), dish(S.cenas[cand]))) { NI[d] = cand; break; }
    }
  }

  // 3) Montar los días
  const days = [];
  for (let d = 0; d < 7; d++) {
    const ent = ENT[d];
    const ci = CI[d], ni = NI[d];
    const dk = DES_ROT[(d + w * 2) % 7];
    const des = { t: DESAYUNOS[dk].t, items: parse(DESAYUNOS[dk].i(S)) };
    const [mf, mg] = S.mmFruits[(d + w) % 7];
    const mm = { t: `Yogur o skyr sin lactosa con ${ING[mf][0].toLowerCase()}`, items: [["sky", 150], [mf, mg]] };
    let mer;
    if (ent) { const m = MER_ENT[(d + w) % 2]; mer = { t: m.t, items: parse(m.i) }; }
    else {
      const [rf, rg] = S.mmFruits[(d + w + 3) % 7];
      mer = (d + w) % 2
        ? { t: `${ING[rf][0]} y 20 g de queso curado`, items: [[rf, rg], ["que", 20]] }
        : { t: `Yogur sin lactosa con ${ING[rf][0].toLowerCase()} y 5 almendras`, items: [["sky", 125], [rf, rg], ["alm", 5]] };
    }
    const scale = (o) => ent ? o : { ...o, items: o.items.map(([c, g]) => [c, ING[c][4] ? Math.round(g * REST_FACTOR / 5) * 5 : g]) };
    // Legumbres con cítrico de postre: la vitamina C mejora la absorción del hierro
    const withCitrus = (o) => {
      if (!o.items.some(([c]) => LEG.includes(c))) return o;
      const f = CITRICO[key];
      return { ...o, t: `${o.t} + ${ING[f][0].toLowerCase()} de postre`, items: [...o.items, [f, f === "nar" ? 130 : 150]] };
    };
    const com = withCitrus(scale(capProt(dish(S.comidas[ci]))));
    const cen = withCitrus(scale(capProt(dish(S.cenas[ni]))));
    const meals = [["Desayuno", des], ["Media mañana", mm], ["Comida", com], [ent ? "Pre-entreno" : "Merienda", mer], ["Cena", cen]];
    const n = nutrients(meals.flatMap(([, m]) => m.items));
    days.push({ dia: DIAS[d], ent, meals, kcal: Math.round(n.kcal), prot: Math.round(n.prot), fat: Math.round(n.fat), carb: Math.round(n.carb), fib: Math.round(n.fib), ca: Math.round(n.ca), fe: +n.fe.toFixed(1) });
  }
  return days;
}

function shopping(days) {
  const tot = {};
  days.forEach((d) => d.meals.forEach(([, m]) => m.items.forEach(([c, g]) => { tot[c] = (tot[c] || 0) + g; })));
  const out = {};
  Object.entries(tot).forEach(([c, g]) => {
    const [n, cat, , , , u] = ING[c];
    let q;
    if (u) { const k = Math.ceil(g / u[1]); q = `${k} ${k === 1 ? { latas: "lata", uds: "ud" }[u[0]] : u[0]}`; }
    else if (g >= 1000) q = `${(Math.ceil(g / 100) / 10).toString().replace(".", ",")} kg`;
    else q = `${Math.ceil(g / 10) * 10} g`;
    (out[cat] = out[cat] || []).push([n, q]);
  });
  return out;
}

const MESES = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

function seasonKey(date) {
  const y = date.getFullYear();
  const t = (m, d) => new Date(y, m - 1, d);
  if (date >= t(12, 21)) return "invierno";
  if (date >= t(9, 23)) return "otono";
  if (date >= t(6, 21)) return "verano";
  if (date >= t(3, 20)) return "primavera";
  return "invierno";
}

// Semanas de lunes a domingo. Cada semana pertenece al mes en el que cae su lunes:
// el 1.er lunes del mes abre la semana 1. Si el mes tiene 5 lunes, la semana 5 repite el menú 1.
// La estación se decide por el lunes, para que toda la semana use el mismo menú.
function seasonOf(date) {
  const dow = (date.getDay() + 6) % 7;
  const monday = new Date(date.getFullYear(), date.getMonth(), date.getDate() - dow);
  const n = Math.ceil(monday.getDate() / 7);
  return { key: seasonKey(monday), week: n === 5 ? 1 : n - 1, n, month: MESES[monday.getMonth()], monday, dow };
}

if (typeof module !== "undefined") module.exports = { ING, NUT, SEASONS, buildWeek, shopping, seasonOf };
