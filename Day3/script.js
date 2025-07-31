const main = document.querySelector(".main");
const cursor = document.querySelector(".cursor");
const image = document.querySelector(".image");
main.addEventListener("mousemove", (dets) => {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 0.5,
    ease: "back.out(1.7)",
  });
});

image.addEventListener("mouseenter", () => {
    cursor.innerHTML ="View More"
  gsap.to(cursor,{
    height:"50px",
    width :"100px",
    borderRadius:"10px",
    ease: "power4.out"
  })
});

image.addEventListener("mouseleave", () => {
    cursor.innerHTML =""
  gsap.to(cursor,{
     height:"20px",
     width :"20px",
    borderRadius:"50%"
  })
});
