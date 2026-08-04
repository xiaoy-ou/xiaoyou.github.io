console.log("☄️ Meteor System Loaded");


// 流星数组

const meteors = [];


// 创建流星

function createMeteor(){


    meteors.push({

        x: Math.random() * canvas.width,

        y: -50,


        speedX: -(Math.random() * 7 + 5),

        speedY: Math.random() * 7 + 8,

        length: Math.random() * 100 + 80,


        alpha:1

    });


}



// 更新流星

function updateMeteor(){

    if(Math.random() < 0.01){

    createMeteor();

}


    for(let i = meteors.length - 1; i >=0; i--){


        let m = meteors[i];


        m.x += m.speedX;

        m.y += m.speedY;


        m.alpha -=0.01;



        if(
            m.alpha <=0 ||
            m.y > canvas.height
        ){

            meteors.splice(i,1);

        }


    }



}




// 绘制流星

function drawMeteor(){


    meteors.forEach(m=>{


        // 创建流星尾巴渐变

        let gradient = ctx.createLinearGradient(
            m.x,
            m.y,
            m.x + m.length,
            m.y - m.length
        );


        gradient.addColorStop(
            0,
            `rgba(255,255,255,${m.alpha})`
        );


        gradient.addColorStop(
            1,
            `rgba(120,180,255,0)`
        );



        ctx.beginPath();


        ctx.moveTo(
            m.x,
            m.y
        );


        ctx.lineTo(
            m.x + m.length,
            m.y - m.length
        );



        ctx.strokeStyle = gradient;


        ctx.lineWidth = 3;


        ctx.shadowBlur = 15;


        ctx.shadowColor =
        "rgba(150,200,255,.8)";



        ctx.stroke();



        // 重置阴影，避免影响星星

        ctx.shadowBlur = 0;



    });


}