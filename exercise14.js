/*
  Write a JavaScript program to sort the items of an array. Go to the editor
  Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
  Sample Output : -4,-3,1,2,3,5,6,7,8
*/

function sortArray(arr) {
  if (!Array.isArray(arr)) return false;

  let newArr = [];
  let arrLength = arr.length;

  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        newArr.push(arr[j]);
      }
    }
  }

  return newArr;
}

console.log(sortArray([3, 8, 7, 6, 5, -4, 3, 2, 1]));
