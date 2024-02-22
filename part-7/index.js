// .reduce() = reduce the elements of an array 
//             to a single value

const prices = [5,30,10,25,15,20];

const sumPrices = prices.reduce(sum);
console.log(`your total Rp.${sumPrices.toFixed(3)}`)

function sum(accumulator, elements){
    return accumulator + elements;
}

const grades = [75, 50, 80, 65, 95];
const maximum = grades.reduce(getMax);

console.log(maximum)

const minimum = grades.reduce((accumulator, elements) => {
    return Math.min(accumulator, elements);
})
function getMax(accumulator ,elements){
    return Math.max(accumulator ,elements);
}

console.log(minimum);

const myArray = [
    {
        nama: "iqbal",
        nilai: [5,10]
    },
    {
        nama : "Fachmi",
        nilai: [9,10]
    },
    {
        nama: "Ramadhan",
        nilai: [8,7]
    }];

const initialValue = ["semua nilai"];

const reduces = myArray.reduce((accumulator, elements) => {
                                return [...accumulator, ...elements.nilai]
}, initialValue);

console.log(reduces);

/*-----------------------------------function expressions------------------------------------------*/
//  function declaration = define a reusable block of code 
//                         that performs a specifict taks.
const numbers = [1,2,3,4,5,6];
const num = numbers.map(number);

console.log(num);
function number(elements){
    return elements;
}

//  function expressions = a way to define function as 
//                          value or variables

//  1. callback in asynchronous operation
//  2. higher-order functions
//  3. clousures
//  4. event listeners

const squers = numbers.map(function(elements){
    return Math.pow(elements, 2);
});
const cubes = numbers.map(function(elements){
    return Math.pow(elements, 3);
})
setTimeout(function(){
    console.log("hello");
}, 5000);

console.log(cubes);

/*----------------------------------arrow function------------------------------------------*/
//  arrow function = a concise way to write function expressions 
//                  good for simple functions that you use only once
//                  (parameters) => some code

const hello = function(){
    console.log("hello, how are you!");
}
const greet = (nama) => {console.log(`Hello ${nama}`)
                         console.log("what's up!")}
hello();
greet("fachmi");


/*----------------------------------Object------------------------------------------*/
// objeck = a collection of related properties and/or methods 
//          can represent real world objects (people, products, places)
//          object = {key : value,
//                     function()}

const person1 = {
        firstName: "fachmi",
        lastName: "Ramadhan",
        age: 30,
        isEmployed: true,
        sayHello: function(){console.log(`Hi, i am Fachmi Ramadhan`)},

}
const person2 = {
    firstName: "dodon",
    lastName: "supradi",
    age: 30,
    isEmployed: true,
    sayHello: () => {console.log(`Hi, i am Dodon Supradi`)},
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();


console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();
