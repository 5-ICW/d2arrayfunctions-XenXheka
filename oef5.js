/**
 * filter alle namen die start met een p uit de array.
 * (enkel die met een p blijven over)
 *
 */
const namenlijst = ["Karel", "Pieter", "Pol", "Stef"];
const nieuweLijst = namenlijst.filter((item) => item.startsWith("P"));
console.log(nieuweLijst);
