"use strict";

let obj = {
    name: 'Nick',
    age: 20,
    parents: {
        mom: 'Tatyana'
    }
};

console.log(JSON.parse(JSON.stringify(obj)));

let copy = JSON.parse(JSON.stringify(obj));

copy.parents.mom = 'Olga';

console.log(obj);
console.log(copy);