console.log(this);  // 전역 스코프의 this는 module.exports
console.log(this === module.exports)

function a() {
    console.log(this === global);

}
a();