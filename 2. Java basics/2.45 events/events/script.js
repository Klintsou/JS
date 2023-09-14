'use strict'

const btn = document.querySelector('button');

// btn.onclick = function() {
//     alert('Click')
// }

btn.addEventListener('click', () => {
    alert('Click')
})

btn.addEventListener('click', (e) => {
    console.log(e);
    alert('Click11');
})

//смотри doc документ JS\2. Java basics\2.45 events\events.docx


function factorial(n) {
    if (typeof(n) !== 'number' || !Number.isInteger(n)) {
        return "Ошибка, проверьте данные";
    }

    if (n >= 1) {
        return n * factorial(n - 1);
    } else {
        return 1;
    }

    // Более короткий вариант, который вы можете встретить
    // Но не учитывает отрицательные значения
    return n ? n * factorial(n - 1) : 1;
}