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

/*-----------------------------------DOM Navigation------------------------------------------*/

// DOM Navigation = the process of navigation through the structure 
//                  of an HTML document using javascript

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementsSibling
// .parentElement
// .children

// -------------- .firstElementChild ---------------
// const firsElements = document.querySelectorAll("ul");
// firsElements.forEach(firstElemen => {
//     const ulElement = firstElemen.firstElementChild;
//     ulElement.style.backgroundColor = "yellow";
// }) 

// -------------- .lastElementChild ---------------
// const lastElements = document.querySelectorAll("ul");
// lastElements.forEach(lastElemen => {
//     const ulElement = lastElemen.lastElementChild;
//     ulElement.style.backgroundColor = "yellow";
// }) 

// -------------- .nextElementSibling ---------------
// const element = document.getElementById("Vegetable");
// const nextElement = element.nextElementSibling;
// nextElement.style.backgroundColor = "yellow";

// -------------- .previousElementSibling ---------------
// const element = document.getElementById("Orange");
// const previousElement = element.previousElementSibling;
// previousElement.style.backgroundColor = "yellow";

// -------------- .parentElement ---------------
// const element = document.getElementById("Onions");
// const parentElement = element.parentElement;
// parentElement.style.backgroundColor = "yellow";

// -------------- .children ---------------
// const element = document.getElementById("fruits");
// const childrenElement = element.children;
// childrenElement[1].style.backgroundColor = "yellow";
