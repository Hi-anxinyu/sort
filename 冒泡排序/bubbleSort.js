/*
 * @Author: Hi.yu
 * @Date: 2021-12-20 20:50:34
 * @Last Modified by: Hi, This is My file
 * @Last Modified time: 2021-12-20 22:37:08
 */
// 冒泡排序
/**
 *   冒泡排序是一种简单的计算机排序方法，它走访数组中的元素，依此比较相邻的两个元素，
 * 把顺序打乱的数组元素进行排序，比如(数字的大小,或者是英文字母的顺序A-Z)，如果两个
 * 元素的顺序是不对的那么就把两个元素进行交换，直到顺序正确。
 *    之所以叫冒泡排序是因为需要进行交换的元素会慢慢浮到数组的顶端，就像是碳酸饮料中
 * 的二氧化碳的气泡一样最终回浮到水平面一样。
 */

//数字排序
const arr = [92, 1, 6, 22, 76, 17, 203, 50, 35, 61];

function bubbleSort(arr) {
  //len为数组长度,控制比较轮数。
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    //里层循环从i+1开始，arr[i]只需要和剩下的len-i个元素比较；
    for (let j = 1; j < len - i; j++) {
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort(arr)); //[1, 6, 17, 22, 35, 50, 61, 76, 92, 203];

// 改进版的冒泡排序
const arr1 = [92, 1, 6, 22, 76, 17, 203, 50, 35, 61];

function sBubbleSort(arr1) {
  let temp = null,
    flag = 1;
  const len = arr1.length;
  for (let i = 0; i <= len - 1 && flag === 1; i++) {
    flag = 0;
    for (let j = 0; j < len - i; j++) {
      if (arr1[j] > arr1[j + 1]) {
        temp = arr1[j + 1];
        arr1[j + 1] = arr1[j];
        arr1[j] = temp;
        flag = 1;
      }
    }
  }
  return arr1;
}

console.log(sBubbleSort(arr1));
