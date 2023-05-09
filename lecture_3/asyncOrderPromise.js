const fs = require('fs').promises;

async function main() {
    let data = await fs.readFile('./readme.txt');       //await 사용, promise 사용
    console.log('1번', data.toString());

    data = await fs.readFile('./readme.txt');
    console.log('2번', data.toString());

    data = await fs.readFile('./readme.txt');
    console.log('3번', data.toString());

}
main();