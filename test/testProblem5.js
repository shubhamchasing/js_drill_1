const carsMadeBefore2000 = require ("../problem5.js") 
const inventory = require("../cars.js");
const carYears = require("../problem4.js")

const years = carYears(inventory)

const carsList = carsMadeBefore2000(inventory,years);

console.log(carsList.length)
