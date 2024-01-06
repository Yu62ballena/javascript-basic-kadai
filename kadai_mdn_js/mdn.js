const date = new Date(2024, 1, 6);

console.log("date", date);
// Tue Feb 06 2024 00:00:00 GMT+0900 (日本標準時)

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();

const fullDate = `${year}年${month}月${day}日`;
console.log("fullDate", fullDate);
// 2024年1月6日
