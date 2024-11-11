import { items } from "./arrays.js";

function find(elements,cb){
    for (let i=0;i<elements.length;i++){
        if (cb(elements[i])===true)
            console.log(elements[i])
    }
}
function cb(num){
    if (num%2==0){
        return true
    }
    else{
        return false
    }
}
find(items,cb)