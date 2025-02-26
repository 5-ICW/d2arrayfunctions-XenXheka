/**
 * bereken het gemiddelde van de punten
 */

const resultaten = [
  { vak: "wiskunde", punt: 6, totaal: 15 },
  { vak: "wiskunde", punt: 4, totaal: 5 },
  { vak: "nederlands", punt: 8, totaal: 15 },
  { vak: "chemie", punt: 8, totaal: 10 },
  { vak: "nederlands", punt: 8, totaal: 10 },
];
let som = 0;
resultaten.forEach((item) => (som += item.punt));
let gemiddelde = som / resultaten.length;
console.log(gemiddelde);
