// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.


import { inventory } from "./cars.js";

function task3(inventory){
    let arr=[]
    for (let i=0; i<inventory.length;i++){
        arr.push(inventory[i].car_model)
    }
    return arr.sort()
}
console.log(task3(inventory))
