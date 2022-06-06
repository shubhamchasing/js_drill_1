const carYears = (inventory = []) => {
    let car;
    let carYearList =[];
    if (inventory.length === 0){
        return []
    }

    for (let i = 0; i < inventory.length; i++) {

        car = inventory[i];
        carYearList.push(car.car_year);
    }

    return carYearList;

}
module.exports = carYears
