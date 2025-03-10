function reveal() {
  var reveals = document.querySelectorAll(".icon-box");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);




gsap.config({ trialWarn: false });
console.clear();
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
const split = new SplitText(".textp", { type: "lines" });
split.lines.forEach((target) => {
  gsap.to(target, {
    backgroundPositionX: 0,
    ease: "none",
    scrollTrigger: {
      trigger: target,
      scrub: 1,
      start: "top center",
      end: "bottom center"
    }
  });
});


let didScroll = false;
let paralaxTitles = document.querySelectorAll('.paralax-title');

const scrollInProgress = () => {
  didScroll = true
}

const raf = () => {
  if (didScroll) {
    paralaxTitles.forEach((element, index) => {
      element.style.transform = "translateX(" + window.scrollY / 10 + "%)"
    })
    didScroll = false;
  }
  requestAnimationFrame(raf);
}


requestAnimationFrame(raf);
window.addEventListener('scroll', scrollInProgress)

