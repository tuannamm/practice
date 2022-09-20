/*  Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. 
For example if you accept 025468 the output should be 0-254-6-8. Go to the editor */

function insertDashes(number) {
  if (typeof number !== "number") {
    return "Please input a number";
  }

  let newNumber = number.toString();
  let numberLength = newNumber.length;

  for (let i = 0; i < numberLength; i++) {
    if (newNumber[i] % 2 === 0 && newNumber[i + 1] % 2 === 0) {
      newNumber = newNumber.slice(0, i + 1) + "-" + newNumber.slice(i + 1);
    }
  }

  return newNumber;
}

console.log(insertDashes(02546));
