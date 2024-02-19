// if statement = if a conditional is true, exucute some code
//                  if not, do something else

const myInput = document.getElementById("myInput");
const myButton = document.getElementById("myButton");
const myResult = document.getElementById('myResult');
let age;
let hasLicense = true;
let time = 12;
let isStudent = true; 

myButton.onclick = function(){
    age = myInput.value;
    if(age >= 100){
        myResult.textContent = "you are Too OLD to enter this site";
    }else if(age == 0){
        myResult.textContent = "you can't enter, you were just born";
    } else if(age >= 18){
        myResult.textContent = "you are old enough to enter this site";
    }else{
        myResult.textContent = "you must be 18+ to enter this site";
    }
}


// if(age >= 18){
//     console.log("you are enough to enter this site");
// }else if(age < 0){
//     console.log("your age can't below 0")
// }
// else{
//     console.log("you must be 18+ to enter this site");
// }

// if(time < 12){
//     console.log("good morning")
// }else{
//     console.log("good afternoon")
// }

// if(isStudent){
//     console.log("you are a student!");
// }else{
//     console.log("you are not a student!");
// }

// if(age >= 16){
//     console.log("you are ald enough to drive");
//     if(hasLicense){
//        console.log("you have your license!"); 
//     }else{
//         console.log("you don't have  your license yet!");
//     }
// }else{
//     console.log("you must be 16+ to have a license");
// }

