// ボタンとメッセージの要素を取得
const button = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンクリック時の処理
button.addEventListener('click', function() {
    text.textContent = 'ボタンをクリックしました'; // メッセージを書き換え
});