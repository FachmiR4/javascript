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

