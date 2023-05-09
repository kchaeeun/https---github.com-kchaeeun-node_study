const url = require('url')
const {URL} = url;

const myURL = new URL('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EC%98%A4%EB%8A%98+%EC%95%BC%EA%B5%AC+%EA%B2%B0%EA%B3%BC');
console.log('new URL():', myURL);
console.log('url.fomat():', url.format(myURL));

console.log('searchParams.has() : ', myURL.searchParams.has('sm'))