gsap.registerPlugin(ScrollTrigger);
let box1 = document.getElementById("container1");
let box2 = document.getElementById("container2");
let button = document.getElementById("btn1");
let ocean1 = true;
let ocean = document.getElementById("ocean");

// console.log(box1);
let tl1 = gsap.timeline({id:"intro"});
    tl1.from(box1, {autoAlpha:0, duration: 2},"+=2");
let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: box2,
        start: "top 75%",
        end: "bottom bottom",
        markers:  {  startColor: "red",
        endColor: "green",
        fontSize: "18px",
        fontWeight: "bold",
        indent: 20
        },    
        scrub: 2,
        // pin: true,
        // start: "70px 70px",
        pinSpacing: true,
    }
});
tl2.fromTo(
    box2, {autoAlpha:0}, {autoAlpha:1, duration:2}
);
button.addEventListener("click", showImage)
function showImage() {
    if(ocean1 == true) {
        ocean.classList.add("ocean1");
        // ocean.src = "ocean1.jpg";
        // ocean.style.display = "block";
        ocean1 = false;
    }
    else {
        ocean.src = "ocean2.jpg";
        ocean.style.display = "block";
        ocean1 = true;
    }

}