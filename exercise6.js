/* 
    6. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. 
    For example if you accept 025468 the output should be 0-254-6-8. Go to the editor.
*/

const program = (number) => {
  if (typeof number !== "number") return false;

  let str = number.toString();

  for (let i = 0; i < str.length; i++) {
    let newStr = str;
    for (let j = i + 1; j <= i + 1; j++) {
      if (Number(str[j] % 2 === 0) && Number(str[i] % 2 === 0))
        console.log(str[i] + "-");
    }
  }
};

console.log(program(1234456777777));
