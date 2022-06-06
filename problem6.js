const bMWandAudiCars= (inventory = []) => {
    
    let filteredList =[];

    if (inventory.length === 0 || !inventory){
        return [];
    }

    for (let i = 0;i < inventory.length; i++) {
      
        if ((inventory[i].car_make === "BMW") || (inventory[i].car_make === "Audi" )){
        
        filteredList.push(inventory[i]);
        
        }
    }
    return filteredList
}
module.exports = bMWandAudiCars
