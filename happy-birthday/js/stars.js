// ==============================
// Canvas 星空 V0.1
// ==============================

const canvas = document.getElementById("starCanvas");
const ctx = canvas.getContext("2d");

// 设置画布大小
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

// ==============================
// 星星对象
// ==============================

const stars = [];

const STAR_COUNT = 320;

// 创建星星
for (let i = 0; i < STAR_COUNT; i++) {

   stars.push({

    x: Math.random() * canvas.width,

    y: Math.random() * canvas.height,

    radius: Math.random() * 2.8 + 0.2,

    alpha: Math.random(),

    twinkle: Math.random() * 0.03 + 0.005,

    dx: (Math.random() - 0.5) * 0.03,

    dy: (Math.random() - 0.5) * 0.03,

    layer: Math.floor(Math.random() * 3)

});

}

// ==============================
// 绘制
// ==============================

function drawStars() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {

        star.alpha += star.twinkle;

        if (star.alpha >= 1 || star.alpha <= 0.2) {
            star.twinkle *= -1;
        }
        
        star.x += star.dx;
        star.y += star.dy;

        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;

        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        ctx.beginPath();

        ctx.arc(
            star.x,
            star.y,
            star.radius,
            0,
            Math.PI * 2
        );

        let color = "255,255,255";

        if (star.layer === 1) {

            color = "200,220,255";

        }

        if (star.layer === 2) {

          color = "170,200,255";

        }

        ctx.fillStyle = `rgba(${color},${star.alpha})`;

        ctx.fill();

    });
    updateMeteor();

    drawMeteor();
    
  
    requestAnimationFrame(drawStars);

}

drawStars();