const slides = document.querySelectorAll (".banner");
const dots = document.querySelectorAll(".dot");
let slideIndex = 0;

//Funções

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
      dots[i].classList.remove("active");
    }
  
    slideIndex++;
  
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
  
    slides[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].classList.add("active");
  
    setTimeout(showSlides, 4000);
  }

showSlides ();