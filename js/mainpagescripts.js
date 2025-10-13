//show button and change nav bar
window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    const backToTopBtn = document.getElementById("backToTop");

    if (window.scrollY > 0) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }

    if (window.scrollY > 70) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

//back to top button function
document.addEventListener("DOMContentLoaded", function () {
    const backToTopBtn = document.getElementById("backToTop");
    backToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

//section click zone function
document.querySelectorAll('main section').forEach(el => {
    el.addEventListener('click', () => {
        const url= el.getAttribute('data-url');
        if(url) {
            window.location.href = url;
        }
    });
});

//typewriter effetcs
const sections = document.querySelectorAll(".type-section");
sections.forEach(section => {
  const typewriterP = section.querySelector(".typewriter");
  const text = 'Click to read more'; 
  let charIndex = 0;
  let typingTimeout;
  function typeWriter() {
    if (charIndex < text.length) {
      typewriterP.textContent += text.charAt(charIndex);
      charIndex++;
      typingTimeout = setTimeout(typeWriter, 50);
    } else {
      typewriterP.classList.remove("blink");
    }
  }
  section.addEventListener("mouseenter", () => {
    clearTimeout(typingTimeout);
    charIndex = 0;
    typewriterP.textContent = "";
    typewriterP.classList.add("blink");
    typeWriter();
  });
  section.addEventListener("mouseleave", () => {
    clearTimeout(typingTimeout);
    charIndex = 0;
    typewriterP.textContent = "";
    typewriterP.classList.remove("blink");
  });
});

//reveal effetc on sections
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
}, { threshold: 0.20 });
reveals.forEach(reveal => observer.observe(reveal));