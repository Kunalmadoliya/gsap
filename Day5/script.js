var h1 = document.querySelector("h1");
var h1Text = h1.textContent;

console.log(h1Text);

var splittedText = h1Text.split("");
var clutter = "";

var halfValue = splittedText.length / 2;
splittedText.forEach((elem, idx) => {
  if (idx < halfValue) {
    clutter += `<span class="a">${elem}</span>`;
 
    
  } else {
    clutter += `<span class="b">${elem}</span>`;
  }
});

h1.innerHTML = clutter;

gsap.from("h1 .a", {
  y: 90,
  duration: 0.5,
  delay: 0.5,
  opacity: 0,
  stagger: 0.15,
});

gsap.from("h1 .b", {
  y: 90,
  duration: 0.5,
  delay: 0.5,
  opacity: 0,
  stagger: -0.15,
});
