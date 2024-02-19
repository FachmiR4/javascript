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



/*------------------------------------For Loop---------------------------------------*/
// for loop = repeat some code a limited amount of times

// for(let i = 10; i > 0; i-=2){
//     console.log(i);
// }

for(let i = 0; i <= 20; i++){
    if(i == 13){
        continue;
    }else if(i == 17){
        break;
    }else{
        console.log(i);
    }
}