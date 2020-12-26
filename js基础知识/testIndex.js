// 实现一个 `calc` 方法，可以将输入的数拆解为尽可能多的乘数，所有数相乘等于输入数。

/**
 * @param {number} n 乘积
 * @return {Array} 拆解后的乘数
 */
function calc(n) {
    let array = [];
    let i = 2;
    while (true) {
        if (n === i) {
            array.push(i);
            break
        }
        if (n % i === 0) { //没有余数
            n = n / i;
            array.push(i);
            i = 2;
        } else {
            i++;
        }
    }
    return array;
}

console.log(calc(2));
// [2]

console.log(calc(8));
// [2, 2, 2]

console.log(calc(24));
// [2, 2, 2, 3]

console.log(calc(30));
// [2, 3, 5]