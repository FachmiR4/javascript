// NodeList = static collection of HTML elements by (id, class, elements)
//            can be created by using querySelectorAll()
//            Similar to an array, but no (map, filter, reduce)
//            NodeList won't update to automatically reflect changes 

let myButton = document.querySelectorAll('.myButton');
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

myButton.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        myButton = document.querySelectorAll(".myButton");
        console.log(myButton);
    })
})