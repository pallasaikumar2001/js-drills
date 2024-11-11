// ==== Problem #1 ====
// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:
//("Car 33 is a *car year goes here* *car make goes here* *car model goes here*");

import { inventory } from "./cars.js";

function task1(inventory){
    //console.log(`{this.inventory[32].car_year] ISJKBHJFS`)
    return 'Car 33 is a ' +inventory[32].car_year+' car make goes here ' +inventory[32].car_model
}
console.log(task1(inventory))
