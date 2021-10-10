'use strict';

// function showThis(a,b) {
//     console.log(this);
//     function sum() {
//        return a + b;
//     }
// }

// showThis();

// console.log(sum());
// showThis(4,5);

// Обычная фукнция возвращает window а асли use strict --> underfined
// Контекст this у объектов это объект
// bind, apply объект[Аргумент], call(объект,Аргумент)


// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };

// console.log(obj.sum);

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;

// }

// let nick = new User('nick',20);

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);


// function count(num) {
//     return this * num;
// }

// const double = count.bind(2);

// console.log(double(2));

// const btn = document.querySelector('button');

// // btn.addEventListener('click', function() {
// //     console.log(this.style.background = 'red');
// // });

// btn.addEventListener('click', e => {
//     console.log(e.target.style.background = 'red');
// })

// // const obj = {
// //     num: 5,
// //     sayNumber: function() {
// //         const say = () => console.log(this);
// //     }
// // };

// // obj.sayNumber();

// const double = a =>  a * 2;

// console.log(double(4));


// function say() {
//     return console.log(this);
// }

// const obj = {
//     name: 'Nick'
// };

// say.call(obj);


// const usrName = say.bind('Nick');

// console.log(usrName('Kh'));



// const obj = {
//     name: 'nick',
//     say: function() {
//         () => console.log(this);
//     }
// };
