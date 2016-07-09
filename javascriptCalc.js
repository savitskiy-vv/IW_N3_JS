/* JAVACRIPT ДЛЯ КАЛЬКУЛЯТОРА!!!*/

var firstDigit;
var operations;
var rezult = document.getElementById("result");

// Обработчики кнопок-цифр от 0 до 9 и "." (клацаешь мышкой по кнопке-цифре, она появляется в соответствующем окошке) НАЧАЛО
// Функция вывода на экран в окошке результата цифры соответствующей кнопке-цифре
function inputDigits(digit) {
   rezult.value = rezult.value + digit;
}
// Функции кликанья на соотвнтствующей кнопке-цифре о 0 до 9 и "." 
var digit7 = document.getElementById("btnSeven");
digit7.onclick = function () {
   inputDigits(7);
}
var digit8 = document.getElementById("btnEight");
digit8.onclick = function () {
   inputDigits(8);
}
var digit9 = document.getElementById("btnNine");
digit9.onclick = function () {
   inputDigits(9);
}
var digit4 = document.getElementById("btnFour");
digit4.onclick = function () {
   inputDigits(4);
}
var digit5 = document.getElementById("btnFive");
digit5.onclick = function () {
   inputDigits(5);
}
var digit6 = document.getElementById("btnSix");
digit6.onclick = function () {
   inputDigits(6);
}
var digit1 = document.getElementById("btnOne");
digit1.onclick = function () {
   inputDigits(1);
}
var digit2 = document.getElementById("btnTwo");
digit2.onclick = function () {
   inputDigits(2);
}
var digit3 = document.getElementById("btnThree");
digit3.onclick = function () {
   inputDigits(3);
}
var digit0 = document.getElementById("btnZero");
digit0.onclick = function () {
   inputDigits(0);
}
var digitPoint = document.getElementById("btnPoint");
digitPoint.onclick = function () {
   if (rezult.value.indexOf(".") === -1) {
      inputDigits(".")
   }
}
// Обработчики кнопок-цифр от 0 до 9 и "." КОНЕЦ

// Обработчик деления "/" НАЧАЛО
var btnDivide = document.getElementById("btnDivide");
btnDivide.onclick = function () {
   firstDigit = rezult.value;
   rezult.value = "";
   operations = "/";
}

// Обработчик умножения "*" НАЧАЛО
var btnMultiply = document.getElementById("btnMultiply");
btnMultiply.onclick = function () {
   firstDigit = rezult.value;
   rezult.value = "";
   operations = "*";
}

// Обработчик минуса "-" НАЧАЛО
var btnMin = document.getElementById("btnMin");
btnMin.onclick = function () {
   firstDigit = rezult.value;
   rezult.value = "";
   operations = "-";
}

// Обработчик плюса "+" НАЧАЛО
var btnPlus = document.getElementById("btnPlus");
btnPlus.onclick = function () {
   firstDigit = rezult.value;
   rezult.value = "";
   operations = "+";
}

// Обработчик плюс-минус "+/-" НАЧАЛО
var btnPlsMin = document.getElementById("btnPlsMin");
btnPlsMin.onclick = function () {
   rezult.value = rezult.value * -1;
}

// Обработчик равно "=" НАЧАЛО
/* Тут сделано обработчик 2 способами: через switch и через if else. Оба РАБОТАЮТ, причем одинаково. Коментю switch просто потому, что if else мне как-то понятнее.*/

/*var btnEquals = document.getElementById("btnEquals");
btnEquals.onclick = function () {
   switch (operations) {
      case "/":
         switch (true) {
            case rezult.value != 0:
               rezult.value = +firstDigit / +rezult.value;
               break;
            case rezult.value == 0:
               alert("На 0 делить нельзя!");
               break;
         };
         break;
      case "*":
         rezult.value = +firstDigit * +rezult.value;
         break;
      case "-":
         rezult.value = +firstDigit - +rezult.value;
         break;
      case "+":
         rezult.value = +firstDigit + +rezult.value;
         break;
   }
} */

var btnEquals = document.getElementById("btnEquals");
btnEquals.onclick = function () {
   if (operations == "/" && rezult.value != 0) {
      rezult.value = +firstDigit / +rezult.value;
   } else if (operations == "/" && rezult.value == 0){
      alert("На 0 делить нельзя!");
   } else if (operations == "*") {
      rezult.value = +firstDigit * +rezult.value;
   } else if (operations == "-") {
      rezult.value = +firstDigit - +rezult.value;
   } else if (operations == "+") {
      rezult.value = +firstDigit + +rezult.value;
   } 
}

// ОБЯЗАТЕЛЬНО спросить у Макса, как избавиться от неточностей (напр., 1,1 + 2,2 = 3,30000000000004)