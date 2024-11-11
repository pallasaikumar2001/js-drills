//Q3 Find all users with masters Degree.


import { users } from "./users.js";

export function task3(users){
    let arr=[]
    for (const key in users) {
        //console.log(key)
        if (users[key].qualification.includes("Masters")){
            arr.push(key)
        }
    }
    return arr
}
console.log(task3(users))
