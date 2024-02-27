// NodeList = static collection of HTML elements by (id, class, elements)
//            can be created by using querySelectorAll()
//            Similar to an array, but no (map, filter, reduce)
//            NodeList won't update to automatically reflect changes 

// let myButton = document.querySelectorAll('.myButton');
// let clickActive = false;

// myButton.forEach( button => {
//     button.addEventListener("click", event => {
//         if(!clickActive){
//             event.target.style.backgroundColor = "hsl(118, 83%, 58%)";
//             clickActive = true;
//         }else{
//             event.target.style.backgroundColor = "hsl(191, 78%, 41%)";
//             clickActive = false;
//         }
//     })
// })

// ADD AN ELEMENT

// const newButton = document.createElement("button");
// newButton.textContent = "button 5";
// newButton.classList = "myButton";
// document.body.appendChild(newButton);

// myButton = document.querySelectorAll(".myButton");
// console.log(myButton);

// REMOVE AN ELEMENT

// myButton.forEach(button => {
//     button.addEventListener("click", event => {
//         event.target.remove();
//         myButton = document.querySelectorAll(".myButton");
//         console.log(myButton);
//     })
// })

/*-----------------------------------ClassList------------------------------------------*/
// ClassList = Element property in javascript used to intract
//             With an element's list of classes (Css classes)
//             Allows you to make reusable classes for many elements
//             across your webpage.

// add()
// remove()
// toggle(remove if present, add if not)
// replace(oldClass, newClass)
// contains()

// const myButton = document.getElementById("myButton");

// myButton.classList.add("hover");
// myButton.classList.remove("enabled");

// myButton.addEventListener("mouseover" , () => {
//     myButton.classList.toggle("hover");
// });
// myButton.addEventListener("mouseout", () => {
//     myButton.classList.toggle("hover")
// })

// myButton.classList.add('enabled');

// myButton.addEventListener("click", event => {
//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "😒";
//     }else{
//          event.target.classList.replace("enabled", "disabled")
//     }
// })

// const myButton = document.querySelectorAll(".myButton");

// myButton.forEach(button => {
//     button.classList.add("enabled");
//     console.log(button);
// });


// myButton.forEach(button => {
//     button.addEventListener("mouseover", event => {
//         event.target.classList.toggle("hover");
//     });
// })
// myButton.forEach(button => {
//     button.addEventListener("mouseout", event => {
//         event.target.classList.toggle("hover");
//     });
// })
// myButton.forEach(button => {
//     button.addEventListener("click", event => {
//        if(event.target.classList.contains("disabled")){
//             event.target.textContent = "❤️";
//        }else{
//         event.target.classList.replace("enabled","disabled");
//        }
//     });
// })


/*-----------------------------------ClassList------------------------------------------*/
// Calback Hell = Situation in javascript where callbacks
//                are nested within other callbacks to the 
//                degree  where the code is difficult to read.
//                old pattern to handle asynchronous functions. 
//                use promises + async/await to avoid Callback hell

function taks1(callback){
    setTimeout(() => {
        console.log("Taks 1 Complate!");
        callback();
    }, 3000);
}
function taks2(callback){
    setTimeout(() => {
        console.log("Taks 2 Complate!");
        callback();
    }, 1000);
}function taks3(callback){
    setTimeout(() => {
        console.log("Taks 3 Complate!");
        callback();
    }, 2000);
}function taks4(callback){
    setTimeout(() => {
        console.log("Taks 4 Complate!");
        callback();
    },1500);
}

taks1(() => {
    taks2(() => {
        taks3(() => {
            taks4(() => {
                console.log("All taks complate");
            });
        });
    });
});

// taks1();
// taks2();
// taks3();
// taks4();
// console.log("All taks complate!")

/*-----------------------------------ClassList------------------------------------------*/
// Promise = An object that manages asynchronous operation.
//           Wrap a Promise Object around {asynchronous code}
//           "i promise to return a value"
//           PENDING -> RESOLVED or REJECTED
//           new Promise((resolve or reject) => {asyncronous code})

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN 
// 3. TAKE OUT THE TRASH

function walkTheDog(){
   return new Promise((resolve, reject)=> {
        const walkDog = true;
        if(walkDog){
            setTimeout(() => {
                resolve("You walk the dog! 🐕");
            }, 3000);
        }else{
            reject("You Didn't walk teh dog");
        }
   });
}
function cleanTheKitchen(){
    return new Promise((resolve, reject)=> {
        const cleanKitchen = true;
        if(cleanKitchen){
            setTimeout(() => {
                resolve("You clean the kitchen! 🧹");
            }, 2000);
        }else{
            reject("You Didn't clean the kitchen");
        }
    });
}
function takeOutTheTrash(){
    return new Promise((resolve, reject)=> {
        const cleanKitchen = false;
        if(cleanKitchen){
            setTimeout(() => {
                resolve("You take out the trash! 🚮");
            }, 1000);
        }else{
            reject("You Didn't take out the trash");
        }
    });
}
 
walkTheDog().then(value => {console.log(value); return cleanTheKitchen()})
            .then(value => {console.log(value); return takeOutTheTrash()})
            .then(value => {console.log(value); console.log("All sucsess")})
            .catch(error => console.error(error));