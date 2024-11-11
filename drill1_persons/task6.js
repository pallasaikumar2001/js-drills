  //    Create a function to retrieve and display the first hobby of each individual in the dataset.


// import { arrayOfObjects } from "./dataset.js";
export function task6(arrayOfObjects){
    let arr=[]
    for (let i=0; i<arrayOfObjects.length; i+=1){
        var a= arrayOfObjects[i].hobbies
        arr.push(a[0])
        // console.log(arr)
    }
    return arr
}
// console.log(hobby(arrayOfObjects))