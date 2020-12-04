/**
 * let num = [2,7,11,15], target = 9;
 * num[0]+num[1] = 9;
 * return [0,1]
 * 
 * num[0] = 9 - num[1]
 */
//o(n2);
function cal(num, target){
    if(num.length === 0){
        return ;
    }
    for (let i = 0; i<num.length; i++) {
        for(let j = i+1; j<num.length; j++){
            if(num[i] + num[j] === target) {
                return [i, j]
            }
        }
    }
}
//Mpa.has("key"),get value  Map.set(key, value); key [i],value[target - num[i]]; O(n);
function cal2(num, target){
    if(num.length === 0) {
        return ;
    }
    let temporary = new Map();
    for(let i = 0; i<num.length; i++){
        if(temporary.has(num[i])){
            return [temporary.get(num[i]), i];
        }
        temporary.set(target - num[i], i);
    }
}