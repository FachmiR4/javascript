// methods Chaining = Calling one method after another 
//                     in one continuous line of code.

// let username = window.prompt("enter your username:");

// ------------NO METHOD CHAINING--------------

// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = username.slice(1);
// extraChars = extraChars.toLowerCase();
// username = letter + extraChars;

// console.log(username);

// // -----------METHOD CHAINING---------------

// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

// console.log(username);


/*-----------------------------------Logical Operator------------------------------------------*/

// logical operator = used to combine or manipulate boolean value
//                     (true or false)

//                     AND = &&
//                     OR = ||
//                     NOT = !

// const isSunny = true;

// if(!isSunny){
//     console.log("it is cloudy");
// }
// else{
//     console.log("it is Not cloudy"); // output
// }

/*-----------------------------------strict equality------------------------------------------*/

//      = assignment operator
//     == comparasion operator (compare if value are equal)
//    === strict equality operator (compare if value & datatype are aqual)
//     != inequality operator
//    !== strict inequality operator

// const PI = 3.14;

// if(PI !== "3.14"){
//     console.log("that is not pi");
// }else{
//     console.log("that is pi");
// }

/*-----------------------------------Function------------------------------------------*/

// function = A section of reusable code.
//            Declare code once, used it whenever you want.
//            Call the function to execute that code.
//            function name_function(parameters){argument}

function add(x , y){
    return x + y;
}
function subtract(x, y){
    return x - y;
}
function multiply(x, y){
    return x * y;
}
function divide(x, y){
    return x / y;
}
function isEven(number){
    return number % 2 === 0 ? true : false;
}
function isValidEmail(email){
    if(email.includes("@")){
        return true;
    }else{
        return false;
    }
}
