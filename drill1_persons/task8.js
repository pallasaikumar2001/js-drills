  //    Implement a loop to access and log the city and country of each individual in the dataset.
  //in this task I printed city and country along with the names of the individuals for the clarification


//   import { arrayOfObjects } from "./dataset.js";

  export function task8(arrayOfObjects){
    let arr={}
    for(let i=0; i<arrayOfObjects.length;i+=1){
        arr[arrayOfObjects[i].name]=[arrayOfObjects[i].city,arrayOfObjects[i].country]
    }
    return arr
  }
//   console.log(task8(arrayOfObjects))