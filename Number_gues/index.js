// NUMBER GUESSING GAME

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random()*(maxNum-minNum+1)) + minNum;

let attemps = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`guess number between ${minNum} - ${maxNum}:`);
    guess = Number(guess);
    if(isNaN(guess)){
        window.alert("please enter a valid number!");
    }else if(guess < minNum || guess > maxNum){
        window.alert("please enter a valid number!");
    }else{
        attemps++;
        if(guess < answer){
            window.alert("TOO LOW! TRY AGAIN!");
        }else if(guess > answer){
            window.alert("TOO HEIGH! TRY AGAIN!");
        }else{
            window.alert(`correct! the answer was ${answer}. it took you ${attemps} attemps`);
            running = false;
        }
    }
    
}