// API URL configuration
const API_URL = "https://omikuji-full-1.onrender.com";

document.addEventListener('DOMContentLoaded', function() {
    const omikujiBtn = document.getElementById('omikujiBtn');
    const resultArea = document.getElementById('resultArea');

    omikujiBtn.addEventListener('click', async function() {
        // ローディング状態
        omikujiBtn.disabled = true;
        omikujiBtn.textContent = '占い中...';
        showResult('おみくじを引いています...', 'loading');

        try {
            const response = await fetch(API_URL);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            showOmikujiResult(data);
            
        } catch (error) {
            console.error('Error:', error);
            showResult('通信エラーが発生しました。バックエンドサーバーが起動しているか確認してください。', 'error');
        } finally {
            // ボタンを元の状態に戻す
            omikujiBtn.disabled = false;
            omikujiBtn.textContent = 'おみくじを引く';
        }
    });

    function showOmikujiResult(data) {
        const fortuneClass = getFortuneClass(data.fortune);
        
        resultArea.innerHTML = `
            <div class="fortune-display">
                <div class="fortune-text ${fortuneClass}">${data.fortune}</div>
            </div>
            <div class="result-item">
                <div class="result-label">🍀 ラッキーアイテム</div>
                <div class="result-value">${data.lucky_item}</div>
            </div>
            <div class="result-item">
                <div class="result-label">💬 一言メッセージ</div>
                <div class="result-value">${data.message}</div>
            </div>
        `;
        
        // クラスをリセット
        resultArea.classList.remove('loading', 'error');
    }

    function getFortuneClass(fortune) {
        switch(fortune) {
            case '大吉': return 'daikichi';
            case '中吉': return 'chukichi';
            case '小吉': return 'shokichi';
            case '吉': return 'kichi';
            case '末吉': return 'suekichi';
            case '凶': return 'kyo';
            default: return '';
        }
    }

    function showResult(message, type = '') {
        resultArea.innerHTML = `<p>${message}</p>`;
        
        // クラスをリセット
        resultArea.classList.remove('loading', 'error');
        
        // 新しいクラスを追加
        if (type) {
            resultArea.classList.add(type);
        }
    }
});
