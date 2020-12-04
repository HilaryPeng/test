/**
 * let num = [2,7,11,15], target = 9;
 * num[0]+num[1] = 9;
 * return [0,1]
 * 
 * num[0] = 9 - num[1]
 */
/**
 * method 1 o(n)的平方的时间复杂度。因为循环嵌套循环 成2的指数倍复杂。
 * @param {*} num 
 * @param {*} target 
 */
function cal(num,target){
    for(let i = 0; i<num.length ;i++){
        for(let j = i+1 ;j<num.length ; j++ ){
            if(num[i]+num[j] === target){
                return [i,j]
            }
        }
    }
    return []
}

/**
 * method2 时间复杂度 o(n)
 */
function cal2(num, target){
    let map = new Map();
    for(let i = 0; i<num.length; i++){
        if(map.has(num[i])){
            return [i, map.get(num[i])];
        }
        map.set(target - num[i],i);
    }
    return []
}
