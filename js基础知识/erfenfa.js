/**
 * 二分法的应用
 * [1,3,4,5,7,30,45,87,101,180,7676,43534,7674546]
 * 找出7的下标
 */
let array = [1,3,4,5,7,30,45,87,101,180,7676,43534,7674546]

function middleSearch(array, y , n = 0){
    let middleIndex = Math.floor(array.length/2);
    if(array[middleIndex] > y){
        n++ ;
        return  middleSearch(array.splice(0, middleIndex), y, n);
    }
    if(array[middleIndex] < y){
        n++;
        return  middleSearch(array.splice(middleIndex, array.length), y, n);
    }
    if(array[middleIndex] === y){
        return [middleIndex, n]
    }
}
let a = middleSearch(array, 7, 0)
console.log(a);
2*2+1 - 1 
