const canvas = document.getElementById('waveCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let waves = [];
const waveCount = 5;

for (let i = 0; i < waveCount; i++) {
    waves.push({
        amplitude: Math.random() * 20 + 10,
        frequency: Math.random() * 0.05 + 0.01,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.02 + 0.01,
        });
    }

function drawWaves() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgb(248, 207, 156)'; // Цвет берега
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'rgb(225, 237, 237)'; // Цвет волн
    ctx.beginPath();
    for (let x = 0; x < canvas.width; x++) {
        let y = canvas.height / 2;
        for (let wave of waves) {
            y += wave.amplitude * Math.sin(wave.frequency * x + wave.phase);
            }
            ctx.lineTo(x, y);
        }
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.fill();

        // Обновление фазы волн для анимации
        for (let wave of waves) {
            wave.phase += wave.speed;
        }
        requestAnimationFrame(drawWaves);
}

drawWaves();