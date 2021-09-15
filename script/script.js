"use strict";

const num = 50;

// if (num < 49) {
//     console.log('error');
// } else if(num > 100) {
//     console.log('слишком много!');
// } else {
//     console.log('ok!');
// }

// (num == 50)? console.log('ok!') : console.log('error!');

switch(num) {
    case 50:
        console.log('ok!');
        break;
    case 49:
        console.log('49!');
        break;
    default:
        console.log('error!');
        break;
}