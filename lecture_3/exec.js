// cmd창에 dir를 입력하는 것과 같은 효과
const exec = require('child_process').exec;

var process = exec('dir');

process.stdout.on('data', function(data) {
    console.log(data.toString());
})

process.stderr.on('data', function(data) {
    console.error(data.toString());
})