'use strict';

// filter

// let names = ['nik','alex','jorik','voldemart'].filter( (name)=> name.length < 5);
// console.log(names);

// map

// let answers = ['IvAn','AnNA','Hello'].map( i => i.toLowerCase());
// console.log(answers);


// every / some =======> every - если все данные верны возвращает true ;;;; some -- если хотябы одно

// const some = [4, 5, 4];

// console.log(some.some( item => {
//     return typeof(item) == 'number';
// }));


// console.log(some.every( item => {
//     return typeof(item) == 'number';
// }));


// reduce

// const arr = [4, 5, 1, 3, 2, 6];
// const result = arr.reduce( (sum, current) => sum + current);
// console.log(result);

// const arr = [4, 5, 1, 3, 2, 6];
// const result = arr.reduce( (sum, current) => sum + current, 3);
// console.log(result);


// const arr = ['apple','pear','plum'];
// const result = arr.reduce( (sum, current) => `${sum}, ${current}`);
// console.log(result);

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};


const newArr = Object.entries(obj)
.filter( i => i[1] === 'persone')
.map( i => i[0]);
console.log(newArr);