'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');


btns[2].style.borderRadius = '100%';
circles[1].style.backgroundColor = 'red';

//1 cпособ
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

//2 способ
box.style.cssText = 'background-color: blue; width: 500px'

//Можно перебрать все элементы
// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'gold';
// }

//лучше через forEach()
hearts.forEach(item => {
    item.style.backgroundColor = 'gold';
})

//создание элемента (в рамках скрипта)
const div = document.createElement('div')
//const text = document.createTextNode('Тут текст');
div.classList.add('black')

//document.body.append(div)

wrapper.append(div)


//wrapper.prepend(div)

//hearts[0].before(div)
hearts[0].after(div)

circles[1].remove()

hearts[0].replaceWith(circles[0]);

// //устаревшие команды
// wrapper.appendChild(div)
// wrapper.insertBefore(div, hearts[0]);
// wrapper.removeChile(circles[1]);
// wrapper.replaceChild(circles[0], hearts[0])

div.innerHTML = "<h1>Hello World</h1>";

//только текст (безопасно при вводе пользователем)
div.textContent = "hello"

div.insertAdjacentHTML('beforebegin', "<h1>Hello World</h1>")
