/* 
    Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.
    Note that elements beyond the length of the original array are not written. 
    Do the above modifications to the input array in place and do not return anything.

    Input: arr = [1,0,2,3,0,4,5,0]
    Output: [1,0,0,2,3,0,0,4]
    Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
*/

const duplicateZero = (arr) => {
  if (!Array.isArray(arr)) return false;

  let newArr = [];

  arr.forEach((e) => {
    newArr.push(e);
    if (e === 0) newArr.push(0);
    if (arr.length < newArr.length) {
      newArr.splice(newArr.length - 1, newArr.length - arr.length);
    }
  });

  return newArr;
};

console.log(duplicateZero([1, 0, 2, 3, 0, 4, 5, 0]));
