// 다른 언어 사용하기 (단, 파이썬이 깔려 있어야함.(요청을 하는 행위))
const spawn = require('child_process').spawn;

const process = spawn('python',['test.py'])

process.stdout.on('data', function(data) {
    console.log(data.toString());
})

process.stderr.on('data', function(data) {
    console.error(data.toString());
})