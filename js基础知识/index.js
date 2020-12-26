function half(array) {
    let initIndex = 0;
    let maxLength = array.length;
    let index = Math.floor(array.length / 2);
    //找第一个大于0的下标 
    while (true) {
        if (array[index] > 0 && array[index - 1] < 0) {
            break;
        }
        if (array[index] < 0 && array[index + 1] > 0) {
            index = index + 1;
            break;

        }
        if (array[index] > 0) {
            index = Math.floor((initIndex + maxLength) / 2);
            maxLength = index;
            //循环调用
        } else {
            index = Math.floor((initIndex + maxLength) / 2);
            initIndex = index;
        }
    }
    return index;
}
let array = [-9, -8, -7, -5, -4, -3, 0, 1, 2, 3, 4, 5, 6, 6, 9, 79, 102];
console.log(half(array));