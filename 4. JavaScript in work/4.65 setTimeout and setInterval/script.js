// const timeId = setTimeout(function() {
//     console.log('Hello');
// }, 2000)

// clearInterval(timeId)

// //или можно так
// const timeIdTwo = setTimeout(function(text) {
//     console.log(text);
// }, 2000, 'Hello')

// //можно передать функцию
// const timeIdThree = setTimeout(logger, 2000);

// function logger () {
//     console.log('text');
// }

const btn = document.querySelector('.btn');

btn.addEventListener('click', myAnimation)

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}
