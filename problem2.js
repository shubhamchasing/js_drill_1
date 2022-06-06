const carDetails = (inventory = []) => {

    let lastCar;

    if ( !inventory || inventory.length === 0){

        return {};
    }

    lastCar = inventory[inventory.length - 1]
    //console.log(lastCar)
    return lastCar;

}

module.exports = carDetails;