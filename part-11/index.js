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