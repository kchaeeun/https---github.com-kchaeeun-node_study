const fs = require('fs').promises;

// 콜백 함수 사용 (err, data)
fs.readFile('./readme.txt')
    .then((data) => {
        console.log(data);
        console.log(data.toString());
    }) 
    .catch((err) => {
        throw err;
    });