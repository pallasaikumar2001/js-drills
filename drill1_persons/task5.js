  //    Implement a loop to access and print the ages of all individuals in the dataset.


// import { arrayOfObjects } from "./dataset.js";
 export function task5(arrayOfObjects){    
    let l=[];
    for (let i=0; i<arrayOfObjects.length; i+=1){
        l.push(arrayOfObjects[i].age)
    }
    return l
}
// console.log(ages(arrayOfObjects))
