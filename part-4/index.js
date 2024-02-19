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

// // console.log(username);

// // -----------METHOD CHAINING---------------

// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

// console.log(username);


/*-----------------------------------Logical Operator------------------------------------------*/

// logical operator = used to combine or manipulate boolean value
//                     (true or false)

//                     AND = &&
//                     OR = ||
//                     NOT = !

const isSunny = true;

if(!isSunny){
    console.log("it is cloudy");
}
else{
    console.log("it is Not cloudy"); // output
}
