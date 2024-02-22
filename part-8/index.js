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