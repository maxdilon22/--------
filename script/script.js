"use strict";

const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};


// for (let i = 0; i < 2; i++){
//     const a = prompt('Какой последний фильм Вы посмотрели?','');
//     const b = prompt('На сколько вы оцените его?','');
//     if ( a != null && b != null && a != '' && b != '' && a.length < 50){
//     personalMovieDB.movies[a] = b;
// } else {
//     console.log('error!');
//     i--;
// }
// }


let i = 0;

do {
    const a = prompt('Какой последний фильм Вы посмотрели?','');
    const b = prompt('На сколько вы оцените его?','');
    if ( a != null && b != null && a != '' && b != '' && a.length < 50){
    personalMovieDB.movies[a] = b;
} else {
    console.log('error!');
    i--;
}
i++;
}
while ( i < 2 );




if ( personalMovieDB.count < 10) {
    console.log('Просмотрено мало фильмов');
} else if ( personalMovieDB.count > 10 && personalMovieDB.count < 30 ) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30 ) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}
console.log(personalMovieDB);