console.log("🎁 Gift System Loaded");



window.addEventListener("DOMContentLoaded",()=>{


    const giftBox =
document.getElementById("giftBox");


const birthdayMessage =
document.querySelector(".birthday-message");


const wishCards =
document.querySelectorAll(".wish-card");



if(giftBox){


    giftBox.addEventListener("click",()=>{


        console.log("🎁 礼物被打开");


        // 礼物打开动画
        giftBox.classList.add("open");



        // 粒子效果
        for(let i=0;i<40;i++){

            createParticle(

                window.innerWidth/2,

                window.innerHeight/2

            );

        }



        // 礼物消失
        setTimeout(()=>{

            giftBox.classList.add("hide");

        },1200);



        // 生日文字出现
        setTimeout(()=>{

            birthdayMessage.classList.add("show");
                
                console.log("生日文字触发");

        },1500);



        // 祝福卡片逐个出现
        wishCards.forEach((card,index)=>{


            setTimeout(()=>{

                card.classList.add("show");

            },3000 + index * 1000);


        });


    });

}
})
const starBtn = document.getElementById("starBtn");

if(starBtn){

    starBtn.addEventListener("click",()=>{

        alert("🌌 星空拼字功能开发中，即将上线！");

    });

}
