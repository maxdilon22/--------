"use strict";

// (function(){
//     alert('hello');
// }());

function first() {
    console.log('1');
}

function learnJS(lang, callback) {
    console.log(`Я учу ${lang}`);
    callback();
}

learnJS('JS', () => console.log('я прошел этот урок!'));