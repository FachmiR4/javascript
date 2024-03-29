// callback = a function that is passed as an argument
//            to another function.

//            used to handle asyncronous opertion:
//             1. Reading a file
//             2. Network requests
//             3. interacting with databases

//              "Hey, when you are done, call this next."

// hello(GoodBye);
// hello(Leave);

// function hello(callback){
//     console.log("Hello!");
//     callback();
// }
// function GoodBye(){
//     console.log("GoodBye!");
// }
// function Leave(){
//     console.log("Leave!");
// }

// sum(displayPage, 7, 2);

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}
function displayConsole(result){
    console.log(result);
}
function displayPage(result){
    document.getElementById("myH1").textContent = result;
}

/*-----------------------------------ForEach------------------------------------------*/

// forEach() = methods use to iterate over the element
//             of an array and apply a specified function (callback)
//             to each element

//             array.forEach(callback)
//             element, index, array are provided

let number = [1,2,3,4,5];

// number.forEach(squere); // callback with forEach
// number.forEach(display); // output display

function double(element, index, array){
    array[index] = element * 2;
}
function triple(element, index, array){
    array[index] = element * 3;
}
function squere(element, index, array){
    array[index] = Math.pow(element, 2);
}
function display(element){
    console.log(element);
}

let fruits = ["banana", "Coconat", "ORANGE", "apple"];

fruits.forEach(upperCase);
fruits.forEach(display1);

function lowerCase(element, index, array){
    array[index] = element.toLowerCase();
}
function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}
function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1); 
}
function display1(element){
    console.log(element)
}

/*-----------------------------------Map methods------------------------------------------*/

// .map() = accepts a callback and applies thet function 
//         to each element of an array, than return a new array

// const array = [1,2,3,4,5,6];
// const squeres = array.map(squers);
// const cubes = array.map(cubs);

// console.log(cubes);

// function squers(element){
//     return Math.pow(element,2);
// }
// function cubs(element){
//     return Math.pow(element,3);
// }

const dates = ["2024-02-01", "2024-05-30", "2024-11-27"];
const formatedDates = dates.map(formatDate);

console.log(formatedDates);

function formatDate(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}


/*-----------------------------------filter Array------------------------------------------*/
// .filter() = creates a new array by filtering 
//             out elements

// const num = [1,2,3,4,5,6];
// num.filter((element) =>{
//     console.log(element % 2 !== 0);
// });

// const evenNums = num.filter(isEven);
// const oddNums = num.filter(isOdd); 
// console.log(oddNums);

// function isEven(element){
//     return element % 2 === 0;
// }
// function isOdd(element){
//     return element % 2 !== 0;
// }

const age = [12,13,14,15,16,17,18,19,20,21,22,23,24,25];
const adults = age.filter(isAdult);
const childs = age.filter(isChild);

console.log(childs);

function isAdult(element){
    return element >= 18;
}
function isChild(element){
    return element < 18;
}

const words = ["apple", "orange", "banana", "kiwi",
                "pomegranate", "coconut"];

const shortWords = words.filter(getShortWord);
const logWords = words.filter(getLogWord);

console.log(shortWords);
console.log(logWords);

function getShortWord(element){
    return element.length <= 6;
}
function getLogWord(element){
    return element.length > 6;
}