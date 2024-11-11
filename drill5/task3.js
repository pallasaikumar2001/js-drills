import { testObject } from "./objects.js";
function mapObject(obj,cb){
    // dict={}
    for (const key in obj){
        
        console.log( key + " : "+cb(key,obj))
    }
}
function cb(key, object){
  
  if (typeof object[key] == "string") {
    return object[key].toUpperCase(); 
  }else{
    return object[key];
  }
      

}
mapObject(testObject,cb)


