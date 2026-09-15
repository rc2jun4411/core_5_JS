/* C:\Users\rc2ju\OneDrive\Documents\core_5_JS\core_52.3.1_img fade-in fade-out\index.js */

/* ex-51.3 */

      // すべての画像要素とボタンを取得
      const images = document.querySelectorAll('.fade-img');
      const nextBtn = document.getElementById('nextBtn');
      let currentIndex = 0;

      function changeImage() {
        // 現在表示されている画像から 'active' クラスを消す（フェードアウト）
        images[currentIndex].classList.remove('active');

        // 次の画像のインデックスを計算（最後の次は最初に戻る）
        currentIndex = (currentIndex + 1) % images.length;

        // 次の画像に 'active' クラスを付与（フェードイン）
        images[currentIndex].classList.add('active');
      }

      // 自動で切り替えたい場合は、以下のコメントアウトを解除してください
      setInterval(changeImage, 4000); // 4秒ごとに自動切り替え