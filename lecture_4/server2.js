const http = require('http');
const fs = require('fs').promises;

// 함수를 async로 바꿔줌
const server = http.createServer(async(req, res) => {
    // async 사용 시에는 try-catch문으로 예외 처리 
    try {
        res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8'})   // html 사용, 한글 사용을 알림
        const data = await fs.readFile('./server2.html');                    // html 파일을 읽어서 전송
        res.end(data);
    } catch (error) {
        console.error(error);
        res.writeHead(200, { 'Content-Type' : 'text/plain; charset=utf-8'}) // 문자열을 의미
        res.end(err.message);
    }
})
    .listen(8080);     // 8080포트, 다른 동작 불가(포트 하나가 하나의 프로그램) -> 배포는 15
server.on('listening', () => {
    console.log('8080번 포트에서 서버 대기 중입니다.');
});
server.on('error', (error) => {
    console.error(error);
});