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

// forEach() = metrhod use to iterate over the element
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
