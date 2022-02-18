"use strict"
function solveEquation(a, b, c) {
  if (a==0) return alert("Ошибка, а=0 - недопустимое значение!");

  let arr = [];
  const D = b*b-4*a*c;
  let x1, x2;
  arr[0] = x1;
  arr[1] = x2;
  if(D>0) {
    x1 = (-b+Math.sqrt(D))/(2*a);
    x2 = (-b-Math.sqrt(D))/(2*a); 
    return arr;

  } else if(D==0) {
    x1 = -b/(2+a);
    return arr;
    
  } else if(D<0) return "Корней нет"
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
