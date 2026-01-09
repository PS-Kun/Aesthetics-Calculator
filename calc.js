const cursor = document.querySelector(".cursor");
const body = document.querySelector(".main");
const audio = document.querySelector("audio");
const btns = document.querySelectorAll(".btns");

body.addEventListener("mousemove", (dets) => {

    gsap.to(cursor, {
        x: dets.pageX,
        y: dets.pageY,
        duration: 1,
        ease: "back.out"


    })

})

btns.forEach(btn => {btn.addEventListener("click", () => {

    audio.currentTime = 0; // reset to start
    audio.play();
})})

gsap.from(".calculator", {
    y: 30,
    opacity: 0,
    
    
    scrollTrigger:{
        trigger: ".calculator",
        scroller: "body",
        markers: false,
        start: "top 60%",
        end: "top 30%",
        scrub: true,

    }


})