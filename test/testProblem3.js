const sortedCarModels = require ("../problem3.js");
const inventory = require("../cars.js");


const sortedCarList = sortedCarModels(inventory);

console.log(sortedCarList);
