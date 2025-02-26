/**
 * maak een nieuwe array met:
 * totaal wiskunde
 * totaal nederlands
 * totaal chemie
 *
 */

const resultaten = [
  { vak: "wiskunde", punt: 6, totaal: 10 },
  { vak: "wiskunde", punt: 4, totaal: 10 },
  { vak: "nederlands", punt: 8, totaal: 10 },
  { vak: "chemie", punt: 8, totaal: 10 },
  { vak: "nederlands", punt: 8, totaal: 10 },
];
let som1 = 0;
let som2 = 0;
let som3 = 0;
const nieuweLijst = resultaten.filter((item) => item.vak == "wiskunde");
nieuweLijst.forEach((item) => (som1 += item.punt));
const som1Lijst = [som1];
const nieuweLijst2 = resultaten.filter((item) => item.vak == "nederlands");
nieuweLijst2.forEach((item) => (som2 += item.punt));
const som2Lijst = [som2];
const nieuweLijst3 = resultaten.filter((item) => item.vak == "chemie");
nieuweLijst3.forEach((item) => (som3 += item.punt));
const som3Lijst = [som3];
const totaal = som1Lijst.concat(som2Lijst, som3Lijst);
console.log(totaal);
