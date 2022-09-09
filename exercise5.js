/*
    5. Write a simple JavaScript program to join all elements of the following array into a string. Go to the editor
    Sample array : myColor = ["Red", "Green", "White", "Black"];
    Expected Output :
    "Red,Green,White,Black"
    "Red+Green+White+Black"
*/

const toString = (arr, symbol) => {
  if (!Array.isArray(arr)) return false;

  return arr.join(symbol);
};

console.log(toString(["Red", "Green", "White", "Black"], "+"));
