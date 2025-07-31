gsap.from(".page1 .box", {
  scale: 0.6,
  delay: 1,
  duration: 2,
  rotate: 360,
});

gsap.to(".page2 h1", {
  transform: "translateX(-180%)",
  scrollTrigger: {
    trigger: ".page2",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -100%",
    scrub: 2,
    pin: true,
  },
});
