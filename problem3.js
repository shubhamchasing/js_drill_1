const sortedCarModels = (inventory = []) => {
    let car;
    let carList = [];

    if (inventory.length === 0){
        return []
    }

    for (let i = 0;i < inventory.length; i++) {
        car = inventory[i];
        carList.push(car.car_model)
    }

    let sortedCar = carList.sort();
    
    return sortedCar

}

module.exports = sortedCarModels
