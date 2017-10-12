// currying!

// const f = a => b => c => a + b + c;

const f = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    }
  }
}

const result = f(1)(2)(3);

console.log(result);
