"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let x1 = 0;
  let x2 = 0;

  const d = b * b - 4 * a * c;

  if(d < 0) {
    return arr;
  } else if (d === 0) {
    x = -b / (2 * a);
    arr.push(x1);
  } else {
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    arr.push(x1);
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x2);
  }
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
