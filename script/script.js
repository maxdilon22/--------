"use strict";

const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

const a = prompt('Какой последний фильм Вы посмотрели?','');
const b = prompt('На сколько вы оцените его?','');
const c = prompt('Какой последний фильм Вы посмотрели?','');
const d = prompt('На сколько вы оцените его?','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);