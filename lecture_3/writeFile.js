const fs = require('fs').promises;

// 콜백 함수 사용 (err, data)
fs.writeFile('./writeme.txt', '예아.')
    .then(() => {
        // 생성한 파일 읽기
        return fs.readFile('./writeme.txt')
    })
    .then((data) => {
        console.log(data.toString());
    })
    .catch((err) => {
        throw err;
    });