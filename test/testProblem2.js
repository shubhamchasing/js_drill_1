const inventory = require("../cars");
const carDetails = require("../problem2");

let lastCar = carDetails(inventory);
//console.log(lastCar)
if (lastCar.length === 0){

    console.log(lastCar);
}

else{

    console.log(`Last car is a ${lastCar.car_make} ${lastCar.car_model}`)
}
