// script.js
let so_lan_click = 0;

function jump() {
    var button = document.getElementById('jumpButton');
    var maxX = window.innerWidth - button.clientWidth;
    var maxY = window.innerHeight - button.clientHeight;

    var newX = Math.floor(Math.random() * maxX);
    var newY = Math.floor(Math.random() * maxY);

    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
}

function stop() {
    var resultContainer = document.getElementById('result');
    var resultImage = document.getElementById('resultImage');
    var resultText = document.getElementById('resultText');
    
    so_lan_click++;

    // Hiển thị kết quả
    resultContainer.style.display = 'block';
    resultImage.src = 'https://www.bing.com/th/id/OGC.1469a4ad6386d6b6ab90c7b39371d00c?pid=1.7&rurl=https%3a%2f%2fimg2.thuthuatphanmem.vn%2fuploads%2f2019%2f03%2f02%2fhinh-anh-khan-gia-reo-ho-vo-tay-dep_013559420.gif&ehk=RE0Llt94%2bxsBLosoXsXDCtxmmDOE%2bUxxcnXqmGw5vEg%3d'; // Đặt đường dẫn ảnh GIF thực tế
    
    if (so_lan_click >= 2 && so_lan_click <=3) {
        resultText.textContent = `Tự tin x${so_lan_click} rồi đó!`;
    }
    if(so_lan_click < 2) {
        resultText.textContent = 'Tự tin rồi đó!';
    }
    if(so_lan_click >= 4)
    {
        resultImage.src = 'https://www.bing.com/th/id/OGC.7e8ba29596a757c59e51a69a3515be20?pid=1.7&rurl=https%3a%2f%2fpjm.vn%2fupload%2fnews%2faa6Q_photo1539490845477-15394908454771049022064.gif&ehk=LxQbl%2b35PYLa%2buRvzeBd%2bKZypis0YkPsJUeLRDg7Ow8%3d';
    }
}
