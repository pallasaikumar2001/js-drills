//Q1 Find all users who are interested in playing video games.


import {users} from "./users.js";

export function task1(users){
    let arr=[]
    for (const key in users) {
    //    console.log(users[key].interests.length)
        // for(let i=0;i<users[key].interests.length;i++){
        //     let value = users[key].interests[i];
        //     // console.log(value);
        //     if (value.includes("Video Games")){
        //         arr.push(users[key])
        //     }
        // }
        if (users[key].interests.includes("Video Games")){
            arr.push(key)
        }
    }
    return arr
}
console.log(task1(users))
