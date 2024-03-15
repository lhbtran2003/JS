document.addEventListener('DOMContentLoaded', function() {
    const bgImage = document.getElementById('bgImage');
    const overlayText = document.getElementById('overlayText');

    setTimeout(function() {
        bgImage.style.filter = 'none'; 
        overlayText.style.opacity = '1';

        let opacity = 0;
        const timer = setInterval(function() {
            opacity += 0.1;
            overlayText.textContent = Math.round(opacity * 100) + '%';

            if (opacity >= 1) {
                clearInterval(timer);
                overlayText.style.display = 'none'; // Ẩn văn bản khi hoàn thành
            }
        }, 200);
    }, 1000); 
});
