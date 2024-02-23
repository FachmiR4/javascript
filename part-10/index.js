// nested objects = Object insede of other Object.
//                  Allow you to represent more complex data structures
//                  Child object is enclosed by a parent object

//                  person{Address{}, ContactInfo{}}
//                  shoppingCart{keyword{}, Mouse{}, Monitor{}}

const person = {
    fullName: "Fachmi Ramadhan",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyFish", "Cooking"],
    address: {
        street: "jl.cinere raya",
        city: "depok",
        Country: "Indonesia",
    },
}

// console.log(person); // output = semua object person
// console.log(person.address.street); // output = jl.cinere raya

for(const property in person.address){
    console.log(person.address[property]);
}

// output = jl.cinere raya, depok, Indonesia

class Person{
        constructor(name, age, ...address){
            this.name = name;
            this.age = age;
            this.address = new Address(...address);
        }
}
class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}


const person1 = new Person("fachmi ramadhan", 24, "Gg.h.Mumun",
                                                    "depok", 
                                                    "Indonesia");

console.log(person1.address.city); // output = Depok


/*-----------------------------------Array Of Objects------------------------------------------*/


const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banana", color: "yellow", calories: 105},
                {name: "coconut", color: "white", calories: 159},
                {name: "pineapple", color: "yellow", calories: 37}];

console.log(fruits[1].name) // output = orange

//-------forEach()---------

fruits.forEach(fruit => console.log(fruit.calories));

//-------map()---------

const fruitName = fruits.map(fruit => fruit.name);


//-------reduce()---------

const maxFruit = fruits.reduce((max, fruit) => 
                                fruit.calories > max.calories ?
                                fruit : max);

const minFruit = fruits.reduce((min, fruit) => 
                                fruit.calories < min.calories ?
                                fruit : min);
                                
// console.log(maxFruit);
// console.log(minFruit);


/*-----------------------------------Sortting------------------------------------------*/
// sort() = method use to sort element of an array in place.
//          Sorts elements as strings in lexicograpic order, not alphabetical
//          lexicographic = (alphabet + numbers + symbols) as strings

const animals = ["cat", "rabbit", "chiken", "pig", "fish"];
const number = [1, 10, 7, 2, 4, 3, 5, 6, 7, 9, 8];

number.sort((a, b) => b - a);
animals.sort();

// console.log(animals);
// console.log(number);

const people = [{name: "SpongeBob", age: 38, gpa: 3.0},
                {name: "Patrick", age: 37, gpa: 1.5},
                {name: "Squidward", age: 51, gpa: 2.5},
                {name: "Sandy", age: 27, gpa: 4.0}];

// people.sort((a, b) => b.age - a.age); // output = mengurutkan age dari tertua ke muda
people.sort((a, b) => a.name.localeCompare(b.name)); // output = susai alphabet awal

// console.log(people)

/*-----------------------------------Shuffle an array------------------------------------------*/
// Fisher-Yates algorithm

const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

// cards.sort(() => Math.random() - 0.5);

Shuffle(cards);

console.log(cards);

function Shuffle(array){
    for(let i = cards.length-1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));

        [array[i], array[random]] = [array[random], array[i]]
    }
}