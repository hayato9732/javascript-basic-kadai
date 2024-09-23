// ボタンとメッセージの要素を取得
const button = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンクリック時の処理
button.addEventListener('click', function() {
    // 2秒後にメッセージを書き換える
    setTimeout(function() {
        text.textContent = 'ボタンをクリックしました'; // メッセージを書き換え
    }, 2000); // 2000ミリ秒 = 2秒
});