/* 
    Given an array nums of integers, return how many of them contain an even number of digits.

*/

const findNumbers = (numberList) => {
  if (!Array.isArray(numberList)) return false;

  let total = 0;

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i].toString().length % 2 === 0) total += 1;
  }

  return total;
};

console.log(findNumbers([1, 22, 3, 42, 533333, 6]));
