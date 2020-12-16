/**
 * 冒泡排序 和相邻元素比较 交换位置
 * O(n*n)
 */

let array = [1,3435,546,67,34,53,45,59,-1,4];
function bubbleSort(array){
    for(let i = 0; i< array.length; i++){
        for(let j = 0; j<array.length-1-i; j++){
            if(array[j] > array[j+1]){
                let temp = array[j+1];
                array[j+1] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}
console.log(bubbleSort(array), 'O(n*n)');

/**
 * 选择排序
 * 每次都选出最小值 然后交换位置即可。。。
 */
function selectionSort(array){
    let temporay;
    for(let i = 0; i< array.length; i++){
        minIndex = i;
        for(let j = i+1; j< array.length; j++){
            if(array[i] > array[j]){
                minIndex = j;
            }
        }
        temporay = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temporay;

    }
    return array;
}
console.log(selectionSort(array),'O(n*n)')

/**
 * 插入排序  选择一个元素 然后进行插入即可
 */

 /**
  * 归并排序
  */
 function mergeSort(arr){
     var len = arr.length;
     if(len < 2){
         return arr;
     }
     var middle = Math.floor(len/2);
     var left = arr.slice(0, middle);
     var right = arr.slice(middle, len);
     return merge(mergeSort(left), mergeSort(right));
 }
 function merge(left, right){
     var result = [];
     while(left.length && right.length){
         if(left[0]<= right[0]){
             result.push(left.shift());
         }else{
             result.push(right.shift());
         }
     }
    while (left.length)
        result.push(left.shift());
    while (right.length)
        result.push(right.shift());

    return result;
 }

 console.log(mergeSort(array), "O(n* logn)")

 /** 快排 
  * 
  * 
 */

function quickSort(arr,left, right){
    var len = arr.length,partitionIndex, left = typeof left != 'number' ? 0 : left, right = typeof right != 'number' ? len - 1 : right;
    if(left < right){
        partitionIndex = partition(arr,left, right);
        quickSort(arr, left, partitionIndex-1);
        quickSort(arr, partitionIndex+1, right);
    }
    return arr;
}
function partition(arr,left, right){
    var pivot = left,
    index = pivot+1;
    for(var i = 0; i<= right+1 ; i++){
        if(arr[i] < arr[pivot]){
            swap(arr, i, index);
            index++;
        }
    }
    swap(arr, pivot, index - 1);
    return index-1;
}
function swap(arr,i ,j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function quicksort(array){
    if(array.length < 2){
        return array;
    }
    // 选择基准值
    let pivotIndex = Math.floor(array.length / 2);
    let pivot  = array[pivotIndex];
    let left = [], right = [];
    for(let i = 0; i< array.length ; i++){
        if(array[i] < pivot){
            left.push(array[i])
        }else{
            right.push(array[i])
        }
    }
    return quicksort(left).concat(quicksort(right));
}
console.log(quicksort(array));