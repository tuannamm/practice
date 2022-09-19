/*  Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. 
For example if you accept 025468 the output should be 0-254-6-8. Go to the editor */

function insertDash(num) {
  let str = num.toString();
  let result = str[0];
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] % 2 === 0 && str[i] % 2 === 0) {
      result += "-" + str[i];
    } else {
      result += str[i];
    }
  }
  return result;
}

console.log(insertDash(25468));
