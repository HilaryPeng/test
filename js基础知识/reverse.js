/**
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
    示例 1:

    输入: 123
    输出: 321
     示例 2:

    输入: -123
    输出: -321
    示例 3:

    输入: 120
    输出: 21
    注意:

    假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
 */
/**
 * method1 转为字符串反转 时间复杂度 O(n);
 */
function stringReverse(number){
    let newNumber = Math.abs(number).toString().split("").reverse().join("");
    if(number < 0){
        return newNumber < Math.pow(2,31) ? -newNumber : 0
    }else{
        return newNumber < Math.pow(2,31) ? +newNumber : 0
    }
}
/**
 * 取余数法 每次取余数然后记录下来 就是其倒序结果 o(n);
 */
function method2(number){
    let absNumber = Math.abs(number);
    let recordStr = 0;
    while(absNumber > 0){
       recordStr = absNumber % 10 + recordStr * 10;
       absNumber = Math.floor(absNumber / 10);
    };
    if(number < 0){
        return recordStr < Math.pow(2,31) ? -recordStr : 0
    }else{
        return recordStr < Math.pow(2,31) ? recordStr : 0
    }
}