// this = reference to the object where THIS is used
//        (the object depends on the immediate context)
//        person.name = this.name

const person1 = {
    name : "fachmi",
    favFood: "nasi goreng",
    sayHello: function(){console.log(`Hi!, i am ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)},
}


person1.sayHello()
person1.eat();