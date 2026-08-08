console.log("✨ Starlit Wishes 已启动");

const startBtn = document.getElementById("startBtn");
const hero = document.querySelector(".hero");

const storyScreen = document.querySelector(".story-screen");
const continueBtn = document.getElementById("continueBtn");

const giftScreen = document.querySelector(".gift-screen");
const giftBox = document.getElementById("giftBox");

const music = document.getElementById("bgMusic");


// =====================
// 第一幕 → 第二幕
// =====================

if(startBtn){

    startBtn.addEventListener("click",()=>{


        // 音乐渐入
        if(music){

            music.volume = 0;

            music.play();

            let volume = 0;

            const fade = setInterval(()=>{

                if(volume < 0.35){

                    volume += 0.01;
                    music.volume = volume;

                }else{

                    clearInterval(fade);

                }

            },100);

        }


        hero.style.opacity = "0";


        setTimeout(()=>{

            hero.style.display = "none";

            storyScreen.classList.add("show");


        },800);


    });

}


// =====================
// 第二幕 → 第三幕
// =====================

continueBtn.addEventListener("click",()=>{

    storyScreen.classList.remove("show");

    setTimeout(()=>{

        giftScreen.classList.add("show");

    },800);

});


// =====================
// 礼物盒
// =====================

giftBox.addEventListener("click",()=>{

    giftBox.classList.add("open");

});

// =====================
// 第三幕 → 第四幕
// =====================

const starTrigger = document.getElementById("starTrigger");

if(starTrigger){

    starTrigger.addEventListener("click",()=>{

        console.log("🌌 进入第四幕");

        if(giftScreen){
            giftScreen.style.display = "none";
        }


        const starTextScreen =
            document.querySelector(".star-text-screen");


        if(starTextScreen){

            starTextScreen.classList.add("show");

        }


        // 启动第四幕星空文字动画
        if(typeof startStarText === "function"){

            startStarText();

        }

    });

}