"use strict";
const wrapper = document.querySelector('.wrapper');
const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const cyrcles = document.getElementsByClassName('circle');
const hearths = wrapper.querySelectorAll('.hearth');
const oneHearth = wrapper.querySelector('.hearth');

// box.style.backgroundColor = 'blue';
// box.style.width = '700px';

btns[1].style.borderRadius = '100%';

// cyrcles[0].style.backgroundColor = 'red';

// box.style.cssText = 'background-color: blue; width: 500px';

// for (let i = 0; i < hearths.length; i++) {
//     hearths[i].style.backgroundColor = 'red';
// }

// hearths.forEach( (item) => {
//     item.style.backgroundColor = 'red';
// });

// for (let key of hearths) {
//     key.style.backgroundColor = 'red';
// }

const div = document.createElement('div');
div.innerHTML = '<h1>Hello, world!</h1>';
// div.insertAdjacentHTML('afterend','<h2>Hello</h2>');
// div.textContent = 'hello';
// const txt = document.createTextNode('hi!');

div.classList.add('black');

wrapper.prepend(div);
// hearths[0].after(div);
// cyrcles[0].remove();

// hearths[0].replaceWith(hearths[1]);
// Старые методы
// wrapper.appendChild(div);

// wrapper.insertBefore(div, hearths[1]);


// wrapper.removeChild(hearths[0]);

// wrapper.replaceChild(div,hearths[0]);