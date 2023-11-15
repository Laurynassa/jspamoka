"use strict";
//12 skaidre
//pirma uzd
let amzius = 23;
if (amzius > 18) {
  console.log("Tinkamas amzius");
} else {
  console.log("Netinkamas amzius ");
}
// 2 uzd
let Ly = 373;
if (Ly % 2 == 0) {
  console.log("skaicius yra lyginis ");
} else {
  console.log("Skaicius yra nelyginis");
}

// 3 uzd
let pinigai = 299;
console.log(`Jusu saskaitoje yra ${pinigai} euru`);
if (pinigai < 300) {
  console.log("Jums neuztenka pinigu, apmoketi saskaitai");
} else {
  console.log("Jus sekmingai apmokejote sasakaita");
}
//13skaidre
//pirma uzd
const PazymiuVidurkis = 9;
const lankomumas = false;

if (PazymiuVidurkis >= 8 && !lankomumas) {
  console.log(
    `Jusu vidurkis ${PazymiuVidurkis} ir lankomumas ${!lankomumas},stipendija gausite!`
  );
} else {
  console.log("Deja, stipendijos negausite");
}
//antra uzd
const x = 15;
const y = 10;
const z = 10;

if (x >= y && x >= z) {
  console.log("X skaicius yra didesnis uz Y skaiciu ir Z skaiciu");
} else {
  console.log("X skaicius yra mazesnis uz Y skaiciu ir Z skaiciu");
}
//trecia uzd
let vardas = "Petras";
let atlyginimas = 1800;
let vedes = false;

if (vedes == true && atlyginimas >= 1500) {
  console.log(`Sveikinu ${vardas}, jums paskola bus suteikta`);
} else if (vedes == false && atlyginimas >= 950) {
  console.log(`Sveikiname ${vardas}, jus gausite paskola `);
} else {
  console.log(`Apgailestaujame ${vardas}, kai uzdirbsi daugiau, pasnekesim`);
}
