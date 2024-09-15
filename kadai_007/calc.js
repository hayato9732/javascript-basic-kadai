// num 変数に任意の正の数を代入
let num = 15; // 例として 15 を代入していますが、他の数値に変更しても構いません

// 条件分岐による出力
if (num % 3 === 0 && num % 5 === 0) {
    console.log("3と5の倍数です");
} else if (num % 3 === 0) {
    console.log("3の倍数です");
} else if (num % 5 === 0) {
    console.log("5の倍数です");
} else {
    console.log(num);
}