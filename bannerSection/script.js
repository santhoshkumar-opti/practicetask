let slides;
let dots;
let currentIndex = 0;

const HTML = `<div class="carousel">
            <div class="slides">
                <div class="slide slide-item-1">
                    <div class="slide-content-container">
                        <h3 class="slide-title">Floral Patterned Dresses</h3>
                        <p class="slide-description">Reflect nature's patterns on the street!</p>
                        <button class="slide-button" type="button">View Products</button>
                    </div>
                    <img src="./assets/slide_1_img.png" alt="Slide 1" class="web-slider-image" />
                    <img src="./assets/slide_1_mobile.png" alt="Slide 1" class="mobile-slider-image" />
                </div>
                <div class="slide  slide-item-2">
                    <div class="slide-content-container">
                        <h3 class="slide-title">Pink Elegance</h3>
                        <p class="slide-description">New generation approach</p>
                        <button class="slide-button" type="button">View Products</button>
                    </div>
                    <img src="./assets/slide_2_img.png" alt="Slide 2" class="web-slider-image" />
                    <img src="./assets/slide_2_mobile.png" alt="Slide 2" class="mobile-slider-image" />
                </div>
                <div class="slide  slide-item-3">
                    <div class="slide-content-container">
                        <h3 class="slide-title">Women’s Summer Collection</h3>
                        <p class="slide-description">Reflect nature's patterns on the street!</p>
                        <button class="slide-button" type="button">View Products</button>
                    </div>
                    <img src="./assets/slide_3_img.png" alt="Slide 3" class="web-slider-image" />
                    <img src="./assets/slide_3_mobile.png" alt="Slide 3" class="mobile-slider-image" />
                </div>
            </div>
            <div class="nav-buttons">
                <button id="prev">&#10094;</button>
                <button id="next">&#10095;</button>
            </div>
            <div class="dots-container">
                <div class="dot active" data-slide="0"></div>
                <div class="dot" data-slide="1"></div>
                <div class="dot" data-slide="2"></div>
            </div>
        </div>
        <div class="grid-container">
            <div class="grid-item item1">
                <img src="./assets/item_1_web.png" class="web-image" alt="" srcset="">

                <div class="content-container">
                    <h3 class="content-title">Chasing Urban Allure</h3>
                    <p class="content-description">Effortless Style for the Modern Woman</p>
                    <button class="content-button" type="button">shop now</button>
                </div>
            </div>
            <div class="grid-item item2">
                <img src="./assets/item_2_web.png" class="web-image" alt="" srcset="">

                <div class="content-container">
                    <h3 class="content-title">Adorable Essentials</h3>
                    <p class="content-description">Everyday Cuteness for Kids</p>
                    <button class="content-button" type="button">shop now</button>
                </div>
            </div>
            <div class="grid-item item3">
                <img src="./assets/item_3_web.png" class="web-image" alt="" srcset="">

                <div class="content-container">
                    <h3 class="content-title">Urban Elegance</h3>
                    <p class="content-description">Elevate Your</p>
                    <p class="content-description">Everyday Look</p>
                    <button class="content-button" type="button">shop now</button>
                </div>
            </div>
            <div class="grid-item item4">
                <p>Mastering the Art of Menswear</p>
                <p>50%</p>
                <button class="content-button" type="button">shop now</button>
            </div>
        </div>`;

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

function createShopLayout() {
  const container = document.createElement("div");
  container.classList.add("test-container");

  container.innerHTML = HTML;

  return container;
}



function addContainerAndEventListener(element) {
  // adding element class in
  document.body.classList.add("test-7-banner-section");

  if (!document.querySelector(".test-container")) {
    element.appendChild(createShopLayout());
  }

  attachEventListeners();
}


document.addEventListener(
  "DOMContentLoaded",
  addContainerAndEventListener(document.body)
);