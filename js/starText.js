console.log("⭐ 星空文字系统加载");


const textCanvas =
document.getElementById("textCanvas");

const textCtx =
textCanvas.getContext("2d");


textCanvas.style.position = "fixed";
textCanvas.style.left = "0";
textCanvas.style.top = "0";
textCanvas.style.width = "100%";
textCanvas.style.height = "100%";
textCanvas.style.zIndex = "100";


textCanvas.style.pointerEvents = "none";


document.body.appendChild(textCanvas);



function resizeTextCanvas(){

    textCanvas.width = window.innerWidth;
    textCanvas.height = window.innerHeight;

}


resizeTextCanvas();


window.addEventListener(
"resize",
resizeTextCanvas
);



let textStars = [];

let showText = false;



function createTextStars(){


    textStars = [];


    const text = "生活魚块♥️";


    const width = textCanvas.width;

    const height = textCanvas.height;



    const offCanvas =
    document.createElement("canvas");


    const offCtx =
    offCanvas.getContext("2d");


    offCanvas.width = width;

    offCanvas.height = height;



    offCtx.font =
    "bold 150px Microsoft YaHei";


    offCtx.fillStyle="white";


    offCtx.textAlign="center";

    offCtx.textBaseline="middle";



    offCtx.fillText(
        text,
        width/2,
        height/2
    );



    const data =
    offCtx.getImageData(
        0,
        0,
        width,
        height
    ).data;



    for(let y=0;y<height;y+=8){


        for(let x=0;x<width;x+=8){


            const index =
            (y*width+x)*4;



            if(data[index+3]>120){


                textStars.push({

                    x:Math.random()*width,

                    y:Math.random()*height,


                    tx:x,

                    ty:y,


                    size:2

                });


            }


        }

    }


}





function animateText(){


    if(!showText)return;



    textCtx.clearRect(
        0,
        0,
        textCanvas.width,
        textCanvas.height
    );



    textStars.forEach(star=>{


        star.x +=
        (star.tx-star.x)*0.05;


        star.y +=
        (star.ty-star.y)*0.05;



        textCtx.beginPath();


        textCtx.arc(
            star.x,
            star.y,
            star.size,
            0,
            Math.PI*2
        );


        textCtx.fillStyle="white";


        textCtx.fill();



    });



    requestAnimationFrame(
        animateText
    );


}

const starTrigger =
document.getElementById("starTrigger");


if(starTrigger){

    starTrigger.addEventListener(
    "click",
    ()=>{


        console.log("🌌 星空拼字启动");


        document
        .querySelector(".gift-screen")
        .style.display="none";


        document
        .querySelector(".star-text-screen")
        .classList.add("show");


        if(showText)return;


        showText=true;


        createTextStars();


        animateText();


    });

}



