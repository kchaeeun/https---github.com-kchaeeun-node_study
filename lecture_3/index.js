const {odd,even} = require("./var");  // {}와 같이 구조 분해를 할때는 속성명이랑 변수명이 동일해야한다. (even,odd)
const checkNumber = require("./func");

function checkStringOddOrEven(str) {
    if (str.length  % 2) {
        return odd;
    }

    else {
        return even;
    }
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));