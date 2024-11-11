import { testObject } from "./objects.js";


function defaults(obj, defaultProps) {
    for (const key in defaultProps) {
      if (obj[key] === undefined) {
        obj[key] = defaultProps[key];
      }
    }
    return obj
  }
  
  const defaultprops= { name: "Unknown", age: 0, location: "Unknown", occupation: "Superhero" };
  
  console.log(defaults(testObject,defaultprops)); 