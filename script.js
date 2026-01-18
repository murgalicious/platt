function topFunction() {
  document.documentElement.scrollTop = 0;
}

//Auto-type
var typed = new Typed(".auto-typed", {
  strings: ["gärna.", "professionellt.", "snabbt."],
  typeSpeed: 100,
  backSpeed: 10,
  loop: true,
});

//Scroll 1by1
window.addEventListener("scroll", muncul);
function muncul() {
  let elements = document.querySelectorAll(".naik");
  for (let i = 0; i < elements.length; i++) {
    let tinggiLayar = window.innerHeight;
    let jarakAtasElemen = elements[i].getBoundingClientRect().top;
    let ukuranScroll = 5;

    if (jarakAtasElemen < tinggiLayar - ukuranScroll) {
      elements[i].classList.add("tampil");
    } else {
      elements[i].classList.remove("tampil");
    }
  }
}

const spans = document.querySelectorAll("h1 span");
spans.forEach((span) =>
  span.addEventListener("mouseover", function (e) {
    span.classList.add("animated", "rubberBand");
  })
);
spans.forEach((span) =>
  span.addEventListener("mouseout", function (e) {
    span.classList.remove("animated", "rubberBand");
  })
);

