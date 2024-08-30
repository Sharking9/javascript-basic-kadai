const date = new Date();
const [month, day, year] = [
  date.getMonth(),
  date.getDate(),
  date.getFullYear(),
];
// [0, 17, 2000] as month are 0-indexed

console.log(year+"年"+month+"月"+day+"日");

