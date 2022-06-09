const inventory = require("../cars");
const carDetails = require("../problem1");

let carId = 100;

const car = carDetails(inventory,carId);
//console.log(car)

if(Object.keys(car).length !== 0 ) {
    console.log(`Car ${car.id} is a ${car.car_year} ${car.car_make} ${car.car_model}`);
}
else{
    console.log("pass right arguments")
}


//carDetails(inventory,33)
//carDetails(inventory,100)
