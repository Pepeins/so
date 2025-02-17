const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [];
const heartColors = ["#ff4e50", "#fc913a", "#f9d62e", "#eae374", "#e2f3c4"];
const maxHearts = 500;

class Heart {
    constructor(x, y, size, speed, opacity, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
        this.opacity = opacity;
        this.color = color;
        this.angle = Math.random() * Math.PI * 2;
        this.rotation = Math.random() * 360;
    }

    update() {
        this.y -= this.speed;
        this.x += Math.sin(this.angle) * 0.5;
        this.opacity -= 0.002;
        this.rotation += 0.5;
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.font = `${this.size}px Arial`;
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 15;
        ctx.fillText("??", -this.size / 2, this.size / 2);
        ctx.restore();
    }
}

function createHeart(x = Math.random() * canvas.width, y = canvas.height + 20) {
    if (hearts.length >= maxHearts) return; 
    const size = Math.random() * 20 + 15;
    const speed = Math.random() * 2 + 1;
    const opacity = Math.random() * 0.8 + 0.2;
    const color = heartColors[Math.floor(Math.random() * heartColors.length)];
    
    hearts.push(new Heart(x, y, size, speed, opacity, color));
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    hearts.forEach((heart, index) => {
        heart.update();
        heart.draw();
        if (heart.opacity <= 0 || heart.y + heart.size < 0) {
            hearts.splice(index, 1);
        }
    });

    requestAnimationFrame(animate);
}

setInterval(createHeart, 100);

document.addEventListener("click", (event) => {
    for (let i = 0; i < 10; i++) {  
        let offsetX = Math.random() * 40 - 20;
        let offsetY = Math.random() * 40 - 20;
        createHeart(event.clientX + offsetX, event.clientY + offsetY);
    }
});

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const fireworksContainer = document.querySelector(".fireworks-container");

function createFirework() {
    const firework = document.createElement("div");
    firework.classList.add("firework");
    firework.style.left = `${Math.random() * 100}vw`;
    firework.style.animationDuration = `${Math.random() * 2 + 1}s`;
    fireworksContainer.appendChild(firework);

    setTimeout(() => {
        firework.remove();
    }, 3000);
}

setInterval(createFirework, 500);
