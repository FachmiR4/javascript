// eventListerner = listen for spesific events to create intractive web pages
//                  events: click, mouseover, mouseout
//                  .addEventListener(event, callback);

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");
let clickActive = false;

// myBox.addEventListener("click", event => {
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "OUCH! 😒";
// });
// myBox.addEventListener("mouseover", event => {
//     event.target.style.backgroundColor = "yellow";
//     event.target.textContent = "Don't do it! 😢";
// })
// myBox.addEventListener("mouseout", event => {
//     event.target.style.backgroundColor = "lightgreen";
//     event.target.textContent = "Click Me 😄";
// })

myButton.addEventListener("mouseover", () => {
    if(!clickActive){
        myBox.style.backgroundColor = "yellow";
        myBox.textContent = "Don't do it! 😢";
        clickActive = false;
    }
})
myButton.addEventListener("mouseout", () => {
    if(!clickActive){
        myBox.style.backgroundColor = "lightgreen";
        myBox.textContent = "Click Me 😄";
        clickActive = false;
    }
})
myButton.addEventListener("click", () => {
    if(!clickActive){
        myBox.style.backgroundColor = "tomato";
        myBox.textContent = "OUCH! 😒";
        clickActive = true;
    }
    else if(clickActive){
        myBox.style.backgroundColor = "lightgreen";
        myBox.textContent = "Click Me 😄";
        clickActive = false;
    }
});
