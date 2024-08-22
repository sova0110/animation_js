const starContainer = document.getElementById('star-container');

function createStars(count) {
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Установка случайных размеров и позиций
        const size = Math.random() * 5 + 2; // Размер от 2px до 7px
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        
        // Установка случайной задержки для анимации
        star.style.animationDelay = `${Math.random() * 1.5}s`;
        
        starContainer.appendChild(star);

        // Удаление звезды через 3 секунды
        setTimeout(() => {
            star.remove();
        }, 3000);
    }
}

// Создание 30 звезд сразу
createStars(30);

// Создание новых звезд каждые 2 секунды
setInterval(() => createStars(30), 2000);