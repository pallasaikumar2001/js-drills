  //    Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.


// import { arrayOfObjects } from "./dataset.js";
export function task3(arrayOfObjects){
    let list=[]
    for (let i=0;i<arrayOfObjects.length; i+=1){
        if (arrayOfObjects[i].isStudent===true){
            if ( arrayOfObjects[i].country==='Australia'){
                list.push(arrayOfObjects[i].name)
            }
        }
    }
    return list
}
// console.log(students(arrayOfObjects))
