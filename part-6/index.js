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