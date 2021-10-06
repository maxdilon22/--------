"use strict";

// touchstart

// touchmove

// touchend

// touchenter

// touchleave

// touchcancel


document.addEventListener('DOMContentLoaded',()=> {
    const box = document.querySelector('.box');
    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log(e.targetTouches[0].pageX);
    });
});


// e . touches

// targeTouches

// changedTouches