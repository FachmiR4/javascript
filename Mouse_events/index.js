// eventListerner = listen for spesific events to create intractive web pages
//                  events: click, mouseover, mouseout
//                  .addEventListener(event, callback);

// const myBox = document.getElementById("myBox");
// const myButton = document.getElementById("myButton");
// let clickActive = false;

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

// myButton.addEventListener("mouseover", () => {
//     if(!clickActive){
//         myBox.style.backgroundColor = "yellow";
//         myBox.textContent = "Don't do it! 😢";
//         clickActive = false;
//     }
// })
// myButton.addEventListener("mouseout", () => {
//     if(!clickActive){
//         myBox.style.backgroundColor = "lightgreen";
//         myBox.textContent = "Click Me 😄";
//         clickActive = false;
//     }
// })
// myButton.addEventListener("click", () => {
//     if(!clickActive){
//         myBox.style.backgroundColor = "tomato";
//         myBox.textContent = "OUCH! 😒";
//         clickActive = true;
//     }
//     else if(clickActive){
//         myBox.style.backgroundColor = "lightgreen";
//         myBox.textContent = "Click Me 😄";
//         clickActive = false;
//     }
// });


/*-----------------------------------key Events------------------------------------------*/
//  events: keydown, keyup. keypress

const myBox = document.getElementById("myBox");
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", events => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "🤨";
})
document.addEventListener("keyup", events => {
    myBox.style.backgroundColor = "lightblue";
    myBox.textContent = "😄";
    console.log(events.key)
})

document.addEventListener('keydown', events => {
        if(events.key.startsWith("Arrow")){
            events.preventDefault()
            switch(events.key){
                case "ArrowUp":
                    y -= moveAmount;
                    break;
                case "ArrowDown":
                    y += moveAmount;
                    break;
                case "ArrowLeft":
                    x -= moveAmount;
                    break;
                case "ArrowRight":
                    x += moveAmount;
                    break;
            }
        }
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
})