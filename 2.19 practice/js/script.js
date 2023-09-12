'use strict';

let obj = {
   name: "yury",
   lastname: {
      abb: "333",
      ccc: "444"
   }
}

console.log(obj.lastname.abb)
console.log(obj.["lastname"]["abb"])

const a = [1, 2, 3]
      b = [...a, 4]

console.log(a)
console.log(b)