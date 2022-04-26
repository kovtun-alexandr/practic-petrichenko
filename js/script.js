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

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

if (personalMovieDB.count < 10) {
  alert('Просмотрено довольно мало фильмов');
} else if(personalMovieDB.count > 10 && personalMovieDB.count < 30) {
  alert('Вы киноман');
} else {
  alert('Произошла ошибка');
}

let count = 0;

while (count < 2) {
  let lastMovie = prompt('Один из последних просмотренных фильмов?'),
        movieRating = prompt('На сколько оцените его?');

  if(lastMovie === null){
    lastMovie = prompt('Один из последних просмотренных фильмов?');
  } else if(lastMovie != '' && lastMovie.length < 50){
    personalMovieDB.movies[lastMovie] = movieRating;
    count++;
  }
  

}

      // c = prompt('Один из последних просмотренных фильмов?',''),
      // d = prompt('На сколько оцените его?','');

// personalMovieDB.movies[c] = d;

console.log(personalMovieDB);