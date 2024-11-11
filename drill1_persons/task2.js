//    Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.

// import { arrayOfObjects } from "./dataset.js";
let list=[]
export function task2(arrayOfObjects){
    for (let i=0; i<arrayOfObjects.length; i+=1){
        if (arrayOfObjects[i].age===30){
            list.push(arrayOfObjects[i].hobbies)
        }

    }
    return list
}
// console.log(hobby(arrayOfObjects))