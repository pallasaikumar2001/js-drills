//Q2 Find all users staying in Germany.


import { users } from "./users.js";

export function task2(users){
    let arr=[]
    for (const key in users){
        
        if (users[key].nationality.includes("Germany")){
            arr.push(key)
        }

    }
    return arr
}
console.log(task2(users))