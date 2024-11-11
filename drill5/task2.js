import { testObject } from "./objects.js";

function values(obj) {
    // Return all of the values of the object's own properties.
    // Ignore functions
    // http://underscorejs.org/#values
    let arr=[]
    for (const key in obj){
        arr.push(obj[key])
    }
    return arr
  }

console.log(values(testObject));
