const sortedCarModels = (inventory = []) => {

    if ( !inventory || inventory.length === 0){
        return []
    }

    let sortedCar = inventory.sort((a,b) => {return a.car_model.localeCompare(b.car_model)} )


    return sortedCar

}

module.exports = sortedCarModels
