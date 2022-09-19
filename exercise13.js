/* 
There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays. Go to the editor
Sample array :
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
Expected Output :
[4, 5, 8, 10, 12, 13]
*/

function sumArray(array1, array2) {
  let result = [];
  let maxLength = Math.max(array1.length, array2.length);
  for (let i = 0; i < maxLength; i++) {
    let sum = (array1[i] || 0) + (array2[i] || 0);
    result.push(sum);
  }
  return result;
}

console.log(sumArray([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]));
