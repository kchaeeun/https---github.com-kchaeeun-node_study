const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8'})   // html 사용, 한글 사용을 알림
    res.write('<h1>Hello Node!</h>')
    res.write('<p>Hello server</p>')
    res.write('<p>Hello Chaeeun</p>');
})
    .listen(8080);     // 8080포트, 다른 동작 불가(포트 하나가 하나의 프로그램) -> 배포는 15
server.on('listening', () => {
    console.log('8080번 포트에서 서버 대기 중입니다.');
});
server.on('error', (error) => {
    console.error(error);
});