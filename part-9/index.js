// super = keyword is used in classes to call the contruction or acces
//         the properties and methods of a parent (superclass)
//         this = this project
//         super = the parent

class animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed}mph`)
    }
}
class Rabbit extends animal{
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}
class Fish extends animal{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}
class Hawk extends animal{
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }
    fly(){
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit("rabbit", 1, 25);

// rabbit.run()

/*-----------------------------------getter & setter------------------------------------------*/

// getter = special method that makes a property readable
// setter = special method that makes a property writeable

// validate and modify a value when reading/writing a property

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("width must be a positive number");
        }
    }
    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error("Height must be a positive number");
        }
    }
    get width(){
        return this._width.toFixed(1);
    }
    get height(){
        return this._height.toFixed(1);
    }
    get area(){
        return (this._width * this._height).toFixed(1);
    }
}

const rectangle = new Rectangle(10, 12);

// console.log(rectangle.height);
// console.log(rectangle.width);
// console.log(rectangle.area);

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }
        else{
            console.error("first name must be a non-empty string");
        }
    }
    set lastName(newlastName){
        if(typeof newlastName === "string" && newlastName.length > 0){
            this._lastName = newlastName;
        }
        else{
            console.error("Last name must be a non-empty string");
        }
    }
    set age(newAge){
        if(newAge >= 0){
            this._age = newAge;
        }
        else{
            console.error("Age name must be a non-empty Integer");
        }
    }
    get firstName(){
        return this._firstName;
    }
    get lastName(){
        return this._lastName;
    }
    get age(){
        return this._age;
    }
    get fullName(){
        return this._firstName + " " +this._lastName;
    }

}

const person = new Person("fachmi", "Ramadhan", 23);

// console.log(person.fullName);

/*-----------------------------------destructuring------------------------------------------*/

// destructuring = extract value from array and object, then assign them to
//                 variables in a convenient way
//                 [] = to perform array destructuring
//                 {} = to perform object destructuring
//                 5 exemples


// ----------------- EXAMPLE 1 --------------

let a = 1;
let b = 2;

[a, b] = [b, a];

// console.log(a); //  output = 2
// console.log(b); // output = 1

// ----------------- EXAMPLE 2 --------------
// SWAPP 2 ELEMENTS IN ARRAY

const colors = ["RED", "GREEN", "BLUE", "BLACK", "WHITE"]; 

[colors[0], colors[4]] = [colors[4], colors[0]];

// output = [ "WHITE", "GREEN",  "BLUE", "BLACK", "RED"]
console.log(colors)

// ----------------- EXAMPLE 3 --------------
// ASSIGN ARRAY ELEMENTS TO VARIABLES

const [firstColor, secondColor, trirdColor, ...extraColor] = colors;

console.log(firstColor); // output = white
console.log(secondColor); // output = green
console.log(trirdColor); // output = blue
console.log(extraColor); // output = ["black", "red"]


// ----------------- EXAMPLE 4 --------------
// EXTRA VALUES FROM OBJECT

const person1 = {
    firstName: "Fachmi",
    lastName: "Ramadhan",
    age: 30,
    // job: "fry Cook",
}
const {firstName, lastName, age, job="sofware Developer"} = person1;

console.log(firstName); // output = fachmi
console.log(lastName); // output = Ramadhan
console.log(age); // output = 30
console.log(job); // output = Sofware Developer


// ----------------- EXAMPLE 4 --------------
// DESTRUCTURE IN FANCTION PARAMETER

function displayPerson({firstName, lastName, age, job}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

displayPerson(person1);

