// const value = require('./var.js')     // 노드에서 제공해주는 함수 : require(), ./ -> 현재 내가 있는 폴더를 의미
// console.log(value)

const {odd,even} = require('./var.js');

function checkOddOrEven(number) {
    if (number % 2) {
        return odd;
    }

    else {
        return even;
    }
}

// 이미 넘겨받은 내용을 또 넘길 수 있다. 그러나, 파일에서는 한번만 써야한다.
module.exports = checkOddOrEven;