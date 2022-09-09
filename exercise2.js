/* 
    2. Write a JavaScript function to clone an array. Go to the editor
    Test Data :
    console.log(array_Clone([1, 2, 4, 0]));
    console.log(array_Clone([1, 2, [4, 0]]));
    [1, 2, 4, 0]
    [1, 2, [4, 0]]
*/

const cloneArray = (arr) => {
  if (!Array.isArray(arr)) return false;

  return [...arr];
};

console.log(cloneArray([1, 2, [4, 0]]));
