var tl = gsap.timeline();

const hamburger = document.querySelector(".hamburger");
const closed = document.querySelector(".close");



hamburger.addEventListener("click" , () =>{
 tl.play()
})
closed.addEventListener("click" , () =>{
 tl.reverse()
})

tl.to(".right", {
  x: "0%",
  duration: 0.5,
  ease: "power2.inOut",
});

tl.from(".right p", {
  x: "15%",
  duration: 0.3,
  stagger: 0.2,
  opacity:0
});

tl.pause()