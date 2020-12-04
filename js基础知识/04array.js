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
//O(n);
 function cal1(str){
     let newStr = Math.abs(str).toString().split("").reverse().join("");
     if(str < 0){
         return newStr < Math.pow(2,31) ? -newStr : 0;
     }else{
        return newStr < Math.pow(2,31) ? +newStr : 0;
     }
 }
//O(n);
 function cal2(str){
     let number = Math.abs(str);
     let record = 0;
     while(number>0){
         record = record*10 + number%10;
         number = Math.floor(number/10);
     };
     return record;
 }