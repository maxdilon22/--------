'use strict';

class People {
    constructor(name){
        this.name = name;
    }
    #age = 20;
    say() {
        console.log(`Name: ${this.name} age: ${this.#age}`);
    }
    get age() {
        return this.#age;
    }
    set age(num) {
        this.#age = num;
    }

}

const nick = new People('nick');

nick.say();
console.log(nick.age);
console.log(nick.age = 30);
nick.say();