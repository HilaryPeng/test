/**
 * 排序
 * 选定一个定值。右侧进行求解。
 */
const nums = [8,5,3,9,12,-9,8,-9,13,-10,-14,-13,5,-15,-4,2,8,-11,-6,12,9,-15,13,11,13,13,6,-12,-15,-4,-6,0,-14,5,-14,5,3,2,4,2,7,5,4,-10,-3,7,7,-9,4,-14,10,-2,-13,8,-6,7,-1,7,11,-9,-12,-10,6,12,10,7,2,-9,-6,13,8,9,3,-11,14,-14,11,-2,14,0,-1,1,6,-7,-5,7,-14,9,0,4,7,-5,1,-2,14,-3,12,-6,-5,14,-8,-12,0,3,-8,-1];
var threeSum = function(nums){
    let res = [];
    nums.sort((a, b) => a - b);
    if(nums.length < 3) {
        return []
    }
    for(let i = 0; i<nums.length-2; i++){
        let x, y, z; // 都是下标
        x = i;
        y = i+1;
        z = nums.length-1;
        if(i > 0 && nums[i] == nums[i-1]) continue;
        if(nums[i]>0){break}
        while(y < z){
            if(nums[x] + nums[y] + nums[z] === 0){
               res.push([nums[x], nums[y], nums[z]]);
               while (y<z && nums[y] == nums[y+1]) y++; //去重 
               while (y<z && nums[z] == nums[z+1]) z--; //去重
               z--;
               y++;
               continue;    
            }
            if(nums[x] + nums[y] + nums[z] > 0){
                z--;
                continue;
            }
            if(nums[x] + nums[y] + nums[z] < 0){
                y++;
                continue;
            }
        }
    }
    return res;
}

function removeRepeat(array){
    if(array.length === 0){
        return []
    }
    let newArray = [array[0]];
    array.forEach(item => {
        let isTrue = true;
        newArray.forEach(item2 => {
            if(item.toString() === item2.toString()){
                isTrue = false;
            }
        })
        if(isTrue){
            newArray.push(item);
        }
    });
    return newArray;
}
console.log(threeSum(nums));