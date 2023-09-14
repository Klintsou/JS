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
