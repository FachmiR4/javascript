//  Element selectors = Methods used to target and manipulate HTML elements
//                      they allow you to select one or multiple HTML elements
//                      from the DOM (Document Object Model)

// 1. document.getElementById()          // ELEMENT OR NULL
// 2. document.getElementsClassName()    // HTML COLLECTION
// 3. document.getElementsBytagName()    // HTML COLLECTION
// 4. document.querySelector()           // ELEMENT OR NULL
// 5. document.querySelectorALL()        // NODELIST

/*
// ----------- document.getElementById()-----------------
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = 'center';
console.log(myHeading);

// ----------- document.getElementByClassName()-----------------
const fruits = document.getElementsByClassName("fruits");
fruits[0].style.backgroundColor = "yellow";
for(let fruit of fruits){
    fruit.style.backgroundColor = "yellow";
}
Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "yellow";
})
console.log(fruits);

// ----------- document.getElementByTagName()-----------------
const h4Elements = document.getElementsByTagName('h4');
const liElements = document.getElementsByTagName("li")
for(let h4Element of h4Elements){
    h4Element.style.backgroundColor = "yellow";
}
for(let liElement of liElements){
    liElement.style.backgroundColor = "lightgreen";
}

// ----------- document.querySelector()-----------------
const queryElements = document.querySelector(".fruits");
const queryElements = document.querySelector("ol");
queryElements.style.backgroundColor = 'yellow';
console.log(queryElements);

// ----------- document.querySelectorALL()-----------------
const foods = document.querySelectorAll(".fruits");
const foods = document.querySelectorAll("li");
foods[2].style.backgroundColor = "yellow";
console.log(foods);
Array.from(foods).forEach(food => {
    food.style.backgroundColor = "yellow";
})

 */