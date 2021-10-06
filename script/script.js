"use strict";

// console.log(document.body.childNodes);

// console.log(document.documentElement);

// console.log(document.body.firstElementChild);

// console.log(document.body.lastElementChild);

// console.log(document.querySelector('#current').parentNode.parentNode);

// console.log(document.querySelector('[data-current = "3"]').parentElement);


for (let key of document.body.childNodes) {
    if(key.nodeName == "#text") {
        continue;
    } 
    console.log(key);
}