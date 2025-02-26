/**
 * Alle punten staan nu op 10.
 * Bereken het totaal van alle vakken samen.
 */

const resultaten = [
  { vak: "wiskunde", punt: 6, totaal: 10 },
  { vak: "wiskunde", punt: 4, totaal: 10 },
  { vak: "nederlands", punt: 8, totaal: 10 },
  { vak: "chemie", punt: 8, totaal: 10 },
  { vak: "nederlands", punt: 8, totaal: 10 },
];
let som = 0;
resultaten.forEach((item) => (som += item.punt));
console.log(som);
