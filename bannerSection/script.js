let slides;
let dots;
let currentIndex = 0;

function attachEventListeners() {
  slides = document.querySelector(".slides");
  dots = document.querySelectorAll(".dot");

  document.getElementById("prev").addEventListener("click", () => {
    showSlide(currentIndex - 1);
  });

  document.getElementById("next").addEventListener("click", () => {
    showSlide(currentIndex + 1);
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const slideIndex = parseInt(dot.getAttribute("data-slide"));
      showSlide(slideIndex);
    });
  });

  // Initialize carousel
  showSlide(currentIndex);
}

function showSlide(index) {
  const totalSlides = dots.length;
  if (index >= totalSlides) index = 0;
  if (index < 0) index = totalSlides - 1;
  slides.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
  currentIndex = index;
}



attachEventListeners()