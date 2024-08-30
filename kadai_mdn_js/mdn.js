const date = new Date();
// 年を取得
const year = date.getFullYear();

// 月を取得（0から始まるので+1が必要）
const month = date.getMonth() + 1;

// 日を取得
const day = date.getDate();
// [0, 17, 2000] as month are 0-indexed

console.log(year+"年"+month+"月"+day+"日");

