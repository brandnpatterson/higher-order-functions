var num1 = [[1]];
var num2 = [2, [3]];

var nums = num1.concat(num2);

console.log(nums);

num1[0].push(4);

console.log(nums);
