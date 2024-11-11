import { testObject } from "./objects.js";

function keys(obj) {
    // Retrieve all the names of the object's properties.
    // Return the keys as strings in an array.
    // Based on http://underscorejs.org/#keys
    let arr=[]
    for (const key in obj){
        arr.push(key)
    }
    return arr

  }
console.log(keys(testObject))
