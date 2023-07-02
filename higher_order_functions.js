function squareList(arr) {
  return arr
    .filter(num => Number.isInteger(num) && num > 0)
    .map(num => num * num);
}

const realNumbers = [-3, 4.8, 5, 3, -3.2];
const squarePositiveIntegers = squareList(realNumbers);
console.log(squarePositiveIntegers);
