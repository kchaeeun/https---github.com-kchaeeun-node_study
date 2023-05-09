const path = require('path');

// mac, window(linux) 별로 다른 것을 분류해줌
console.log(path.join(__dirname, '..', '/var.js'));     //join은 절대경로를 무시
console.log(path.resolve(__dirname, '..', '/var.js'));  


console.log(path.parse(__filename))
console.log(path.format({
    dir: 'C:\\users\\chaeeun',
    name:'path',
    ext : '.js',
}))