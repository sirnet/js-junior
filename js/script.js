// 
'use strict';

// Код возьмите из предыдущего домашнего задания

// const personalMovieDB = {
//     count : 0,
//     movies : {},
//     actors : {},
//     genres : [],
//     privat : true,
//     start: () => {
//         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
//             personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         }
//     },
//     rememberMyFilms: () => {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Один из последних просмотренных фильмов?', ''),
//                   b = prompt('На сколько оцените его?', '');
//             if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 i--;
//             }
//         }
//     },
//     detectPersonalLevel: () => {
//         if(personalMovieDB.count < 10){
//             alert ("Просмотрено довольно мало фильмов");
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             alert ("Вы классический зритель");
//         } else if (personalMovieDB.count >= 30){
//             alert("Вы киноман");
//         } else {
//             console.log("Произошла ошибка");
//         }
//     },
//     showMyDB: (hidden) => {
//         if (!hidden) {
//             console.log(personalMovieDB.privat);
//         }
//     },
//     writeYourGenres: (group) => {
//         for (let i=1; i<=2; i++){
//             const geners = prompt(`Ваш любимый жанр под номером ${i}`); 
//             if (geners === '' || genres == null){ 
//                 console.log('Вы ввели некорректные данные или не ввели их вовсе');
//                 i--;
//             } else {
//                 personalMovieDB.genres = geners.slice(', ');
//                 personalMovieDB.genres.sort();
//             }
//         }

//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр №${i+1} - это ${item}`);
//         });
//     },
//     toggleVisibleMyDB: () => {
//         if (personalMovieDB.privat == false){
//             personalMovieDB.privat = true;
//         } else {
//             personalMovieDB.privat = false;
//         }
//     }
// };

//Старые методы подключения getElement

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = "blue";
// box.style.width = '500px';

box.style.cssText = 'background-color:blue; width:500px;'

btns[1].style.borderRadius = '100%';

// for (let i = 0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
//const text = document.createTextNode('Тут был я');

// div.classList.add('black');

// wrapper.append(div);
// wrapper.prepend(div);

//hearts[0].before(div);
//hearts[0].after(div);

//circles[0].remove();

//hearts[0].replaceWith(circles[0]);