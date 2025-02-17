const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [];

class Heart {
    constructor(x, y, size, speed, opacity) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
        this.opacity = opacity;
        this.angle = Math.random() * Math.PI * 2;
    }

    update() {
        this.y -= this.speed;
        this.x += Math.sin(this.angle) * 0.5;
        this.opacity -= 0.002;
    }

    draw() {
        ctx.globalAlpha = this.opacity;
        ctx.font = `${this.size}px Arial`;
        ctx.fillStyle = "#ff4e50";
        ctx.shadowColor = "#ff4e50";
        ctx.shadowBlur = 15;
        ctx.fillText("💖", this.x, this.y);
        ctx.globalAlpha = 1;
    }
}

function createHeart(x = Math.random() * canvas.width, y = canvas.height + 20) {
    const size = Math.random() * 20 + 15;
    const speed = Math.random() * 2 + 1;
    const opacity = Math.random() * 0.8 + 0.2;
    
    hearts.push(new Heart(x, y, size, speed, opacity));
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    hearts.forEach((heart, index) => {
        heart.update();
        heart.draw();
        if (heart.opacity <= 0) {
            hearts.splice(index, 1);
        }
    });

    requestAnimationFrame(animate);
}

setInterval(createHeart, 200);
animate();

document.addEventListener("click", (event) => {
    for (let i = 0; i < 5; i++) {  
        let offsetX = Math.random() * 40 - 20;
        let offsetY = Math.random() * 40 - 20;
        createHeart(event.clientX + offsetX, event.clientY + offsetY);
    }
});
