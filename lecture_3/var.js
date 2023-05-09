const odd = "홀수입니다";
const even = "짝수입니다";

exports.odd = odd;      // this.odd = odd; 가능
exports.even = even;

// module.exports = {
//     odd,  // 객체로 값과 키가 같아 생략(odd : odd)
//     even
// };