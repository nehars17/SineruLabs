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
// document.addEventListener('scroll', () => {
//   const scrollText = document.querySelector('.scroll-text');
//   const words = document.querySelectorAll('.word');
//   const scrollPosition = window.scrollY;
//   const pageSegment = document.querySelector('.page-content');


//   // Adjust the top position based on scroll position
//   scrollText.style.top = `${100 - (scrollPosition / window.innerHeight) * 400}%`;

//   words.forEach((word, index) => {
//       const revealPoint = (index + 1) * window.innerHeight / (words.length * 4 );
//       if (scrollPosition >= revealPoint) {
//           word.style.opacity = 1;
//       } else {
//           word.style.opacity = 0;
//       }
//   });
//   //make div segment appear 
//   pageSegment.style.display = 'block' ;

// });


