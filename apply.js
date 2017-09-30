var myObj = {
  num: 1
}

var addToThis = function (a, b, c) {
  return this.num + a + b + c;
}

var myArray = [1, 3, 9];

// apply "this" parameter to an object and use arrays for other arguments
// apply --- combine all args into an array
console.log(addToThis.apply(myObj, myArray));
