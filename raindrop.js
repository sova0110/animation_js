const canvas = document.getElementById('rainCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let raindrops = [];

function createRaindrop() {
    const x = Math.random() * canvas.width;
    const y = 0;
    const length = Math.random() * 20 + 10; // Длина капли
    const speed = Math.random() * 5 + 2; // Скорость падения
    raindrops.push({ x, y, length, speed });
}

function updateRaindrops() {
    for (let i = 0; i < raindrops.length; i++) {
        raindrops[i].y += raindrops[i].speed;
        if (raindrops[i].y > canvas.height) {
            raindrops.splice(i, 1);
            i--;
        }
    }
}

function drawRaindrops() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)'; // Цвет капель
    ctx.lineWidth = 2;

    for (let drop of raindrops) {
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x, drop.y + drop.length);
        ctx.stroke();
    }
}

function animate() {
    if (Math.random() < 0.1) { // Вероятность создания новой капли
        createRaindrop();
    }
    updateRaindrops();
    drawRaindrops();
    requestAnimationFrame(animate);
}

animate();