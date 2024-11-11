  //    Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.
  

import {arrayOfObjects} from './dataset.js';

export function task1(arrayOfObjects){
    const emails=[];
    for ( let i=0;i<arrayOfObjects.length;i+=1){
        let a=arrayOfObjects[i].email;
        emails.push(a);
    }
    return emails
}   

console.log(task1(arrayOfObjects))