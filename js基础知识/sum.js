/**
 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
注意：答案中不可以包含重复的三元组。
 * 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
 */
const nums = [-1, 0, 1, 2, -1, -4, -10, 10, -20, 20];
var threeSum = function(nums) {
    let recordArray = [];
    for(let i = 0; i<nums.length - 2;i++){
        for(let j = i+1; j<nums.length - 1; j++ ){
            for(let k = j+1; k< nums.length; k++){
                if(nums[i]+nums[j]+nums[k] === 0){
                    let sortArray = [nums[i],nums[j],nums[k]];
                    sortArray.sort();
                    recordArray.push(sortArray);
            }
        }
    }
}
    return removeRepeat(recordArray); // 需要去重处理。
};


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
let array = threeSum(nums);
console.log(array)