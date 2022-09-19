/*  Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. 
For example if you accept 025468 the output should be 0-254-6-8. Go to the editor */

function insertDash(num) {
  let newString = num.toString();

  let stringLength = newString.length;

  for (let i = 0; i < stringLength; i++) {
    if (newString[i] % 2 === 0 && newString[i + 1] % 2 === 0) {
      newString = newString.slice(0, i + 1) + "-" + newString.slice(i + 1);
    }
  }
}

console.log(insertDash(25468));
