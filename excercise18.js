const isDecreasingNumber = (number) => {
  if (typeof number !== "number" && number < 10) return false;

  let newStringArray = number.toString().split("");
  let newStringArrayLength = newStringArray.length();

  for (let i = 0; i < newStringArrayLength; i++) {
    if (Number(newStringArray[i]) <= Number(newStringArray[i + 1])) {
      return `${number} is not decreasing number`;
    }
  }

  return number;
};
