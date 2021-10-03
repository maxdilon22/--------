"use strict";

const arr = [1,32,35,6,8];

arr.sort( (a,b) => {
    return a - b;
});

console.log(arr);

// arr[10] = 0;
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.push(10);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// arr.forEach( (item,i,arr) => {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// } );


// const str = prompt('','');
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));