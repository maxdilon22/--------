'use strict';

const now = new Date();

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());

console.log(now.getTime());



let start = new Date();

for (let i = 0; i < 100000;i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал ${end - start} за миллисекунды`)