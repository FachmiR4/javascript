console.log('hello'); 
// window.alert("ini sebuah peringatan");

document.getElementById('myH').textContent = "hello";
document.getElementById('myP').textContent = "saya suka belajar programing";

/*--------------------------------variable---------------------------------------------- */

// variable = a countainer that a value. 
//              behaves as if it was the value it contains.

// 1. declaration  let x;
// 2. assignment x = 100;

let age1 = 25; // declaration & value
let price = 10.23;  // declaration & value
let nama; // delcaration
nama = "fahmi ramadhan"; // value
let forSale = true; // boolean

// output in terminal
// console.log(nama); 
// console.log(typeof forSale);
// console.log(typeof nama);
// console.log(typeof age1);
// console.log(`your age is ${age} years old`);
// console.log(`the price is $${price}`);

let fullNama = "fachmi ramadhan";
let age2 = 25;
let isStudent = false;

document.getElementById('myNama').textContent = `your name is ${fullNama}`;
document.getElementById('myAge').textContent = `you are ${age2} years old`;
document.getElementById('Student').textContent = `Enrolled : ${isStudent}`;

/*--------------------------------Arithmetic----------------------------------------------*/

// arithmetic operator = (value, variable, atc)
//                      operators (+ - * /)
//                      ex. 11 = x + 5;



let valueStudens = 30;

valueStudens = valueStudens + 2;
valueStudens = valueStudens - 3;
valueStudens = valueStudens * 2;
valueStudens = valueStudens ** 2;
let extraValue = valueStudens % 2;
valueStudens /= 2;
valueStudens **= 3;

valueStudens++;
valueStudens--;
--valueStudens;
++valueStudens;

/*
  operator precedence
  1. paranthesis ()
  2. exponents
  3. multplication & divition & modulo
  4. addtion & subtraction  
*/

let pratice = 12 + 2 % (3 - 1);




