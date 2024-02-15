// type conversion = change the datatype of a value to another
//                   (strings, numbers, booleans)

// let age = window.prompt("how old are you");
// age = Number(age);
// age+=1;

let x = "0";
let y = "saya";
let z = "saya";

x = Number(x);
y = String(y);
z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

/*------------------------constant------------------------------*/

// const = a variable that can't be changed

const PI = 3.14159; // variable constant harus mengunakan huruf besar
let radius;
let circumference;


// radius = window.prompt("enter the radius of circle");



document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + "cm";

}



