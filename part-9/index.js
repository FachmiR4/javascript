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

rabbit.run()

