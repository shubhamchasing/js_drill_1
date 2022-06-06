const bMWandAudiCars = require ("../problem6.js");
const inventory = require("../cars.js");

const carsList = bMWandAudiCars(inventory);

// cars list in Json

console.log(JSON.stringify(carsList));
