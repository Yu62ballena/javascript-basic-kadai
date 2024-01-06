const date2 = new Date();

console.log("date2", date2);
// Sat Jan 06 2024 13:38:39 GMT+0900 (日本標準時)

const year2 = date2.getFullYear();
const month2 = date2.getMonth();
const day2 = date2.getDate();

const fullDate2 = `${year2}年${month2}月${day2}日`;
console.log("fullDate2", fullDate2);
// 2024年0月6日
