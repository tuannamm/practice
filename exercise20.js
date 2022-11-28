// Kiểm tra số nguyên tố

const isPrime = (number) => {
  if (typeof number !== "number" && number < 2) return false;

  if (number % 2 === 0) return false;

  for (let i = 3; i < number - 1; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }

  return number;
};

console.log(isPrime(10));
