var num1 = window.prompt("Enter first number" + num1);
var num2 = window.prompt("Enter second number" + num2);
var count = 0;

console.log(num1 + "\n" + num2);

while (num1 != num2) {
  num1 = +num1 + sum(num1);
  num2 = +num2 + sum(num2);
  console.log(num1, num2);
  count++;
  if (count == 2e5) {
    break;
  }
}
if ((num1 = num2)) {
  num1 = +num1 + sum(num1);
  console.log(num1);
}

function sum(parameter) {
  let myFunc = (num) => Number(num);
  var num3 = Array.from(String(parameter), myFunc);
  sum1 = num3.reduce((partialSum, a) => partialSum + a, 0);
  return sum1;
}
