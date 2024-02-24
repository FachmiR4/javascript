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
