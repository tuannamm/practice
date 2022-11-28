// Kiểm tra số tăng dần theo khoảng cách cho trước

const isIncreasingNumberByDistance = (number, distance) => {
  if (
    typeof number !== "number" ||
    typeof distance !== "number" ||
    number < 10 ||
    distance < 0
  )
    return false;

  let newStringArray = number.toString().split("");
  let newStringArrayLength = newStringArray.length;

  for (let i = 0; i < newStringArrayLength; i++) {
    if (
      Number(newStringArray[i]) < Number(newStringArray[i + 1]) &&
      Number(newStringArray[i + 1]) - Number(newStringArray[i]) === distance
    ) {
      return number;
    }

    return false;
  }
};

console.log(isIncreasingNumberByDistance(123456789, 2));
