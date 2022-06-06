const carsMadeBefore2000 = (inventory = [],years = []) => {
    
    //cars made before the year 2000
    const filteredCars = [];
    const carDetails = inventory;

    if ( !inventory || inventory.length === 0 || years.length === 0 ){
        return []
    }

    for (let i = 0; i < years.length; i++){
        if (years[i] < 2000) {
        
            filteredCars.push(carDetails[i])
        }
    }

    return filteredCars
}
module.exports = carsMadeBefore2000;
