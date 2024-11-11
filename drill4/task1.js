//function each(elements, cb) {
    // Do NOT use forEach to complete this function.
    // Iterates over a list of elements, yielding each in turn to the `cb` function.
    // This only needs to work with arrays.
    // You should also pass the index into `cb` as the second argument
    // based off http://underscorejs.org/#each
 // }
import { items } from "./arrays.js";
function each(elements, cb) {
    const arr = []; 
    for (let i = 0; i < elements.length; i++) {
        cb(elements[i], i);
        arr.push(cb(elements[i]));
    }
    console.log(arr)
 
 }
each(items,(x,i)=> console.log(x,i));

//   function fucn(x,i) {
//   console.log(x,i);
    
//   }
