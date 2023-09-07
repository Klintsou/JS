const lines = 5;
let result = '';
// нарисовать в result
//     *
//    ***
//   *****
//  *******
// *********
//***********
// решение ментора https://github.com/yankovalenko94/JS_task_answers/blob/master/Tests/1_cycles_and_conditions/pyramid.js

let starsCounter;
for (let i = 0; i <= lines + 0; i++) {
   starsCounter = i + i + 1
   for (let j = 0; j <= lines + i; j++) {
      if (j >= (lines + i + 1 - starsCounter)) {
         result = result + '*'
      } else {
         result = result + ' '
      }
   }
   result = result + '\n'

}

console.log(result)