"use strict";
const personalMovieDB = {
    count: 0,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?','');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?','');
        }
    },
    rememberMyFilms: function () {
    for (let i = 0; i < 2; i++){
        const a = prompt('Какой последний фильм Вы посмотрели?','');
        const b = prompt('На сколько вы оцените его?','');
        if ( a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
    } else {
        console.log('error!');
        i--;
    }
    }
},
    detectPersonalLevel: function() {
    if ( personalMovieDB.count < 10) {
        console.log('Просмотрено мало фильмов');
    } else if ( personalMovieDB.count > 10 && personalMovieDB.count < 30 ) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30 ) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
},
    showMyDB:  function(hidden) {
        if(!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for(let i = 1; i < 2; i++) {
            // let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            let genres = prompt('Введите жанры чепез запятую','').toLowerCase();
            if (genres === '' || genres == null) {
                console.log('Вы ввели некорректные данные ');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach( (item,i) => { 
            console.log(`Любимый жанр ${i+1} это ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }

    } 

};









