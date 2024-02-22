// this = reference to the object where THIS is used
//        (the object depends on the immediate context)
//        person.name = this.name

const person1 = {
    name : "fachmi",
    favFood: "nasi goreng",
    sayHello: function(){console.log(`Hi!, i am ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)},
}


// person1.sayHello()
// person1.eat();

/*-----------------------------------constructor------------------------------------------*/

// constructor = spesial method for defining the 
//              properties and methods of objects

function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function(){console.log(`you drive the ${this.model}`)}
}

const car1 = new Car("ford", "Mustang", 2023, "black");

// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);
// car1.drive()

/*-----------------------------------class------------------------------------------*/
// class = (ES6 feature) provides a more structured and cleaner way to
//          work with objects compared to traditional constructor function
//          ex. static key word, encapsulation, inheritance

class Product{
    constructor(name, price){
        this.nama = name;
        this.price = price;
    }
    displayProduct(){
        console.log(`Product: ${this.nama}`);
        console.log(`Price: $${this.price}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax)
    }
}

const product1 = new Product("Shirt", 24.99);
const product2 = new Product("pants", 30.58);

// product2.displayProduct();

const salesTax = 0.05;

const total = product1.calculateTotal(salesTax);
// console.log(`Total price (with tax): $${total.toFixed(2)}`);

/*-----------------------------------static------------------------------------------*/

// static = keyword that defines properties or methods that belong
//          to a class itself rather than the object created
//          from that class (class owns anything static, not the object)

class methUntil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }

    static getCircumference(radius){
        return 2 * this.PI * radius;
    }
    static getArea(radius){
        return this.PI * radius * radius;
    }
}

// console.log(methUntil.PI);
// console.log(methUntil.getDiameter(10));
// console.log(methUntil.getCircumference(10))
// console.log(methUntil.getArea(10))

class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    static getUserCount(){
        console.log(`there are ${User.userCount} users online`)
    }
    sayHeloo(){
        console.log(`Hello, my username is ${this.username}`)
    }
}

const user1 = new User("fachmi");

// console.log(user1.username);
// console.log(User.userCount);
// console.log(user1.sayHeloo());
// User.getUserCount();


/*-----------------------------------inheritence------------------------------------------*/
//  inheritence = allows a new class to inherit properties and methods from
//                an existing class (parent -> child)
//                helps with code reusability

class animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class rabbit extends animal{
    name = "rabbit";

    run(){
        console.log(`This ${this.name} is running`);
    }
}
class fish extends animal{
    name = "fish";

    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}
class hawk extends animal{
    name = "hawk";

    fly(){
        console.log(`This ${this.name} is flying`);
    }
}


const Rabbit = new rabbit();
const Fish = new fish();
const Hawk = new hawk();

console.log(Fish.alive);
Fish.eat();
Fish.sleep();
Fish.swim()