// console.log('запрос данных');

// const req = new Promise( (resolve,reject) => {
//     setTimeout( ()=> {
//         console.log('Подготовка данных...');
//         const product = {
//             name: 'tv',
//             price: 2000
//         };
//         resolve(product);
//     },2000);
// });

// req.then( (product) => {
//    return new Promise( (resolve,reject) => {
//     setTimeout( ()=> {
//         product.status = 'order';
//         resolve(product);
//     },2000);
//    }).then( data => {
//        data.modify = true;
//        return data
//    }).then( (data) => {
//         console.log(data);
//    });
// }).catch( ()=> {
//     console.log('Произошла ошибка!');
// }).finally( ()=> {
//     console.log('До свидания!');
// });

const test = time => {
    return new Promise(resolve => {
        setTimeout( () => resolve(),time);
    });
};

// test(1000).then( ()=> console.log('1000 мс') );
// test(2000).then( ()=> console.log('2000 мс') );

// Promise.all([test(1000),test(2000)]).then( ()=> {
//     console.log('All');
// });

Promise.race([test(1000),test(2000)]).then( ()=> {
    console.log('All');
});