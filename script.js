const email = 'saritadevin@sinerulabs.com'; // Ensure this email is used in the contact section
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
// Animate each .textp element on scroll (no SplitText)
document.querySelectorAll('.textp').forEach((el) => {
  gsap.to(el, {
    backgroundPositionX: 0,
    ease: "none",
    scrollTrigger: {
      trigger: el,
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

// Contact Us: Gmail and Copy Email

document.addEventListener('DOMContentLoaded', function() {
  const openGmailBtn = document.getElementById('openGmailBtn');
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const copyBanner = document.getElementById('copyBanner');
  const email = 'saritadevin@sinerulabs.com';

  if (openGmailBtn) {
    openGmailBtn.addEventListener('click', function() {
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`, '_blank');
    });
  }

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', function() {
      // Fallback for older browsers
      if (navigator.clipboard) {
        navigator.clipboard.writeText(email).then(function() {
          if (copyBanner) {
            copyBanner.style.display = 'block';
            setTimeout(function() {
              copyBanner.style.display = 'none';
            }, 2000);
          }
        }, function() {
          alert('Failed to copy email.');
        });
      } else {
        // Fallback for browsers without navigator.clipboard
        const tempInput = document.createElement('input');
        tempInput.value = email;
        document.body.appendChild(tempInput);
        tempInput.select();
        try {
          document.execCommand('copy');
          if (copyBanner) {
            copyBanner.style.display = 'block';
            setTimeout(function() {
              copyBanner.style.display = 'none';
            }, 2000);
          }
        } catch (err) {
          alert('Failed to copy email.');
        }
        document.body.removeChild(tempInput);
      }
    });
  }
});

