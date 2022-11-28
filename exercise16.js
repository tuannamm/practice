// Promise.reject("xxxxx")
//   .then((n) => n * 2)
//   .then((n) => Promise.resolve(n * 2))
//   .then((n) => {
//     const finalNumber = n + 10;
//     console.log(finalNumber);
//     return finalNumber;
//   })
//   .catch((error) => console.log(error));

// a = new Promise()
// await a; => then || catch

const test = async (i) => {
  try {
    let a = await (2 / 0);
    let b = await (a * 2);
    let c = await (b + 10);
    console.log(c);
  } catch (error) {
    console.log(error);
  }
};
test(1);
