/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

let numberOfFilms;

function start(){
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

  while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

// let count = 0;

// while (count < 2) {
//   let lastMovie = prompt('Один из последних просмотренных фильмов?'),
//         movieRating = prompt('На сколько оцените его?');

//   if(lastMovie === null){
//     lastMovie = prompt('Один из последних просмотренных фильмов?');
//   } else if(lastMovie != '' && lastMovie.length < 50){
//     personalMovieDB.movies[lastMovie] = movieRating;
//     count++;
//   }
// }

// do {
//   const lastMovie = prompt('Один из последних просмотренных фильмов?'),
//         movieRating = prompt('На сколько оцените его?');

//   if(lastMovie != null && movieRating != null && lastMovie != '' && movieRating != '' && lastMovie.length < 50){
//     personalMovieDB.movies[lastMovie] = movieRating;
//     console.log('done');
//     count++;
//   } else {
//     console.log('error');
//     count--;
//   } 
// } while (count <2);

function rememberMyFilms(){
  for (let x = 0; x < 2; x++) {
    const lastMovie = prompt('Один из последних просмотренных фильмов?'),
          movieRating = prompt('На сколько оцените его?');
  
    if(lastMovie != null && movieRating != null && lastMovie != '' && movieRating != '' && lastMovie.length < 50){
      personalMovieDB.movies[lastMovie] = movieRating;
      console.log('done');
    } else {
      console.log('error');
      x--;
    } 
  }
}

rememberMyFilms();

function detectPersonalLevel(){
  if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
  } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы класический зритель');
  } else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
  } else {
    console.log('Произошла ошибка');
  }
}

detectPersonalLevel();

function showMyDB(){
  if(personalMovieDB.privat == false){
    console.log(personalMovieDB);
  }
}

showMyDB();