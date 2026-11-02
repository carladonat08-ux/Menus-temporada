// Datos del planificador estacional
// ING: código -> [nombre, categoría, kcal/100 g, proteína/100 g, hidrato escalable en descanso?, unidad opcional [nombre, g/ud]]
const ING = {
  pol: ["Pechuga de pollo", "carne", 110, 23, 0],
  mus: ["Muslo de pollo deshuesado sin piel", "carne", 120, 20, 0],
  pav: ["Pechuga de pavo", "carne", 105, 24, 0],
  ter: ["Ternera magra (pídela picada o en filetes en la carnicería)", "carne", 130, 21, 0],
  cos: ["Costilla de cerdo (peso sin hueso; con hueso, compra 1,6 veces más)", "carne", 230, 18, 0],
  lom: ["Lomo de cerdo", "carne", 140, 21, 0],
  jam: ["Jamón cocido extra (sin lactosa ni dextrosa: mira la etiqueta)", "carne", 110, 19, 0],
  fpv: ["Pavo en lonchas (sin lactosa: mira la etiqueta)", "carne", 100, 19, 0],
  que: ["Queso curado (manchego u oveja)", "lacteos", 400, 25, 0],
  par: ["Parmesano o grana padano", "lacteos", 390, 33, 0],
  moz: ["Mozzarella sin lactosa", "lacteos", 250, 18, 0],
  mej: ["Mejillones (carne cocida congelada; o clòtxines con concha, unas 4 veces el peso)", "pescado", 172, 24, 0],
  pul: ["Pulpo cocido", "pescado", 90, 18, 0],
  jur: ["Sorell (jurel), limpio", "pescado", 120, 20, 0],
  boq: ["Boquerones limpios (abiertos, sin espina)", "pescado", 115, 20, 0],
  tru: ["Trucha (en filetes)", "pescado", 120, 20, 0],
  sca: ["Sardinas en lata con espina (escurridas)", "pescado", 210, 25, 0, ["latas", 85]],
  hig: ["Hígado de pollo", "carne", 120, 17, 0],
  con: ["Conejo troceado (peso con hueso)", "carne", 101, 15.8, 0],
  sal: ["Salmón (porciones congeladas)", "pescado", 200, 20, 0],
  mer: ["Merluza (congelada)", "pescado", 75, 16, 0],
  bac: ["Bacalao (lomos congelados)", "pescado", 80, 18, 0],
  dor: ["Dorada de piscifactoría (en lomos)", "pescado", 100, 20, 0],
  lub: ["Lubina de piscifactoría (en lomos)", "pescado", 100, 19, 0],
  sar: ["Sardinas limpias (peso con espina)", "pescado", 120, 16, 0],
  cab: ["Caballa (en lomos)", "pescado", 180, 19, 0],
  bon: ["Bonito (fresco en verano o congelado)", "pescado", 140, 24, 0],
  atu: ["Atún al natural (lata)", "pescado", 110, 25, 0, ["latas", 56]],
  gam: ["Gambas peladas congeladas", "pescado", 85, 19, 0],
  cal: ["Anillas de calamar congeladas", "pescado", 80, 16, 0],
  sep: ["Sepia congelada", "pescado", 75, 16, 0],
  hue: ["Huevos", "huevos", 140, 12.5, 0, ["uds", 55]],
  cla: ["Claras de huevo", "huevos", 50, 11, 0],
  tof: ["Tofu firme", "huevos", 130, 13, 0],
  lsl: ["Leche sin lactosa enriquecida en calcio", "lacteos", 46, 3.3, 0],
  sky: ["Skyr o yogur proteico sin lactosa", "lacteos", 63, 11, 0],
  arr: ["Arroz integral", "cereal", 350, 7.5, 1],
  qui: ["Quinoa", "cereal", 365, 14, 1],
  pas: ["Pasta de arroz integral", "cereal", 355, 7.5, 1],
  fid: ["Fideos de arroz", "cereal", 360, 6, 1],
  pom: ["Polenta (harina de maíz)", "cereal", 360, 8, 1],
  pat: ["Patata", "cereal", 80, 2, 1],
  pan: ["Pan de masa madre de espelta", "cereal", 250, 9, 1],
  grf: ["Garrofó (congelado)", "legumbre", 110, 7, 1],
  avn: ["Copos de avena", "cereal", 375, 13, 0],
  len: ["Lentejas cocidas (bote, escurridas)", "legumbre", 90, 7, 0],
  gar: ["Garbanzos cocidos (bote, escurridos)", "legumbre", 120, 7, 0],
  alu: ["Alubias blancas cocidas (bote, escurridas)", "legumbre", 95, 6.5, 0],
  pal: ["Maíz para palomitas", "cereal", 375, 11, 0],
  tor: ["Tortitas de arroz", "cereal", 380, 8, 0, ["uds", 9]],
  cbc: ["Calabacín", "verdura", 17, 1.2, 0],
  zan: ["Zanahoria", "verdura", 40, 0.9, 0],
  ber: ["Berenjena", "verdura", 25, 1, 0],
  jud: ["Judía verde (bajoqueta; en invierno, congelada)", "verdura", 30, 1.8, 0],
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
  gra: ["Granada (granos)", "fruta", 83, 1.7, 0],
  pmo: ["Pomelo", "fruta", 42, 0.8, 0],
  bro: ["Brócoli (solo los ramilletes)", "verdura", 34, 2.8, 0],
  col: ["Col o repollo", "verdura", 25, 1.3, 0],
  ruc: ["Rúcula", "verdura", 25, 2.6, 0],
  rab: ["Rábanos", "verdura", 16, 0.7, 0],
  oli: ["Aceitunas", "grasa", 145, 1, 0],
  aov: ["Aceite de oliva virgen extra", "grasa", 900, 0, 0],
  agu: ["Aguacate", "grasa", 160, 2, 0],
  nue: ["Nueces", "grasa", 650, 15, 0],
  alm: ["Almendras", "grasa", 600, 21, 0],
  cac: ["Crema de cacahuete 100 %", "grasa", 600, 25, 0],
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
  fre:[.3,7.7,2,16,.4], ara:[.3,14,2.4,6,.3], fra:[.7,12,6.5,25,.7], kiw:[.5,15,3,34,.3], nar:[.1,12,2.4,40,.1], man:[.3,13,1.8,37,.2], pla:[.3,23,2.6,5,.3], pin:[.1,13,1.4,13,.3], uva:[.2,18,.9,10,.4], mel:[.2,8,.9,9,.2], pap:[.3,11,1.7,20,.3], gra:[1.2,19,4,10,.3], pmo:[.1,8,1.6,22,.1], bro:[.4,7,2.6,47,.7], col:[.1,6,2.5,40,.5], ruc:[.7,3.7,1.6,160,1.5], rab:[.1,3.4,1.6,25,.3],
  aov:[100,0,0,1,.6], pal:[4.5,74,13,7,3.2], oli:[15,1,3,50,1], grf:[.5,18,5,30,2.4], cos:[17,0,0,15,1], agu:[15,9,7,12,.6], nue:[65,14,6.7,98,2.9], alm:[50,22,12,269,3.7], cac:[50,20,6,40,1.9], coc:[7,2,0,5,.5], whe:[1,3,0,100,.5],
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
    note: "Cocina de casa: arroces, bullit y tortillas de bajoqueta. Fresas, kiwi y las últimas naranjas.",
    comidas: [
      "Paella valenciana de pollo y conejo|arr:70,pol:80,con:70,jud:100,grf:30,tom:60,aov:10",
      "Arròs amb bledes (arroz con acelgas, alubias y bacalao)|arr:60,ace:200,alu:100,bac:80,tom:60,aov:10",
      "Arroz caldoso de pollo y bajoqueta|arr:70,pol:130,jud:120,zan:60,tom:60,aov:10",
      "Arròs negre de sepia|arr:70,sep:180,tom:60,aov:10",
      "Lentejas con arroz y huevo duro|len:180,arr:50,zan:80,tri:60,hue:55,aov:10",
      "Potaje de garbanzos con espinacas y bacalao|gar:150,esp:150,bac:120,tri:60,aov:10",
      "Bullit valencià de merluza (patata, bajoqueta y calabacín)|mer:180,pat:250,jud:120,cbc:120,aov:10",
      "Pollo al horno con patatas y romero|mus:160,pat:250,zan:80,aov:10",
      "Conejo al ajillo (con aceite de ajo) y patatas|con:170,pat:250,jud:80,aov:10",
      "Fideuà de fideos de arroz con gambas y sepia|fid:70,gam:80,sep:100,tom:60,aov:10",
      "Arròs al forn con costilla, magro de cerdo, garbanzos y patata (sin morcilla)|arr:65,cos:70,lom:60,gar:60,pat:60,tom:80,aov:5",
      "Lomo a la plancha con patatas al horno y ensalada|lom:130,pat:220,lec:60,tom:100,aov:10",
      "Fesols amb bledes (alubias con acelgas y patata)|alu:180,ace:200,pat:100,hue:55,aov:10",
      "Tortilla de patatas con ensalada valenciana|hue:55,cla:170,pat:200,lec:60,tom:100,oli:20,aov:10",
      "Dorada al horno con patata y tomate|dor:170,pat:220,tom:120,aov:10",
      "Macarrones integrales con carne picada y tomate|pas:70,ter:110,tri:150,par:10,aov:5",
      "Arroz con conejo y bajoqueta|arr:70,con:140,jud:120,tom:60,aov:10",
      "Figatells caseros (lomo de cerdo e hígado de pollo) con patata y ensalada|lom:80,hig:80,pat:200,lec:60,tom:100,aov:10",
      "Sepia a la plancha con arroz y ensalada|sep:200,arr:60,lec:60,tom:100,aov:10",
      "Pavo en salsa de almendras con arroz|pav:140,arr:60,alm:10,tri:80,aov:10",
      "Ensalada de garbanzos con atún y aceitunas|gar:150,atu:56,tom:120,lec:40,oli:15,aov:10",
    ],
    cenas: [
      "Tortilla de bajoqueta (judía verde) con tomate|hue:55,cla:140,jud:150,tom:120,aov:10",
      "Sepia a la plancha con patata y ensalada|sep:200,pat:150,lec:60,tom:100,aov:10",
      "Merluza a la plancha con verdura al vapor|mer:200,pat:120,cbc:150,zan:80,aov:10",
      "Sardinas a la plancha con tomate aliñado|sar:150,tom:150,aov:5",
      "Ensalada de tomate con atún y aceitunas|tom:200,lec:60,atu:112,oli:15,aov:7",
      "Bacalao con espinacas salteadas|bac:160,esp:200,tom:80,aov:7",
      "Ensalada valenciana con huevo duro, atún y aceitunas|lec:100,tom:150,pep:80,oli:15,hue:55,atu:80,aov:7",
      "Pollo a la plancha con calabacín y patata|pol:150,cbc:200,pat:120,aov:10",
      "Calamares a la plancha con ensalada y patata|cal:200,lec:80,tom:120,pat:120,aov:10",
      "Revuelto de espinacas y gambas|hue:55,cla:100,esp:150,gam:100,aov:5",
      "Boquerones a la plancha con tomate|boq:170,tom:150,lec:60,aov:5",
      "Bullit de patata, bajoqueta y calabacín con huevo duro y atún|pat:200,jud:150,cbc:150,hue:55,atu:80,aov:10",
      "Lubina al horno con patata|lub:170,pat:150,tom:100,aov:10",
      "Tortilla francesa con jamón cocido y tomate|hue:55,cla:70,jam:60,tom:150,aov:5",
      "Pavo a la plancha con ensalada valenciana|pav:150,lec:80,tom:120,oli:15,aov:5",
      "Mejillones al vapor con patata y ensalada|mej:140,pat:150,lec:80,tom:80,aov:5",
      "Crema de calabacín con huevo poché y taquitos de jamón cocido|cbc:300,pat:60,que:10,hue:55,jam:50,aov:5",
      "Sorell (jurel) a la plancha con patata y tomate|jur:170,pat:120,tom:120,aov:10",
      "Hígado de pollo a la plancha con patata y ensalada|hig:150,pat:150,lec:60,tom:100,aov:10",
      "Merluza en papillote con patata y ensalada|mer:180,pat:100,lec:80,tom:80,aov:8",
      "Caballa a la plancha con tomate|cab:120,tom:150,aov:5",
    ],
  },
  verano: {
    name: "Verano",
    range: "21 de junio – 22 de septiembre",
    note: "Arroces de verano, clòtxines, sardinas y tomate de la huerta. Frutos rojos, melón y piña.",
    comidas: [
      "Paella valenciana de pollo y conejo|arr:70,pol:80,con:70,jud:100,grf:30,tom:60,aov:10",
      "Paella de marisco|arr:70,gam:80,sep:100,cal:60,tom:60,aov:10",
      "Arròs a banda con sepia y gambas (sin alioli)|arr:70,sep:150,gam:60,tom:60,aov:10",
      "Ensalada de arroz con atún y tomate|arr:70,atu:112,tom:120,pep:100,aov:10",
      "Clòtxines al vapor con patata y ensalada|mej:150,pat:250,lec:60,tom:100,aov:10",
      "Sardinas a la plancha con patata y tomate aliñado|sar:150,pat:250,tom:150,aov:5",
      "Pollo al limón con arroz y calabacín|pol:150,arr:65,cbc:180,aov:10",
      "Ensalada de lentejas y arroz con atún y tomate|len:200,arr:50,atu:56,tom:120,pep:80,lec:40,aov:10",
      "Fideuà de fideos de arroz con gambas|fid:70,gam:120,tom:60,aov:10",
      "Bonito a la plancha con tomate y patata|bon:140,tom:150,pat:220,aov:10",
      "Ensalada de garbanzos con huevo, aceitunas y tomate|gar:150,hue:55,tom:150,pep:80,oli:15,aov:10",
      "Conejo a la plancha con patatas y ensalada|con:170,pat:220,lec:60,tom:100,aov:10",
      "Dorada a la plancha con arroz y ensalada|dor:170,arr:60,lec:60,tom:100,aov:10",
      "Arroz con conejo y bajoqueta|arr:70,con:140,jud:120,tom:60,aov:10",
      "Macarrones integrales fríos con atún, tomate y mozzarella|pas:70,atu:56,moz:50,tom:150,aov:5",
      "Boquerones en vinagre (sin ajo) con ensalada de patata|boq:160,pat:250,tom:100,pep:80,aov:10",
      "Lomo a la plancha con ensalada de patata y bajoqueta|lom:130,pat:220,jud:120,aov:10",
      "Figatells caseros (lomo de cerdo e hígado de pollo) con tomate y patata|lom:80,hig:80,pat:200,tom:150,aov:10",
      "Arroz de verduras de temporada con sepia|arr:70,sep:150,ber:100,cbc:100,tom:60,aov:10",
      "Ensalada de alubias con atún y tomate|alu:200,atu:112,tom:150,pep:80,aov:10",
      "Calamares a la plancha con arroz y tomate|cal:200,arr:65,tom:120,aov:10",
      "Ensalada de garbanzos con pollo, pepino y tomate|gar:150,pol:100,pep:100,tom:120,lec:40,aov:10",
      "Garbanzos salteados con gambas y calabacín|gar:150,gam:100,cbc:150,tom:60,aov:10",
    ],
    cenas: [
      "Tomate aliñado (tomaca amb oli i sal) con atún|tom:250,atu:112,aov:10",
      "Clòtxines al vapor con ensalada|mej:140,lec:80,tom:120,aov:5",
      "Sardinas a la plancha con ensalada|sar:150,lec:80,tom:120,aov:5",
      "Tortilla de calabacín con ensalada|hue:55,cla:140,cbc:200,lec:60,tom:80,aov:5",
      "Ensalada de tomate con atún y aceitunas|tom:200,lec:60,atu:112,oli:15,aov:7",
      "Calamares a la plancha con ensalada valenciana|cal:200,lec:80,tom:120,oli:15,pat:100,aov:5",
      "Merluza a la plancha con calabacín y tomate|mer:200,cbc:200,tom:100,pat:100,aov:10",
      "Pechuga de pavo a la plancha con ensalada de tomate|pav:140,tom:200,lec:60,aov:8",
      "Pollo a la plancha con ensalada de pepino y tomate|pol:140,pep:120,tom:150,aov:10",
      "Sorell (jurel) a la plancha con patata y tomate|jur:170,pat:120,tom:120,aov:10",
      "Gambas a la plancha con ensalada|gam:150,lec:80,tom:120,aov:10",
      "Ensalada valenciana con huevo duro y aceitunas|lec:100,tom:150,pep:80,oli:20,hue:110,aov:10",
      "Boquerones al horno con limón y ensalada|boq:170,lec:80,tom:120,aov:5",
      "Revuelto de calabacín y gambas|hue:55,cla:100,cbc:150,gam:100,aov:5",
      "Pavo a la plancha con berenjena asada|pav:150,ber:200,aov:10",
      "Caballa a la plancha con tomate y patata|cab:120,tom:150,pat:120,aov:5",
      "Bullit de patata y bajoqueta con merluza|mer:150,pat:180,jud:150,aov:10",
      "Hígado de pollo a la plancha con tomate|hig:150,tom:150,lec:60,aov:10",
      "Merluza en papillote con patata y ensalada|mer:180,pat:100,lec:80,tom:80,aov:8",
      "Tortilla francesa con queso curado y tomate|hue:55,cla:140,que:20,tom:150,aov:5",
      "Lubina a la plancha con tomate y patata|lub:170,tom:150,lec:60,pat:120,aov:10",
      "Tortilla de bajoqueta (judía verde) con tomate|hue:55,cla:140,jud:150,tom:120,aov:7",
      "Brocheta de pollo con calabacín y tomate a la plancha|pol:140,cbc:200,tom:100,aov:7",
    ],
  },
  otono: {
    name: "Otoño",
    range: "23 de septiembre – 20 de diciembre",
    note: "Arròs al forn, arroces con legumbre, figatells y calabaza. Mandarinas, uva y kiwi.",
    comidas: [
      "Arròs al forn con costilla, magro de cerdo, garbanzos y patata (sin morcilla)|arr:65,cos:70,lom:60,gar:60,pat:60,tom:80,aov:5",
      "Paella valenciana de pollo y conejo|arr:70,pol:80,con:70,jud:100,grf:30,tom:60,aov:10",
      "Arròs amb fesols i naps (arroz con alubias, nabo y costilla)|arr:60,alu:100,nab:120,cos:80,ace:80,aov:5",
      "Arròs amb bledes (arroz con acelgas, alubias y bacalao)|arr:60,ace:200,alu:100,bac:80,tom:60,aov:10",
      "Lentejas con arroz y huevo duro|len:180,arr:50,zan:80,tri:60,hue:55,aov:10",
      "Potaje de garbanzos con espinacas y bacalao|gar:150,esp:150,bac:120,tri:60,aov:10",
      "Arroz caldoso de pollo y calabaza|arr:70,pol:130,cza:120,jud:80,aov:10",
      "Pollo al horno con patatas y calabaza|mus:160,pat:200,cza:120,aov:10",
      "Conejo al ajillo (con aceite de ajo) y patatas|con:170,pat:250,jud:80,aov:10",
      "Arròs negre de sepia|arr:70,sep:180,tom:60,aov:10",
      "Bullit valencià de merluza (patata, bajoqueta y calabacín)|mer:180,pat:250,jud:120,cbc:120,aov:10",
      "Pilotes de ternera en salsa de tomate con arroz|ter:120,hue:30,tri:100,arr:60,aov:10",
      "Macarrones integrales con carne picada y tomate|pas:70,ter:110,tri:150,par:10,aov:5",
      "Fideuà de fideos de arroz con gambas y sepia|fid:70,gam:80,sep:100,tom:60,aov:10",
      "Caballa al horno con patatas y bajoqueta|cab:130,pat:250,jud:120,aov:5",
      "Figatells caseros (lomo de cerdo e hígado de pollo) con puré de calabaza|lom:80,hig:80,cza:150,pat:150,aov:10",
      "Lomo a la plancha con patatas al horno y ensalada|lom:130,pat:220,lec:60,tom:100,aov:10",
      "Fesols amb bledes (alubias con acelgas y patata)|alu:180,ace:200,pat:100,hue:55,aov:10",
      "Arroz con conejo y bajoqueta|arr:70,con:140,jud:120,tom:60,aov:10",
      "Dorada al horno con patata y tomate|dor:170,pat:220,tom:120,aov:10",
      "Pavo en salsa de almendras con arroz|pav:140,arr:60,alm:10,tri:80,aov:10",
    ],
    cenas: [
      "Tortilla de patata (sin cebolla) con ensalada|hue:55,cla:140,pat:150,lec:60,tom:80,aov:10",
      "Crema de calabaza con huevo poché y taquitos de jamón cocido|cza:150,zan:120,pat:60,que:10,hue:55,jam:50,aov:5",
      "Bacalao con espinacas salteadas|bac:160,esp:200,tom:80,aov:7",
      "Sepia a la plancha con patata y ensalada|sep:200,pat:150,lec:60,tom:100,aov:10",
      "Merluza al horno con calabacín y patata|mer:200,cbc:200,pat:120,aov:10",
      "Sardinas en lata con espina y tomate|sca:85,tom:150",
      "Pollo a la plancha con acelgas y patata|pol:150,ace:200,pat:100,aov:10",
      "Bullit de patata, bajoqueta y calabaza con merluza|pat:180,jud:150,cza:100,mer:150,aov:10",
      "Boquerones al horno con patata y espinacas|boq:170,pat:150,esp:150,aov:5",
      "Tortilla de espinacas con queso curado|hue:55,cla:140,esp:150,que:20,aov:5",
      "Mejillones en salsa de tomate|mej:140,tri:100,aov:5",
      "Lubina al horno con patata|lub:170,pat:150,tom:100,aov:10",
      "Pavo a la plancha con calabaza asada|pav:150,cza:150,pat:80,aov:10",
      "Calamares a la plancha con espinacas salteadas|cal:180,esp:200,aov:7",
      "Sardinas en lata con espina sobre ensalada de tomate y endibias|sca:85,tom:150,end:100,aov:5",
      "Revuelto de espinacas y gambas|hue:55,cla:100,esp:150,gam:100,aov:5",
      "Sorell (jurel) al horno con patata|jur:170,pat:150,tom:100,aov:5",
      "Hígado de pollo a la plancha con puré de calabaza|hig:150,cza:150,pat:100,aov:10",
      "Merluza en papillote con patata y ensalada|mer:180,pat:100,lec:80,tom:80,aov:8",
      "Tortilla francesa con jamón cocido y tomate|hue:55,cla:70,jam:60,tom:150,aov:5",
      "Trucha a la plancha con acelgas y patata|tru:170,ace:200,pat:100,aov:5",
    ],
  },
  invierno: {
    name: "Invierno",
    range: "21 de diciembre – 19 de marzo",
    note: "Olleta y putxero con pilotes, arròs al forn, giraboix y platos de cuchara. Naranjas, mandarinas y kiwi.",
    comidas: [
      "Putxero valenciano con pilotes de ternera (garbanzos, pollo, ternera, patata y verduras)|gar:120,pol:70,ter:50,pat:120,zan:80,nab:80,chi:60,aov:5",
      "Arròs al forn con costilla, magro de cerdo, garbanzos y patata (sin morcilla)|arr:65,cos:70,lom:60,gar:60,pat:60,tom:80,aov:5",
      "Arròs amb fesols i naps (arroz con alubias, nabo y costilla)|arr:60,alu:100,nab:120,cos:80,ace:80,aov:5",
      "Arròs amb bledes (arroz con acelgas, alubias y bacalao)|arr:60,ace:200,alu:100,bac:80,tom:60,aov:10",
      "Lentejas con arroz y huevo duro|len:180,arr:50,zan:80,tri:60,hue:55,aov:10",
      "Potaje de garbanzos con espinacas y bacalao|gar:150,esp:150,bac:120,tri:60,aov:10",
      "Giraboix (bacalao, patata, bajoqueta y huevo; sin alioli)|bac:150,pat:250,jud:150,hue:55,aov:10",
      "Arroz caldoso de pollo y acelgas|arr:70,pol:130,ace:150,zan:60,aov:10",
      "Pollo al horno con patatas y chirivía|mus:160,pat:200,chi:75,aov:10",
      "Conejo guisado con patata y zanahoria|con:170,pat:220,zan:100,tri:60,aov:10",
      "Fesols amb bledes (alubias con acelgas y patata)|alu:180,ace:200,pat:100,hue:55,aov:10",
      "Pilotes de ternera en salsa de tomate con patata|ter:120,hue:30,tri:100,pat:200,aov:10",
      "Arròs negre de sepia|arr:70,sep:180,tom:60,aov:10",
      "Macarrones integrales con atún, tomate y parmesano|pas:70,atu:112,tri:150,par:10,aov:5",
      "Borreta (patata, espinacas, bacalao y huevo)|pat:250,esp:200,bac:150,hue:55,aov:10",
      "Figatells caseros (lomo de cerdo e hígado de pollo) con patata y acelgas|lom:80,hig:80,pat:200,ace:150,aov:10",
      "Merluza en salsa verde con patata y bajoqueta|mer:200,pat:250,jud:80,aov:10",
      "Lomo con puré de patata y espinacas|lom:130,pat:250,esp:150,aov:10",
      "Garbanzos guisados con pollo y zanahoria|gar:150,mus:130,zan:100,pat:80,tri:60,aov:10",
      "Paella valenciana de pollo y conejo|arr:70,pol:80,con:70,jud:100,grf:30,tom:60,aov:10",
      "Caballa al horno con patata y nabo|cab:130,pat:220,nab:100,aov:5",
    ],
    cenas: [
      "Crema de calabaza con huevo poché y taquitos de jamón cocido|cza:150,zan:120,pat:60,que:10,hue:55,jam:50,aov:5",
      "Caldo de putxero con pollo, verduras y huevo|pol:100,hue:55,zan:100,nab:80,pue:40,aov:5",
      "Tortilla de espinacas con queso curado|hue:55,cla:140,esp:150,que:20,aov:5",
      "Merluza a la plancha con acelgas y patata|mer:200,ace:200,pat:120,aov:10",
      "Bacalao con espinacas salteadas|bac:160,esp:200,tom:80,aov:7",
      "Sepia a la plancha con patata y endibias|sep:200,pat:150,end:120,aov:10",
      "Pollo a la plancha con calabaza asada|pol:150,cza:150,pat:80,aov:10",
      "Sardinas en lata con espina y tomate|sca:85,tom:120",
      "Tortilla de patata (sin cebolla) con ensalada|hue:55,cla:140,pat:150,lec:60,tom:80,aov:10",
      "Salmón al horno con patata y espinacas|sal:130,pat:150,esp:150,aov:5",
      "Bullit de patata, zanahoria y acelgas con huevo duro y atún|pat:180,zan:100,ace:150,hue:55,atu:80,aov:10",
      "Mejillones en salsa de tomate|mej:140,tri:100,aov:5",
      "Lubina al horno con patata y nabo|lub:170,pat:120,nab:100,aov:10",
      "Pavo a la plancha con endibias|pav:150,end:120,aov:10",
      "Revuelto de espinacas y gambas|hue:55,cla:100,esp:150,gam:100,aov:5",
      "Hígado de pollo a la plancha con patata y endibias|hig:150,pat:150,end:100,aov:10",
      "Calamares a la plancha con acelgas rehogadas|cal:180,ace:200,aov:7",
      "Sorell (jurel) al horno con patata|jur:170,pat:150,tom:80,aov:5",
      "Merluza en papillote con patata y ensalada|mer:180,pat:100,lec:80,tom:80,aov:8",
      "Tortilla francesa con jamón cocido y tomate|hue:55,cla:70,jam:60,tom:150,aov:5",
      "Trucha al horno con calabaza y patata|tru:170,cza:120,pat:80,aov:5",
    ],
  },
};

// Desayunos (la fruta del A cambia según estación)
const DESAYUNOS = {
  A: { t: "Porridge de avena con leche, whey, fruta y nueces", base: "avn:60,lsl:200,whe:15,nue:15", fruta: true },
  B: { t: "Tostada de espelta con tomate y revuelto de huevo y claras con queso curado", base: "pan:70,tom:60,aov:7,hue:55,cla:100,que:20" },
  C: { t: "Tortitas de avena y plátano con crema de cacahuete", base: "avn:50,lsl:150,cla:70,whe:15,pla:80,cac:15" },
  D: { t: "Tostada de espelta con tomate, aceite, jamón cocido y queso, y café con leche", base: "pan:70,tom:60,aov:7,jam:70,que:15,lsl:200" },
  E: { t: "Yogur o skyr con copos de avena, fruta y nueces", base: "sky:200,avn:50,nue:15", fruta: true },
};
// Rotación semanal: nunca el mismo desayuno ni pan dos días seguidos; pan 3 días, avena o yogur 4 días
const DES_ROT = ["A", "B", "C", "D", "E", "B", "C"];
const DIAS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
const ENTRENO_DEF = [true, true, false, true, true, false, false];
const REST_FACTOR = 0.8; // hidratos de comida y cena en días de descanso
// Objetivo de pérdida de peso: techo diario de energía
const KCAL_MAX_ENT = 1800, KCAL_MAX_DES = 1700, KCAL_MAX_DOM = 1750;
const KCAL_MIN_ENT = 1650, KCAL_MIN_DES = 1550, KCAL_MIN_DOM = 1500, PROT_MIN = 107; // suelos: 1,6 g/kg con 67 kg
const AOV_FACTOR = 1; // aceite de comida y cena tal cual (la dieta mediterránea pide 20-30 g de AOVE al día)
// Fruta de temporada por mes (Comunitat Valenciana). La fruta se elige según el mes de cada semana.
// Todas son frutas bien toleradas con malabsorción de fructosa, en estas raciones. Fuera: manzana, pera, mango, sandía,
// cereza, melocotón, albaricoque, ciruela e higo (exceso de fructosa o sorbitol). Frutos rojos congelados todo el año.
const TODO_EL_ANO = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const FRUTA_MES = {
  fre: [2, 3, 4, 5, 6],                  // fresas de Huelva y de la huerta valenciana
  nar: [11, 12, 1, 2, 3, 4, 5, 6],       // naranjas de la Comunitat (navelina, navel, lane late, valencia late)
  man: [10, 11, 12, 1, 2, 3, 4],         // clementinas y, de febrero a abril, mandarinas tardías
  pmo: [11, 12, 1, 2, 3, 4, 5],          // pomelo de la Comunitat
  kiw: [11, 12, 1, 2, 3, 4, 5],
  uva: [8, 9, 10, 11, 12],               // uva embolsada del Vinalopó hasta diciembre
  gra: [9, 10, 11, 12],                  // granada mollar de Elche
  mel: [6, 7, 8, 9],
  pin: TODO_EL_ANO, pap: TODO_EL_ANO, ara: TODO_EL_ANO, fra: TODO_EL_ANO, pla: TODO_EL_ANO,
};
const FRUTA_G = { fre: 100, kiw: 100, nar: 130, man: 100, pmo: 80, uva: 100, gra: 45, mel: 120, pin: 140, pap: 140, fra: 60, ara: 75, pla: 100 };
// Orden de rotación: primero la fruta propia de la temporada, después la de todo el año
const FRUTA_ORDEN = ["fre", "man", "kiw", "nar", "uva", "mel", "pin", "gra", "ara", "pap", "pmo", "fra", "pla"];
const MES_POR_DEFECTO = { primavera: 4, verano: 7, otono: 11, invierno: 1 };
// Postre de los días con legumbre: fruta rica en vitamina C (ayuda a absorber el hierro)
const POSTRE_VITC = ["nar", "kiw", "fre", "pap", "man", "mel", "pin"];

function parse(s) {
  return s.split(",").map((p) => { const [c, g] = p.split(":"); return [c, +g]; });
}
function dish(str) { const [t, i] = str.split("|"); return { t, items: parse(i) }; }

const PROT = ["cos","pol","mus","pav","ter","lom","jam","fpv","hig","con","sal","mer","bac","dor","lub","sar","cab","bon","atu","gam","cal","sep","mej","pul","jur","boq","tru","sca","tof"];
const LEG = ["len","gar","alu","grf"];
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

// Proteína por comida/cena: como máximo ~35 g (reparte mejor y evita excesos).
// Se reduce solo el alimento proteico principal, nunca por debajo del 65 %.
const MAX_P_MEAL = 35;
function capProt(o) {
  const p = o.items.reduce((s, [c, g]) => s + ING[c][3] * g / 100, 0);
  if (p <= MAX_P_MEAL) return o;
  const pMain = o.items.filter(([c]) => PROT.includes(c)).reduce((s, [c, g]) => s + ING[c][3] * g / 100, 0);
  if (!pMain) return o;
  const f = Math.max(0.65, 1 - (p - MAX_P_MEAL) / pMain);
  return { ...o, items: o.items.map(([c, g]) => [c, PROT.includes(c) && !ING[c][5] ? Math.round(g * f / 5) * 5 : g]) };
}

// Platos pequeños y con verdura: techo de energía por plato y mínimo de verdura
const MEAL_KCAL = { c: 600, n: 380, f: 700 }; // f: comida del domingo (día de juntarse; ese día no se cena)
const VEG_MIN = 150;
// Guarniciones de verdura de temporada (huerta de la Comunitat Valenciana). Se añaden a la comida y la cena
// cuando el plato no lleva verdura propia, para comer verduras distintas cada día.
const VERD_MES = {
  cbc: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12], ber: [6, 7, 8, 9, 10], pep: [3, 4, 5, 6, 7, 8, 9, 10],
  jud: TODO_EL_ANO, // bajoqueta de la huerta de mayo a octubre; el resto del año, de invernadero o congelada
  lec: TODO_EL_ANO, zan: TODO_EL_ANO, ace: TODO_EL_ANO, ruc: TODO_EL_ANO, rab: [3, 4, 5, 6, 7, 8, 9],
  can: [10, 11, 12, 1, 2, 3, 4], end: [9, 10, 11, 12, 1, 2, 3, 4], esp: [9, 10, 11, 12, 1, 2, 3, 4, 5, 6],
  cza: [9, 10, 11, 12, 1, 2, 3], chi: [10, 11, 12, 1, 2, 3], nab: [9, 10, 11, 12, 1, 2, 3, 4], kal: [11, 12, 1, 2, 3], // la calabaza se guarda y se vende hasta marzo
  pak: [10, 11, 12, 1, 2, 3, 4], bro: [10, 11, 12, 1, 2, 3, 4], col: [11, 12, 1, 2, 3],
};
const GUARN = {
  cbc: { t: "calabacín a la plancha", it: "cbc:150", paso: "Guarnición: corta el calabacín en rodajas y hazlo a la plancha con unas gotas del aceite y sal, 3 minutos por cada lado." },
  ber: { t: "berenjena asada", it: "ber:150", paso: "Guarnición: corta la berenjena en rodajas, sálala y ásala a 200 °C unos 20 minutos (o a la plancha) con unas gotas del aceite." },
  jud: { t: "bajoqueta rehogada", it: "jud:150", paso: "Guarnición: cuece la bajoqueta troceada 8-10 minutos en agua con sal, escúrrela y rehógala 2 minutos con un poco del aceite y una pizca de pimentón." },
  pep: { t: "ensalada de pepino y tomate", it: "pep:100,tom:80", ens: true, paso: "Guarnición: corta el pepino y el tomate y alíñalos con aceite, sal y orégano." },
  lec: { t: "ensalada de lechuga y tomate", it: "lec:80,tom:80", ens: true, paso: "Guarnición: prepara la ensalada de lechuga y tomate y alíñala con aceite, sal y vinagre o limón." },
  rab: { t: "ensalada de lechuga y rábanos", it: "lec:70,rab:60", ens: true, paso: "Guarnición: lava la lechuga, corta los rábanos en rodajas finas y alíñalos con aceite, sal y vinagre." },
  can: { t: "ensalada de canónigos y tomate", it: "can:60,tom:80", ens: true, paso: "Guarnición: mezcla los canónigos con el tomate troceado y alíñalos con aceite, sal y limón." },
  ruc: { t: "ensalada de rúcula y tomate", it: "ruc:50,tom:80", ens: true, paso: "Guarnición: mezcla la rúcula con el tomate troceado y alíñalos con aceite, sal y vinagre." },
  end: { t: "ensalada de endibias y zanahoria", it: "end:100,zan:50", ens: true, paso: "Guarnición: corta las endibias en juliana, ralla la zanahoria y alíñalas con aceite, sal y limón." },
  zan: { t: "zanahoria asada con comino", it: "zan:130", paso: "Guarnición: corta la zanahoria en bastones y ásala a 200 °C unos 25 minutos con unas gotas del aceite, sal y comino." },
  esp: { t: "espinacas salteadas", it: "esp:150", paso: "Guarnición: saltea las espinacas 2-3 minutos con un poco del aceite y sal." },
  ace: { t: "acelgas rehogadas", it: "ace:150", paso: "Guarnición: cuece las acelgas troceadas 5 minutos, escúrrelas y rehógalas 2 minutos con un poco del aceite y pimentón." },
  cza: { t: "calabaza asada", it: "cza:150", paso: "Guarnición: corta la calabaza en dados y ásala a 200 °C unos 20-25 minutos con unas gotas del aceite, sal y romero." },
  chi: { t: "chirivía y zanahoria asadas", it: "chi:75,zan:75", paso: "Guarnición: corta la chirivía y la zanahoria en bastones y ásalas a 200 °C unos 25 minutos con unas gotas del aceite, sal y tomillo." },
  nab: { t: "nabo y zanahoria al vapor", it: "nab:100,zan:50", paso: "Guarnición: cuece el nabo y la zanahoria en dados al vapor 12-15 minutos y alíñalos con un hilo del aceite y sal." },
  kal: { t: "kale salteado", it: "kal:100", paso: "Guarnición: quita los tallos al kale, trocéalo y saltéalo 3-4 minutos con un poco del aceite, sal y una gota de limón." },
  pak: { t: "pak choi salteado", it: "pak:150", paso: "Guarnición: corta el pak choi a lo largo y saltéalo 3 minutos con un poco del aceite y sal." },
  bro: { t: "brócoli y zanahoria al vapor", it: "bro:75,zan:75", paso: "Guarnición: cuece al vapor los ramilletes de brócoli y la zanahoria en rodajas 6-8 minutos y alíñalos con un hilo del aceite y sal." },
  col: { t: "col salteada con zanahoria", it: "col:75,zan:75", paso: "Guarnición: corta la col en tiras finas y saltéala con la zanahoria rallada 5 minutos con un poco del aceite, sal y comino." },
};
const GUARN_ORDEN = ["bro", "cbc", "esp", "ber", "cza", "jud", "kal", "col", "pep", "ace", "rab", "chi", "can", "nab", "pak", "ruc", "end", "zan", "lec"];
// Platos que ya son de verdura o que no admiten guarnición
const SIN_GUARN = /^(Ensalada|Tomate aliñado|Crema|Bullit|Caldo|Putxero|Revuelto|Tortilla de (calabacín|bajoqueta|espinacas))/;
function kcalOf(items) { return items.reduce((a, [c, g]) => a + ING[c][2] * g / 100, 0); }
function normalize(o, slot) {
  let items = o.items.map((x) => x.slice());
  let t = o.t;
  // 1) verdura mínima
  // (el tomate y el tomate triturado del sofrito no cuentan ni se aumentan)
  const isVeg = (c) => ING[c][1] === "verdura" && c !== "tom" && c !== "tri";
  const vg = items.filter(([c]) => isVeg(c)).reduce((a, [, g]) => a + g, 0);
  const tomG = items.filter(([c]) => c === "tom").reduce((a, [, g]) => a + g, 0);
  if (vg + tomG < VEG_MIN) {
    if (vg > 0) items = items.map(([c, g]) => [c, isVeg(c) ? Math.round(g * Math.min(2, (VEG_MIN - tomG) / vg) / 10) * 10 : g]);
    else if (!/ensalada/i.test(t)) { items.push(["lec", 80]); t += " y ensalada"; }
    else items.push(["lec", 80]);
  }
  // Cena ligera: como mucho 100 g de patata y 30 g de pan
  if (slot === "n") items = items.filter(([c]) => c !== "pan").map(([c, g]) => [c, c === "pat" ? Math.min(g, 100) : g]);
  // 2) techo por plato: primero hidratos (mín. 60 %), luego proteína (mín. 80 %)
  const cap = MEAL_KCAL[slot];
  let k = kcalOf(items);
  if (k > cap) {
    const ck = items.filter(([c]) => ING[c][4]).reduce((a, [c, g]) => a + ING[c][2] * g / 100, 0);
    if (ck) { const f = Math.max(0.6, 1 - (k - cap) / ck); items = items.map(([c, g]) => [c, ING[c][4] ? Math.round(g * f / 5) * 5 : g]); }
    k = kcalOf(items);
    if (k > cap) {
      const pk = items.filter(([c]) => PROT.includes(c) && !ING[c][5]).reduce((a, [c, g]) => a + ING[c][2] * g / 100, 0);
      if (pk) { const f = Math.max(0.8, 1 - (k - cap) / pk); items = items.map(([c, g]) => [c, PROT.includes(c) && !ING[c][5] ? Math.round(g * f / 5) * 5 : g]); }
    }
  }
  // Comida de diario: es la comida principal; si queda pequeña, sube hasta ~550 kcal (máx. +20 %)
  if (slot === "c") {
    const kk = kcalOf(items);
    if (kk < 550) { const up = Math.min(1.2, 550 / kk); items = items.map(([c, g]) => [c, (ING[c][1] === "verdura" && c !== "tom" && c !== "tri") || ING[c][4] || PROT.includes(c) || LEG.includes(c) ? Math.round(g * up / 5) * 5 : g]); }
  }
  // Comida del domingo (sin cena después): ración generosa, hasta ~650 kcal
  if (slot === "f") {
    const kk = kcalOf(items);
    if (kk < 650) { const up = Math.min(1.3, 650 / kk); items = items.map(([c, g]) => [c, ["tom", "tri", "aov"].includes(c) ? g : Math.round(g * up / 5) * 5]); }
  }
  return { ...o, t, items };
}

// Especias recomendadas (todas las especias están permitidas; el pimiento como verdura no)
function spicesFor(o) {
  const t = o.t.toLowerCase(), has = (...cs) => o.items.some(([c]) => cs.includes(c));
  if (/arròs negre/.test(t)) return "azafrán, laurel y perejil";
  if (/arròs al forn/.test(t)) return "pimentón dulce, azafrán y romero";
  if (/paella|arròs|arroz caldoso|arroz con|fideuà/.test(t)) return "pimentón dulce, azafrán y romero";
  if (/figatell|hígado/.test(t)) return "pimienta negra, clavo y nuez moscada";
  if (/pilotes|putxero/.test(t)) return "nuez moscada, perejil, laurel y pimienta negra";
  if (/crema de calabaza|calabaza asada|puré de calabaza/.test(t)) return "nuez moscada, comino y jengibre";
  if (/borreta|giraboix/.test(t)) return "pimentón dulce, comino y laurel";
  if (has("len", "gar", "alu")) return "pimentón dulce, comino, laurel y cúrcuma";
  if (has("con")) return "romero, tomillo, laurel y una pizca de cayena";
  if (has("pol", "mus", "pav")) return "romero, tomillo, pimentón, cúrcuma o curry";
  if (has("pul")) return "pimentón dulce y picante, y sal gruesa";
  if (has("mej", "gam", "cal", "sep")) return "laurel, perejil y limón";
  if (has("sar", "cab", "bon", "jur", "boq", "sca", "sal", "atu")) return "orégano, perejil y limón";
  if (has("mer", "bac", "dor", "lub", "tru")) return "perejil, laurel, eneldo y limón";
  if (has("lom", "ter", "cos", "jam")) return "pimentón, orégano, tomillo y pimienta negra";
  if (has("hue", "cla")) return "perejil, pimentón, pimienta negra y nuez moscada";
  return "orégano, albahaca y tomillo";
}

const MEAT = ["pol", "mus", "pav", "con", "ter", "lom", "cos", "hig", "jam", "fpv"], ROJA = ["ter", "lom", "cos"];
const FISH = ["mer", "bac", "dor", "lub", "tru", "sar", "cab", "bon", "jur", "boq", "sal", "sca", "atu", "gam", "cal", "sep", "mej", "pul"], AZUL = ["sar", "cab", "bon", "jur", "boq", "sal", "sca"];
const EGG = ["hue", "cla", "tof"];
// Grupo principal de un plato: carne / roja / pescado / azul / huevo / legumbre
function famOf(str) {
  const it = parse(str.split("|")[1]);
  const pr = (arr) => it.filter(([c]) => arr.includes(c)).reduce((a, [c, g]) => a + ING[c][3] * g / 100, 0);
  const m = pr(MEAT), f = pr(FISH), e = pr(EGG);
  const lg = it.filter(([c]) => LEG.includes(c)).reduce((a, [, g]) => a + g, 0);
  if (!m && !f) return lg >= 100 ? "legumbre" : "huevo";
  if (e > m + f) return "huevo";
  if (m >= f) return pr(ROJA) > m / 2 ? "roja" : "carne";
  return pr(AZUL) > f / 2 ? "azul" : "pescado";
}
// Alimento proteico principal (para no repetirlo más de 2 veces por semana)
const KEY = { pol: "pollo", mus: "pollo", pav: "pavo", con: "conejo", ter: "ternera", lom: "cerdo", cos: "cerdo", hig: "hígado", jam: "jamón",
  sar: "sardina", sca: "sardina", atu: "atún", bon: "atún", mer: "merluza", bac: "bacalao", dor: "dorada", lub: "lubina", tru: "trucha",
  cab: "caballa", jur: "jurel", len: "lentejas", gar: "garbanzos", alu: "alubias", boq: "boquerón", sal: "salmón", gam: "gamba", cal: "calamar", sep: "sepia", mej: "mejillón", pul: "pulpo", hue: "huevo", tof: "tofu" };
function keysOf(str) { return [...new Set(parse(str.split("|")[1]).filter(([c]) => KEY[c] && c !== "hue").map(([c]) => KEY[c]))]; }
function mainKey(str) {
  const it = parse(str.split("|")[1]).filter(([c]) => KEY[c] && c !== "hue");
  if (!it.length) return /\bhue:/.test(str) ? "huevo" : "legumbre";
  it.sort((a, b) => ING[b[0]][3] * b[1] - ING[a[0]][3] * a[1]);
  return KEY[it[0][0]];
}
// Tipo de plato (para variar la forma de cocinar)
function tipoOf(str) {
  const t = str.split("|")[0].toLowerCase();
  if (/^(tortilla|revuelto)/.test(t)) return "tortilla";
  if (/^bullit/.test(t)) return "bullit";
  if (/^crema/.test(t)) return "crema";
  if (/^ensalada/.test(t)) return "ensalada";
  if (/^(arroz|arròs|paella|fideuà)/.test(t) || /\barr:([4-9]\d|1\d\d)/.test(str)) return "arroz";
  if (/^(macarrones)/.test(t)) return "pasta";
  return "otro";
}
const TIPO_MAX = { tortilla: 2, bullit: 1, crema: 2, ensalada: 3, arroz: 2, pasta: 1 };
const isFiesta = (str) => /^(Paella|Fideuà|Arròs al forn|Arròs a banda|Arròs negre|Putxero)/.test(str);

// Topes de ración por toma (g en crudo): tolerancia digestiva y platos de tamaño normal
const RACION_MIN = { arr: 50, pas: 50, fid: 50, pat: 60 }; // por debajo no es una ración que se pueda cocinar
const RACION_MAX = { bro: 75, col: 75, tri: 100, tom: 150, gar: 150, len: 200, alu: 200, grf: 50, cza: 150, chi: 100, pat: 250, arr: 80, pas: 80, fid: 80,
  sep: 200, cal: 200, mer: 200, bac: 180, dor: 180, lub: 180, tru: 170, sal: 140, mus: 160, pol: 150, pav: 150, lom: 150, ter: 130,
  con: 200, cos: 100, hig: 100, sar: 170, boq: 170, bon: 150, cab: 150, jur: 170, gam: 150, mej: 150, pul: 150, atu: 120 };
const limRacion = ([c, g]) => [c, Math.max(RACION_MIN[c] || 0, RACION_MAX[c] ? Math.min(g, RACION_MAX[c]) : g)];
const capRacion = (o) => ({ ...o, items: o.items.map(limRacion) });

// Índices por defecto de comida (w = 0..3). Con 21 platos, las semanas 1-3 no repiten; la 4 mezcla.
function defaultComida(w, d, N) { return w < 3 ? (d + 7 * w) % N : (d * 3 + 1) % N; }
function defaultCena(w, d, N) { return w < 3 ? (d + 7 * ((w + 1) % 3) + 2) % N : (d * 3 + 2) % N; }

// Construye el menú de una semana. opts: { ent: [7 booleanos] }
// Reglas: comida y cena sin la misma proteína ni doble legumbre; hígado máx. 1 vez/semana;
// al menos 2 días con legumbres a la semana.
// Elección de platos de una semana (independiente de los días de entreno). Se memoriza por estación y semana.
const SEL_CACHE = {};
const hasHig = (str) => /\bhig:/.test(str);
const hasLeg = (str) => /\b(len|gar|alu|grf):/.test(str);
function selectWeek(key, w) {
  const ck = key + w;
  if (SEL_CACHE[ck]) return SEL_CACHE[ck];
  // Plan precalculado por tools/planner.js (cumple todas las reglas y maximiza la variedad del mes)
  if (typeof PLAN !== "undefined" && PLAN[key] && PLAN[key][w]) {
    SEL_CACHE[ck] = { CI: PLAN[key][w][0].slice(), NI: PLAN[key][w][1].slice() };
    return SEL_CACHE[ck];
  }
  const S = SEASONS[key];
  const NN = S.cenas.length;
  // Uso de cada plato en las semanas anteriores de la estación (para repartir todos los platos)
  const prevUse = { c: {}, n: {} };
  for (let pw = 0; pw < w; pw++) {
    const p = selectWeek(key, pw);
    p.CI.forEach((i) => { prevUse.c[i] = (prevUse.c[i] || 0) + 1; });
    p.NI.forEach((i) => { if (i >= 0) prevUse.n[i] = (prevUse.n[i] || 0) + 1; });
  }
  // 1) Planificación por grupos (como en consulta):
  //    · comida y cena nunca del mismo grupo (carne / pescado / huevo / legumbre)
  //    · semana: pescado ~5 (al menos 2 azul), carne ~5 (roja máx. 2), huevo 2-3, legumbre al mediodía 2 días
  //    · platos de fiesta solo el domingo; hígado máx. 1 vez por semana
  const FEST = [], DIARIO = [];
  S.comidas.forEach((x, i) => (isFiesta(x) ? FEST : DIARIO).push(i));
  // Plantilla lunes-sábado [comida, cena]; "leg" = comida con legumbre. Se rota cada semana.
  const T = [
    [["leg"], ["pescado", "azul"]],
    [["carne"], ["pescado", "azul"]],
    [["carne", "roja"], ["huevo", "pescado"]],
    [["leg"], ["pescado", "huevo"]],
    [["roja", "carne"], ["azul", "pescado"]],
    [["pescado", "azul"], ["carne", "huevo"]],
  ];
  const rot = [0, 2, 4, 1][w];
  const CI = [], NI = [];
  const usedC = new Set(), usedN = new Set();
  let higUsed = false;
  // El domingo (plato de fiesta) cuenta desde el principio para el límite de carne roja
  let rojas = FEST.length && famOf(S.comidas[FEST[w % FEST.length]]) === "roja" ? 1 : 0;
  const famOfC = (i) => famOf(S.comidas[i]), famOfN = (i) => famOf(S.cenas[i]);
  const bigFam = (f) => (f === "roja" ? "carne" : f === "azul" ? "pescado" : f);
  const keyCount = {}, tipoCount = {}, riceDays = [];
  let prevKeys = [], todayKeys = [], curDay = 0;
  const sunKeys = FEST.length ? keysOf(S.comidas[FEST[w % FEST.length]]) : [];
  const okBasic = (str) => !(higUsed && hasHig(str)) && !(rojas >= 2 && famOf(str) === "roja")
    && keysOf(str).every((k) => (keyCount[k] || 0) < 2) && !(mainKey(str) === "huevo" && (keyCount.huevo || 0) >= 3)
    && !keysOf(str).some((k) => prevKeys.includes(k) || (curDay === 5 && sunKeys.includes(k)))
    && (tipoOf(str) === "otro" || (tipoCount[tipoOf(str)] || 0) < TIPO_MAX[tipoOf(str)]);
  if (FEST.length) keysOf(S.comidas[FEST[w % FEST.length]]).forEach((k) => { keyCount[k] = 1; });
  const note = (str, d) => {
    keysOf(str).forEach((k) => { keyCount[k] = (keyCount[k] || 0) + 1; });
    todayKeys.push(...keysOf(str));
    if (mainKey(str) === "huevo") keyCount.huevo = (keyCount.huevo || 0) + 1;
    const tp = tipoOf(str); if (tp !== "otro" && d !== 6) tipoCount[tp] = (tipoCount[tp] || 0) + 1;
    if (tp === "arroz") riceDays.push(d);
  };
  // Se respeta el grupo del día por orden de preferencia y, dentro del grupo, se elige el plato que menos
  // ha salido en las semanas anteriores de la estación (así se acaban usando todos los platos).
  const pick = (pool, list, used, accept, prefs, start) => {
    const usage = list === S.comidas ? prevUse.c : prevUse.n;
    for (const p of prefs) {
      let best = -1, bu = Infinity;
      for (let j = 0; j < pool.length; j++) {
        const i = pool[(start + j) % pool.length];
        if (used.has(i) || !okBasic(list[i]) || !accept(i)) continue;
        if (!(p === "leg" ? hasLeg(list[i]) : famOf(list[i]) === p)) continue;
        const u = usage[i] || 0;
        if (u < bu) { best = i; bu = u; }
      }
      if (best >= 0) return best;
    }
    // Si el grupo preferido no tiene ningún plato válido, cualquier otro grupo que cumpla todas las reglas
    {
      let best = -1, bu = Infinity;
      for (let j = 0; j < pool.length; j++) {
        const i = pool[(start + j) % pool.length];
        if (used.has(i) || !okBasic(list[i]) || !accept(i)) continue;
        const u = usage[i] || 0;
        if (u < bu) { best = i; bu = u; }
      }
      if (best >= 0) return best;
    }
    // Respaldo: se relajan los límites de variedad, pero nunca se repite plato ni se rompe el grupo
    if (typeof DEBUG_PICK !== "undefined") DEBUG_PICK.push([key, w, curDay, list === S.comidas ? "comida" : "cena", prefs.join("/")]);
    for (let j = 0; j < pool.length; j++) { const i = pool[(start + j) % pool.length]; if (!used.has(i) && accept(i) && !(higUsed && hasHig(list[i]))) return i; }
    for (let j = 0; j < pool.length; j++) { const i = pool[(start + j) % pool.length]; if (!used.has(i)) return i; }
    return pool[start % pool.length];
  };
  const allN = S.cenas.map((_, i) => i);
  for (let d = 0; d < 7; d++) {
    let ci, ni;
    curDay = d;
    const start = (w * 6 + d * 3) % 64;
    if (d === 6 && FEST.length) { ci = FEST[w % FEST.length]; keysOf(S.comidas[ci]).forEach((k) => { keyCount[k] = (keyCount[k] || 0) - 1; }); }
    else ci = pick(DIARIO, S.comidas, usedC, (i) => !(tipoOf(S.comidas[i]) === "arroz" && (riceDays.includes(d - 1) || (d === 5 && FEST.length))), T[(d + rot) % 6][0], start);
    usedC.add(ci);
    note(S.comidas[ci], d);
    if (d === 6) { CI.push(ci); NI.push(-1); prevKeys = todayKeys; todayKeys = []; continue; }
    const fc = bigFam(famOfC(ci));
    const com0 = dish(S.comidas[ci]);
    const prefsN = d === 6 ? ["huevo", fc === "carne" ? "pescado" : "carne"] : T[(d + rot) % 6][1];
    const tc = tipoOf(S.comidas[ci]);
    ni = pick(allN, S.cenas, usedN, (i) => bigFam(famOfN(i)) !== fc && !clash(com0, dish(S.cenas[i])) && !(hasHig(S.comidas[ci]) && hasHig(S.cenas[i]))
      && (tc === "otro" || tipoOf(S.cenas[i]) !== tc) && mainKey(S.cenas[i]) !== mainKey(S.comidas[ci]), prefsN, start + w * 5);
    usedN.add(ni);
    note(S.cenas[ni], -1);
    if (hasHig(S.comidas[ci]) || hasHig(S.cenas[ni])) higUsed = true;
    if (famOfC(ci) === "roja" && d !== 6) rojas++;
    if (famOfN(ni) === "roja") rojas++;
    CI.push(ci); NI.push(ni);
    prevKeys = todayKeys; todayKeys = [];
  }

  // Comprobación de variedad para un cambio en el día d
  const keysDay = (z) => (z < 0 || z > 6) ? [] : keysOf(S.comidas[CI[z]]).concat(NI[z] >= 0 ? keysOf(S.cenas[NI[z]]) : []);
  const fitsDay = (d, str, slot) => {
    const ks = keysOf(str);
    if (ks.some((k) => keysDay(d - 1).includes(k) || keysDay(d + 1).includes(k))) return false;
    const cnt = {};
    for (let z = 0; z < 7; z++) {
      const own = z === d ? (slot === "c" ? [str, NI[z] >= 0 ? S.cenas[NI[z]] : null] : [S.comidas[CI[z]], str]) : [S.comidas[CI[z]], NI[z] >= 0 ? S.cenas[NI[z]] : null];
      own.filter(Boolean).forEach((x) => keysOf(x).forEach((k) => { cnt[k] = (cnt[k] || 0) + 1; }));
    }
    return Object.values(cnt).every((n) => n <= 2);
  };
  // Legumbre al mediodía al menos 2 días
  const legDays = () => CI.filter((c) => hasLeg(S.comidas[c])).length;
  for (let d = 0; d < 6 && legDays() < 2; d++) {
    if (hasLeg(S.comidas[CI[d]])) continue;
    let best = -1, bu = Infinity;
    DIARIO.forEach((i) => {
      const x = S.comidas[i];
      if (!hasLeg(x) || CI.includes(i) || hasHig(x) || bigFam(famOf(x)) === bigFam(famOf(S.cenas[NI[d]])) || clash(dish(x), dish(S.cenas[NI[d]]))) return;
      if (tipoOf(x) === "arroz" && (tipoOf(S.comidas[CI[d - 1] ?? 0]) === "arroz" || tipoOf(S.comidas[CI[d + 1] ?? 0]) === "arroz")) return;
      if (!fitsDay(d, x, "c")) return;
      const u = prevUse.c[i] || 0; if (u < bu) { best = i; bu = u; }
    });
    if (best >= 0) CI[d] = best;
  }
  // Pescado azul al menos 2 veces
  const nAzul = () => CI.filter((i) => famOf(S.comidas[i]) === "azul").length + NI.filter((i) => i >= 0 && famOf(S.cenas[i]) === "azul").length;
  for (let d = 0; d < 6 && nAzul() < 2; d++) {
    if (famOf(S.cenas[NI[d]]) !== "pescado") continue;
    let best = -1, bu = Infinity;
    S.cenas.forEach((x, i) => {
      if (famOf(x) !== "azul" || NI.includes(i) || clash(dish(S.comidas[CI[d]]), dish(x)) || !fitsDay(d, x, "n")) return;
      const u = prevUse.n[i] || 0; if (u < bu) { best = i; bu = u; }
    });
    if (best >= 0) NI[d] = best;
  }
  SEL_CACHE[ck] = { CI, NI };
  return SEL_CACHE[ck];
}

function buildWeek(key, w, opts = {}) {
  const S = SEASONS[key];
  const ENT = opts.ent || ENTRENO_DEF;
  const mes = opts.month || MES_POR_DEFECTO[key];
  const NC = S.comidas.length, NN = S.cenas.length;

  const { CI, NI } = selectWeek(key, w);

  // 3) Montar los días
  const days = [];
  let prevDk = null;
  const sideUse = {};
  let ayer = [];
  const isVegC = (c) => ING[c][1] === "verdura" && c !== "tom" && c !== "tri";
  // Guarnición de temporada: si el plato no lleva verdura propia (o solo «ensalada»), se le pone una verdura del mes,
  // la menos usada de la semana y distinta de la de la otra comida del día y de las del día anterior.
  const withSide = (o, hoy, d) => {
    o.items.forEach(([c]) => { if (isVegC(c)) sideUse[c] = (sideUse[c] || 0) + 1; }); // cuenta también la verdura propia del plato
    if (SIN_GUARN.test(o.t)) return o;
    let t = o.t, items = o.items;
    const generic = / (con|y) ensalada( y patata)?$/.test(t) || / con ensalada y patata$/.test(t);
    if (generic) { t = t.replace(/ con ensalada y patata$/, " con patata").replace(/ (con|y) ensalada$/, ""); items = items.filter(([c]) => c !== "lec"); }
    const own = items.filter(([c]) => isVegC(c)).reduce((a, [, g]) => a + g, 0);
    if (own >= 100 && !generic) return o;
    if (own >= 100) return { ...o, t, items };
    const soloEns = isFiesta(t) || items.some(([c]) => ["arr", "pas", "fid"].includes(c));
    const cand = GUARN_ORDEN.filter((c) => VERD_MES[c].includes(mes) && (!soloEns || GUARN[c].ens) && !hoy.includes(c) && !items.some(([x]) => x === c));
    const pool = cand.filter((c) => !ayer.includes(c));
    const list = pool.length ? pool : cand;
    if (!list.length) return { ...o, t, items };
    const off = (d * 5 + w * 7) % list.length;
    const pick = list.map((c, i) => [c, (sideUse[c] || 0) * 100 + ((i - off + list.length) % list.length)]).sort((a, b) => a[1] - b[1])[0][0];
    sideUse[pick] = (sideUse[pick] || 0) + 1; hoy.push(pick);
    const add = parse(GUARN[pick].it);
    const merged = items.map((x) => x.slice());
    add.forEach(([c, g]) => { const e = merged.find(([x]) => x === c); if (e) e[1] += g; else merged.push([c, g]); });
    return { ...o, t: `${t} + ${GUARN[pick].t}`, items: merged, side: pick };
  };
  for (let d = 0; d < 7; d++) {
    const ent = ENT[d];
    const ci = CI[d], ni = NI[d];
    const scale = (o) => ent ? o : { ...o, items: o.items.map(([c, g]) => [c, ING[c][4] ? Math.round(g * REST_FACTOR / 5) * 5 : g]) };
    // Legumbres con cítrico de postre: la vitamina C mejora la absorción del hierro
    const withCitrus = (o) => {
      if (!o.items.some(([c]) => LEG.includes(c))) return o;
      const opts = POSTRE_VITC.filter((c) => FRUTA_MES[c].includes(mes));
      const f = opts.length ? opts[(d + w) % opts.length] : "pla";
      return { ...o, t: `${o.t} + ${ING[f][0].toLowerCase()} de postre`, items: [...o.items, [f, FRUTA_G[f]]] };
    };
    const lessOil = (o) => ({ ...o, items: o.items.map(([c, g]) => [c, c === "aov" ? Math.round(g * AOV_FACTOR) : g]) });
    const oil = (o, min) => (o.items.some(([c]) => c === "aov") ? { ...o, items: o.items.map(([c, g]) => [c, c === "aov" ? Math.max(g, min) : g]) } : { ...o, items: [...o.items, ["aov", min]] });
    const hoy = [];
    const com = withCitrus(capRacion(scale(normalize(oil(capProt(lessOil(withSide(dish(S.comidas[ci]), hoy, d))), 10), d === 6 ? "f" : "c"))));
    const cen = ni === -1
      ? (w % 2 ? { t: "Palomitas caseras (maíz en la sartén con una gota de aceite)", items: [["pal", 20], ["aov", 3]], noRecipe: true }
               : { t: "Un skyr o yogur proteico sin lactosa con canela", items: [["sky", 125]], noRecipe: true })
      : withCitrus(capRacion(scale(normalize(oil(capProt(lessOil(withSide(dish(S.cenas[ni]), hoy, d))), 8), "n"))));
    ayer = hoy;
    com.spices = spicesFor(com); if (!cen.noRecipe) cen.spices = spicesFor(cen);
    // ---- Desayuno, almuerzo y merienda
    // Reglas: un solo pan o cereal al día (desayuno); como mucho 3 piezas de fruta al día, ninguna repetida,
    // 1 por toma y un solo plátano; el almuerzo no repite yogur si el desayuno ya lo lleva.
    const FR = FRUTA_ORDEN.filter((c) => FRUTA_MES[c].includes(mes)).map((c) => [c, FRUTA_G[c]]); // fruta de temporada del mes
    const usedF = new Set();
    const postre = /de postre$/.test(com.t) ? com.items[com.items.length - 1][0] : null;
    if (postre) usedF.add(postre);
    let fi = (d * 2 + w * 3) % FR.length;
    const nextFruit = (noPla) => {
      for (let j = 0; j < FR.length; j++) {
        const [c, g] = FR[(fi + j) % FR.length];
        if (usedF.has(c) || (noPla && c === "pla")) continue;
        fi = (fi + j + 1) % FR.length; usedF.add(c);
        return [c, g];
      }
      return null;
    };
    let dk = DES_ROT[(d + w * 2) % 7];
    // Nunca huevo en el desayuno y en la cena (ni en la comida) del mismo día: se cambia el desayuno por uno sin huevo
    const eggMain = [com, cen].some((m) => m.items.some(([c]) => c === "hue"));
    if (eggMain && /\bhue:/.test(DESAYUNOS[dk].base)) dk = ["A", "E"].find((x) => x !== prevDk && x !== DES_ROT[(d + 1 + w * 2) % 7]) || "A";
    prevDk = dk;
    const D0 = DESAYUNOS[dk];
    const des = { t: D0.t, items: parse(D0.base) };
    if (dk === "C") usedF.add("pla");
    if (D0.fruta) { const f = nextFruit(true); if (f) { des.items.push(f); des.t = D0.t.replace("fruta", ING[f[0]][0].toLowerCase()); } }
    const nFruit = () => usedF.size; // frutas ya puestas en el día (incluye el postre)
    // Almuerzo
    let mm;
    const yogurDes = dk === "E";
    const almFruit = nFruit() <= 1 ? nextFruit(true) : null; // se reserva una fruta para la merienda
    if (yogurDes) {
      mm = almFruit
        ? { t: `${ING[almFruit[0]][0]} y 20 g de queso curado`, items: [almFruit, ["que", 20]] }
        : { t: "20 g de queso curado y 10 almendras", items: [["que", 20], ["alm", 10]] };
    } else {
      mm = almFruit
        ? { t: `Yogur o skyr sin lactosa con ${ING[almFruit[0]][0].toLowerCase()}`, items: [["sky", 150], almFruit] }
        : { t: `Yogur o skyr sin lactosa con canela y 10 g de ${dk === "A" ? "almendras" : "nueces"}`, items: [["sky", 150], [dk === "A" ? "alm" : "nue", 10]] };
    }
    const almQueso = mm.items.some(([c]) => c === "que");
    const almFrutoSeco = mm.items.some(([c]) => c === "alm" || c === "nue");
    // Merienda / pre-entreno: fruta con queso curado o con almendras (alternando y sin repetir lo del almuerzo)
    let conQueso = d === 6 ? w % 2 === 0 : (d + w) % 2 === 0;
    if (almQueso) conQueso = false; else if (almFrutoSeco) conQueso = true;
    let mer;
    if (d === 6 && w % 2 === 1 && !yogurDes) {
      const f = nextFruit(false);
      mer = { t: f ? `Yogur sin lactosa con ${ING[f[0]][0].toLowerCase()}` : "Yogur sin lactosa con canela", items: f ? [["sky", 125], f] : [["sky", 125]] };
    } else {
      // plátano antes de entrenar en días alternos; el resto, otra fruta del mes
      const f = ent && (d + w) % 2 === 0 && !usedF.has("pla") ? (usedF.add("pla"), ["pla", 120]) : nextFruit(false);
      const add = conQueso ? ["que", 25] : ["alm", 10];
      const txt = conQueso ? "25 g de queso curado" : "10 almendras";
      const fruta = f ? ING[f[0]][0] : null;
      mer = { t: `${fruta ? `${fruta} y ${txt}` : txt[0].toUpperCase() + txt.slice(1)}${ent ? " (60-90 min antes de entrenar)" : ""}`, items: f ? [f, add] : [add] };
    }
    const meals = [["Desayuno", des], ["Almuerzo", mm], ["Comida", com], [ent ? "Pre-entreno" : "Merienda", mer], ["Cena", cen]];
    // Control del déficit: si el día pasa del límite, se reducen los hidratos de comida y cena (mín. 60 %)
    const limit = d === 6 ? KCAL_MAX_DOM : ent ? KCAL_MAX_ENT : KCAL_MAX_DES;
    let n = nutrients(meals.flatMap(([, m]) => m.items));
    if (n.kcal > limit) {
      const carbK = [com, cen].flatMap((m) => m.items).filter(([c]) => ING[c][4]).reduce((a, [c, g]) => a + ING[c][2] * g / 100, 0);
      const f = Math.max(0.5, 1 - (n.kcal - limit) / carbK);
      [com, cen].forEach((m) => { m.items = m.items.map(([c, g]) => limRacion([c, ING[c][4] ? Math.round(g * f / 5) * 5 : g])); });
      n = nutrients(meals.flatMap(([, m]) => m.items));
    }
    // Si aún se pasa: un poco menos de proteína en la comida (mín. 85 %) y, si hace falta, merienda solo con fruta
    if (n.kcal > limit + 15) {
      com.items = com.items.map(([c, g]) => limRacion([c, PROT.includes(c) && !ING[c][5] ? Math.round(g * 0.85 / 5) * 5 : g]));
      n = nutrients(meals.flatMap(([, m]) => m.items));
    }
    if (n.kcal > limit + 15 && mer.items.length > 1) {
      mer.items = mer.items.filter(([c]) => !["que", "alm"].includes(c));
      mer.t = mer.t.replace(/ y (25 g de queso curado|10 almendras)/, "");
      n = nutrients(meals.flatMap(([, m]) => m.items));
    }
    // Suelos: proteína mínima (1,6 g/kg) y energía mínima del día
    if (n.prot < PROT_MIN && !mer.items.some(([c]) => c === "sky")) {
      // el skyr sustituye al queso o las almendras (más proteína y menos kcal)
      mer.items = [...mer.items.filter(([c]) => !["alm", "que"].includes(c)), ["sky", 125]];
      mer.t = mer.t.replace(/ y (25 g de queso curado|10 almendras)/, "").replace(/^(25 g de queso curado|10 almendras)/, "Skyr").replace(/ \(60-90/, " y un skyr (60-90");
      if (!/skyr/i.test(mer.t)) mer.t += " y un skyr";
      n = nutrients(meals.flatMap(([, m]) => m.items));
    }
    const floor = d === 6 ? KCAL_MIN_DOM : ent ? KCAL_MIN_ENT : KCAL_MIN_DES;
    if (n.kcal < floor && !mm.items.some(([c]) => c === "nue")) {
      mm.items = [...mm.items, ["nue", 10]]; mm.t += " y 10 g de nueces";
      n = nutrients(meals.flatMap(([, m]) => m.items));
    }
    // Si la proteína sigue baja (p. ej. domingo de arroz): más pescado o carne en la comida (hasta 35 g de proteína y su ración máxima)
    if (n.prot < PROT_MIN - 2) {
      const pr = (it) => it.reduce((a, [c, g]) => a + ING[c][3] * g / 100, 0);
      const main = com.items.filter(([c]) => PROT.includes(c) && !ING[c][5]);
      const room = Math.min(PROT_MIN - n.prot, 35 - pr(com.items));
      const mp = pr(main);
      if (main.length && room > 1 && mp > 0) {
        const f = 1 + room / mp;
        com.items = com.items.map(([c, g]) => main.some(([x]) => x === c) ? limRacion([c, Math.round(g * f / 5) * 5]) : [c, g]);
        n = nutrients(meals.flatMap(([, m]) => m.items));
      }
    }
    // Domingo con palomitas: si aún falta proteína, merienda con un yogur más grande
    if (n.prot < PROT_MIN - 2 && mer.items.some(([c, g]) => c === "sky" && g < 170)) {
      mer.items = mer.items.map(([c, g]) => [c, c === "sky" ? 170 : g]);
      n = nutrients(meals.flatMap(([, m]) => m.items));
    }
    // Si la energía sigue baja: fruta de postre en la comida (si quedan frutas por poner en el día)
    if (n.kcal < floor - 100 && nFruit() < 3 && !/de postre$/.test(com.t)) {
      const f = nextFruit(false);
      if (f) { com.items = [...com.items, f]; com.t += ` + ${ING[f[0]][0].toLowerCase()} de postre`; n = nutrients(meals.flatMap(([, m]) => m.items)); }
    }
    // Recorte final si los suelos han pasado el techo: fuera los frutos secos del almuerzo y, si hace falta, menos hidratos en la comida
    if (n.kcal > limit + 20) {
      com.items = com.items.map(([c, g]) => limRacion([c, ING[c][4] ? Math.round(g * 0.85 / 5) * 5 : g]));
      n = nutrients(meals.flatMap(([, m]) => m.items));
    }
    if (n.kcal > limit + 20) { // un poco menos de aceite en la comida (de 10 a 7 g)
      com.items = com.items.map(([c, g]) => [c, c === "aov" ? Math.min(g, 7) : g]);
      n = nutrients(meals.flatMap(([, m]) => m.items));
    }
    if (n.kcal > limit + 20 && mm.items.length > 1 && !mm.items.some(([c]) => c === "que") && kcalOf(mm.items.filter(([c]) => !["alm", "nue"].includes(c))) >= 100 && mm.items.some(([c]) => ["alm", "nue"].includes(c))) {
      mm.items = mm.items.filter(([c]) => !["alm", "nue"].includes(c));
      mm.t = mm.t.replace(/ y (10|15) (g de )?(almendras|nueces)/, "");
      n = nutrients(meals.flatMap(([, m]) => m.items));
    }
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
// el 1.er lunes del mes abre la semana 1. Si el mes tiene 5 lunes, la semana 5 usa el menú 2 (así no se repite con la semana 1 del mes siguiente).
// La estación se decide por el lunes, para que toda la semana use el mismo menú.
function seasonOf(date) {
  const dow = (date.getDay() + 6) % 7;
  const monday = new Date(date.getFullYear(), date.getMonth(), date.getDate() - dow);
  const n = Math.ceil(monday.getDate() / 7);
  return { key: seasonKey(monday), week: n === 5 ? 1 : n - 1, n, month: MESES[monday.getMonth()], monday, dow };
}

if (typeof module !== "undefined" && typeof PLAN === "undefined") { try { global.PLAN = require("./plan.js").PLAN; } catch (e) {} }
if (typeof module !== "undefined") module.exports = { ING, NUT, SEASONS, buildWeek, shopping, seasonOf };
