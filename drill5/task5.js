import { testObject } from "./objects.js";

function invert(obj) {
    // Returns a copy of the object where the keys have become the values and the values the keys.
    // Assume that all of the object's values will be unique and string serializable.
    // http://underscorejs.org/#invert
    // console.log(obj);
    let d={}
    console.log(testObject)
    for (const key in obj){
        let a=key;
        let b=obj[key];
        obj[b]=a;
        delete obj[a];
    }
    return obj
  }
console.log(invert(testObject))

