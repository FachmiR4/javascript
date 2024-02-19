// ternary operator = a shortcut to if{} and else{} statement
//                    help to assign a variable based on a coditional
//                    conditional ? codeIfTrue : codeIfElse

let age = 23; 
let massage = age >= 20 ? "you are an dult" : "you are a minor";

let time = 16;
let greeting = time < 12 ? "Good Morning!" : "Good afternoon";

let isStudent = true;
let pesan = isStudent ? "you are a student" : "you are not student";

let purchaseAmount = 99;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`your total id ${purchaseAmount - purchaseAmount * (discount/100)}`)
