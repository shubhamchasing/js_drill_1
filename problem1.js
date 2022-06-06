const carDetails = (inventory = [], id) => {

    let car;

    if (inventory === undefined || inventory.length === 0 || id === undefined) {
        return [];
    }


    for(let i = 0; i < inventory.length; i++){

        car = inventory[i];

        if(car.id === id){
            return car;
        }
    }

    return [];

}

module.exports = carDetails;