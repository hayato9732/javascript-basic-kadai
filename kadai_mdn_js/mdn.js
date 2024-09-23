const today = new Date();

// 年、月、日を取得
const year = today.getFullYear();
const month = today.getMonth() + 1; // 月は0から始まるため+1
const date = today.getDate();

// 表示形式を作成
const formattedDate = `${year}年${month}月${date}日`;

// コンソールに表示
console.log(formattedDate);