// closure = A function define inside of another function,
//           the inner function has acces to the variables
//           and scope of the outer function.
//           Allow for private variables and state maintenance
//           used frequently in JS fremeworks: react, vue, Angular

function createGame(){
    let score = 0;

    function increaseScore(point){
        score += point;
        console.log(`+${point}pts`);
    }
    function decreaseScore(point){
        score -= point;
        console.log(`-${point}pts`);
    }
    function getScore(){
        return score;
    }

    return {increaseScore, decreaseScore, getScore};
}

const game = createGame();

game.increaseScore(6);
game.decreaseScore(2);
game.increaseScore(7);
console.log(`The final score is ${game.getScore()}pts`);

/*-----------------------------------setTimeout------------------------------------------*/
// setTimeout() = function in javascript that allows you to schedule 
//                the execution of function after an amount of time (millisecond)
//                Times are approximate (varies based on the workload of the javascript runtime env.)

//                setTimeout(callback, delay);
//                clearTimeout(timeoutId) = can cancel a timeout before it triggers

// const timeoutId = setTimeout(() => window.alert("hello"), 7000);

// clearTimeout(timeoutId);

let timeoutId;

function startTimer(){
    timeoutId = setTimeout(() => window.alert("heloo, fachmi"), 3000);
    console.log("Started");
}
function clearTimer(){
    clearTimeout(timeoutId);
    console.log("cleared");
}

/*-----------------------------------ES6 Module------------------------------------------*/
// ES6 Module = an external file that contains reusable code
//              that can be imported into other javascript files.
//              Write reusable code for many different apps.
//              Can contain variable, classes, function, ... and more
//              introduced as part of ECMAScript 2015 update

import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';


console.log(PI);
const circumference = getCircumference(10);
const area = getArea(15);
const volume = getVolume(11);

console.log(`${circumference.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm^2`);
console.log(`${volume.toFixed(2)}cm^3`);


/*-----------------------------------Asynchronous Code------------------------------------------*/
// synchronous = executes line by line consecutively in a sequential manner
//               code that waits for an operation to complete.

// synchronous = allows multiple oprations to be performed concurrently without waiting
//               dosen't block the execution flow and allows the program to continue
//               (I/O oprations, network request, fething data)
//               handled with: callback, promises, Async/Await

function func1(panggilan){
    setTimeout(() => {console.log("Taks 1");
    panggilan()}, 3000);
}
function func2(){
    console.log("Taks 2");
    console.log("Taks 3");
    console.log("Taks 4");
}

func1(func2);

/*-----------------------------------Error handling------------------------------------------*/
// error = an object that is created to reqresent a problem that accurs
//         accurs often with user input or establishing a connection

// try { } = Encloses code that might potentially cause an error
// catch { } = Catch and handle any thrown from try { }
// finally { } = (optional) Always execites. Used mostly for clean up
//              ex. close files, close connections, release resources


/* 
try{
    console.log(x);
    // NETWORK ERRORS
    // PROMISE REJECTION
    // SECURITY ERRORS
}
catch{
    console.error(error);
}

finally{
    // CLOSE FILE 
    // CLOSE CONNECTIONS
    // RELEASE RESOURCES
    console.log("This always executes");
}

*/

// try{
//     // const dividend = Number(window.prompt("Enter a dividend: "));
//     // const divisor = Number(window.prompt("Enter a divisor: "));
    
//     if(divisor === 0){
//         throw new Error("you can't divide by zero");
//     }
//     if(isNaN(dividend) || isNaN(divisor)){
//         throw new Error("Value must be a number")
//     }

//     const result = dividend / divisor;
//     console.log(result);
// }
// catch(error){
//     console.error(error);
// }

/*-----------------------------------DOM------------------------------------------*/

// DOM = DOCUMENT OBJECT MODEL
//       Object{} that represents the page you see in the web browser and 
//       provides you with an API to intract with it.
//       Web browser constructs the DOM when it loads an HTML document, 
//       and structures all the elements in a tree-like representation
//       Javascript can acces the DOM to dynamically
//       change the content, structure, and style of a web page.

// console.dir(document);
// document.title = "ini saya ganti"

const username = "fachmi ramadhan";
const welcomMsg = document.getElementById("welcome-msg");

welcomMsg.textContent += username === "" ? "Guys" : username;
