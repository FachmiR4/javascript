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

/*-----------------------------------arrow function------------------------------------------*/
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
