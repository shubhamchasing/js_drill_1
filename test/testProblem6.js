const bMWandAudiCars = require ("../problem6.js");
const inventory = require("../cars.js");

const carsList = bMWandAudiCars(undefined);

// cars list in Json

console.log(JSON.stringify(carsList));
