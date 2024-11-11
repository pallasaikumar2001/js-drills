  //    Write a function that accesses and prints the names and email addresses of individuals aged 25.



// import { arrayOfObjects } from "./dataset.js";

export function task7(arrayOfObjects){
    let arr={};
    for (let i=0; i<arrayOfObjects.length; i+=1){
        // let l=[];
        if (arrayOfObjects[i].age===25){
            arr[arrayOfObjects[i].name]=arrayOfObjects[i].email;
            // arr.value()=arrayOfObjects[i].email;
        }
        
    }
    return arr
}

// console.log(task7(arrayOfObjects))