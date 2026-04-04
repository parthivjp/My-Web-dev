// function personMaker(name, age) {
//     const person = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(`Hello mate my name is ${this.name}`);
//         },
//     }
//     return person;
// }

// let p1 = new person("Parthiv",23);


// still talk function create indiviual memory ++++++++++++++++++++

// optimal way is to apply constructor method ----------

// function person(name, age) {
//     this.name = name,
//     this.age = age;
//     console.log(this);
// }

// person.prototype.talk = function(){
//     console.log(`Hello mate my self ${this.name}`);
// };

// let p1 = new person("Parthiv",23);

// Class method +++++++++++++++++++++++++

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
        console.log("Calling Perent class");
    }
    talk(){
        console.log(`Hello mate my self ${this.name}`);
    }
}
// let p1 = new Person("Parthiv", 23);

// this use same instance , wither you create 1 new person or 1000 person , instance meance(talk function)
// not evry time extra memory space or individual instance call-----

//  now lets apply inheritance in class method ++++++++++++++++++++++++

// class student extends Person {
//     constructor(name, age,  marks){
//         super(name, age);
//         this.marks = marks;
//         console.log("calling student class");
//     }

//     greet(){
//         console.log(`Good morning`);
//     }
// }

// override example --------------

class Mammal{
    constructor(name){
        this.name = name;
        this.type = "warm-blooded";
    }
    eat(){
        console.log("I am eatting");
    }
}

class Dog extends Mammal{
    constructor(name){
        super(name);
    }
    bark(){
        console.log("Wooff.....");
    }
    // overiding---
    eat(){
        console.log("I am a Dog , i am eatting...")
    }
}


class cat extends Mammal{
    constructor(name){
        super(name);
    }
    meow(){
        console.log("meeeaaoow.....");
    }
}