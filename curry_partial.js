function add(x) {
  // Only change code below this line
  return function(y) {
    return function(z) {
      return x + y + z;
    };
  };
  // Only change code above this line
}

const result = add(10)(20)(30);
console.log(result);
