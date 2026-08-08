console.log("✨ Particle System Loaded");



const particles = [];



// 创建粒子

function createParticle(x,y){


    particles.push({

        x:x,

        y:y,


        size:
        Math.random()*5+2,


        speedX:
        (Math.random()-0.5)*8,


        speedY:
        (Math.random()-0.5)*8,
 

        alpha:1,


        color:
        Math.random()>0.5
        ?
        "255,220,120"
        :
        "150,200,255"


    });

}




// 更新粒子

function updateParticles(){


    for(let i=particles.length-1;i>=0;i--){


        let p=particles[i];


        p.x += p.speedX;

        p.y += p.speedY;


        p.alpha -=0.02;



        if(p.alpha<=0){

            particles.splice(i,1);

        }


    }


}




// 绘制粒子

function drawParticles(){


    particles.forEach(p=>{


        ctx.shadowBlur = 15;

        ctx.shadowColor =
        `rgba(${p.color},${p.alpha})`;
        ctx.beginPath();


        ctx.arc(

            p.x,

            p.y,

            p.size,

            0,

            Math.PI*2

        );



        ctx.fillStyle=
        `rgba(${p.color},${p.alpha})`;


        ctx.fill();
        ctx.shadowBlur = 0;


    });


}
function particleLoop(){


    updateParticles();


    drawParticles();


    requestAnimationFrame(
        particleLoop
    );


}


particleLoop();