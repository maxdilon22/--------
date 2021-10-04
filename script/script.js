"use strict";

const solider = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('hi!');
    }
};

const John = Object.create(solider);

// const John = {
//     health: 100
// }

// John.__proto__ = solider;

// Object.setPrototypeOf(John,solider);

console.log(John.sayHello());