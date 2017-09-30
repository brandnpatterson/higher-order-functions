var myObj = {
  num: 1
}

var addToThis = function (a, b, c) {
  return this.num + a + b + c;
}

// call an object to use the "this" parameter on
// call --- list all arguments including myObj
console.log(addToThis.call(myObj, 1, 3, 9));
