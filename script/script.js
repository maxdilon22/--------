"use strict";

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
console.log(box);
console.log(btns[1]);

const cyrcles = document.getElementsByClassName('circle');

console.log(cyrcles[0]);

const hearths = document.querySelectorAll('.hearth');

hearths.forEach(item => {
    console.log(item);
});

const oneHearth = document.querySelector('.hearth');

console.log(oneHearth);