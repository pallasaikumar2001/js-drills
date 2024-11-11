import { testObject} from "./objects.js"

function pairs(obj) {
    // Convert an object into a list of [key, value] pairs.
    // http://underscorejs.org/#pairs
    let arr=[]
    for (const key in obj){
        var pairs=[]
        pairs.push(key)
        pairs.push(obj[key])
        arr.push(pairs)
        
    }
    return arr
  }
console.log(pairs(testObject))