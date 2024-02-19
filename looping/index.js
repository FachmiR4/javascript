// while loop = repeat some code while some conditional is true

// let username = "";

// do{
//     username = window.prompt("enter your username: ");
// }while(username === "" || username === null)

// while(username === "" || username === null){
//     username = window.prompt("enter your username: ");
// }

// console.log(`Hello ${username}`);

let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt("enter your username: ");
    password = window.prompt("enter your password: ");
    if(username === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("you are logged in!");
    }else{
        console.log("invalid credentials! please try again");
    }
}