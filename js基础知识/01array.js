/**
 * let num = [2,7,11,15], target = 9;
 * num[0]+num[1] = 9;
 * return [0,1]
 * 
 * num[0] = 9 - num[1]
 */

function sum(num, target){ 2
    let hash = new Map();
    for(let i = 0; i<num.length ;  i++ ) {
        if(hash.has(num[i])){
            return [hash.get(v), i]
        }
        hash.set(target-num[i], i);
    }
}
console.log(sum([1,2,3,4,5,6],9))



























// //时间复杂度 o(n的平方)
// function cal(array,target) {
//     for (let i= 0; i< array.length; i++){
//         for(let j=i+1; j<array.length; j++){
//             if(array[i] + array[j] === target){
//                 return [i,j];
//             }
//         }
//     }
//     return [];
// }
// //map 键值对。
// function another(array,target){
//     let map = new Map;
//     for(let i = 0; i< array.length; i++){
//         if(map.has(array[i])){
//             return [i, map.get(array[i])];
//         }
//         map.set(target - array[i], i)
//     }
// }
// console.log(another([2,7,11,15], 22));