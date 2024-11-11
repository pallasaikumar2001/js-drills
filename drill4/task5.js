import { items } from "./arrays.js"
function even(n){
    if (n%2===0){
        return true
    }
    
}
function fil(nums){
    let arr=[]
    for (let i=0; i<nums.length;i++){
        if (even(nums[i])===true){
            arr.push(nums[i])
        }
    }
    return arr
}
console.log(fil(items))