//mobile using touch events
//click under the hood also meaning like touch event
//6 touch events
//1 - touchstart
//2 - touchmove
//3 - touchend
//4 - touchenter - срабатывает когда палец зашел на на область
//5 - touchleave - когда скользит палец и вышел
//6 - touchcancel - точка не регистрируется на повехности

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');
    box.addEventListener('touchstart', (e) => {
        //хорошая практика отменять стандартное поведение
        e.preventDefault();

        console.log("start")
        console.log(e.touches)
    });

    box.addEventListener('touchmove', (e) => {
        //хорошая практика отменять стандартное поведение
        e.preventDefault();

        console.log("Move")
    });

})

//при работе с сенсорными устройствами event имеет специальные свойсва/методы
//touches (TouchList) (количество пальцев на элементе)
//targetTouches (TouchList) (количество пальцев на экране)
//changedTouches (список польцев участвуюих в текущем событии)