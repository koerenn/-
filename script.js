        // Массив картинок для пролистывания в баннере
        const images = [
            "images/three.JPG", // Первая (основной баннер)
            "images/boy.JPG", // Вторая
            "images/girlpink.JPG",  // Третья
            "images/girlred.JPG",
            "images/perfume.JPG",

            "images/girl1.JPG",
            "images/girl2.JPG"
        ];
        
        let currentIndex = 0;
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightboxImg');

        // Открыть просмотрщик
        function openLightbox(index) {
            currentIndex = index;
            lightboxImg.src = images[currentIndex];
            lightbox.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Отключаем прокрутку сайта
        }

        // Закрыть просмотрщик
        function closeLightbox() {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto'; // Включаем прокрутку обратно
        }

        // Листать вперед/назад
        function changeImage(direction) {
            currentIndex += direction;
            
            // Зацикливание галереи
            if (currentIndex >= images.length) {
                currentIndex = 0;
            } else if (currentIndex < 0) {
                currentIndex = images.length - 1;
            }
            
            lightboxImg.src = images[currentIndex];
        }

        // Закрытие при клике на темную область вокруг картинки
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        // Управление с клавиатуры (стрелочки и Esc)
        document.addEventListener('keydown', function(e) {
            if (lightbox.style.display === 'flex') {
                if (e.key === 'Escape') closeLightbox();
                if (e.key === 'ArrowRight') changeImage(1);
                if (e.key === 'ArrowLeft') changeImage(-1);
            }
        });
