// Define the submenu categories
const subMenuList = {
  1: ["Smartphones", "Phone"],
  2: [
    "Tops",
    "Women's Dresses",
    "Women's Shoes",
    "Men's Shirts",
    "Men's Shoes",
    "Men's Watches",
    "Women's Watches",
    "Women's Bags",
    "Women's Jewellery",
    "Sunglasses",
  ],
  3: ["Home Decoration", "Furniture", "Lighting"],
  4: ["Fragrances", "Skincare"],
  5: ["Groceries", "Automotive", "Motorcycle"],
};

// Define mobile responsive breakpoint
const mobileResponsive = 1010;

// Create a list item with a text and append it to the parent
function createListItem(parent, text) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.textContent = text;
  a.href = "javascript:void(0)"; // Modify this if needed
  li.appendChild(a);
  parent.appendChild(li);
}

// Toggle the visibility of accordion sections based on category ID
function toggleAccordion(categoryId) {
  const allContents = document.querySelectorAll(".test-5-mobile-sub-catagory");
  const currentOpenElement = Array.from(allContents).find(
    (category) => category.getAttribute("data-category") == categoryId
  );

  if (!currentOpenElement) return;

  const isCurrentlyOpen = currentOpenElement.style.display === "block";

  allContents.forEach((item) => {
    item.style.display = "none";
  });

  if (!isCurrentlyOpen) {
    currentOpenElement.style.display = "block";
  }
}

// Initialize event listeners and handle DOM content
 function handleTransitions () {
  const shopItem = document.querySelector("#shop-desktop");
  const subMenu = document.querySelector("#shop-desktop-dropdown");
  const mainCategories = document.querySelectorAll(
    "#test-5-main-categories-list > li"
  );
  const subCategories = document.querySelector("#test-5-sub-categories-list");
  const humburger = document.querySelector(".test-5-menu-bars");
  const humburgerClose = document.querySelector(".test-5-menu-close");
  const subNavBar = document.querySelector("#test-5-sub-navbar");
  const subMenuAccordianLists = document.querySelectorAll(
    ".test-5-mobile-sub-catagory"
  );
  const shopBack = document.querySelector("#test-5-shop-back");

  // Show sub-menu on mouseover for desktop
  shopItem.addEventListener("mouseover", function () {
    if (checkMobileSize(mobileResponsive)) return;

    shopItem.classList.add("hover-active");
    if (subMenu) {
      subMenu.style.display = "block";
      subMenu.style.height = "406px";
    }
  });

  // Show mobile sub-menu on click
  shopItem.addEventListener("click", function () {
    if (!checkMobileSize(mobileResponsive)) return;

    if (subMenu) {
      subMenu.classList.add("test-5-dropdown-menu-mobile");
    }
  });

  // Go back to the previous menu in mobile view
  shopBack.addEventListener("click", () => {
    resetSubcatagoryAndRemoveClass();
  });

  // Hide sub-menu on mouseout for desktop
  shopItem.addEventListener("mouseleave", function (event) {
    if (checkMobileSize(mobileResponsive)) return;

    if (!subMenu.contains(event.toElement)) {
      shopItem.classList.remove("hover-active");
      if (subMenu) {
        subMenu.style.display = "none";
        subMenu.style.height = "0px";
      }
    }
  });

  // Hide sub-menu on mouseleave for desktop
  subMenu.addEventListener("mouseleave", function () {
    if (checkMobileSize(mobileResponsive)) return;

    shopItem.classList.remove("hover-active");
    if (subMenu) {
      subMenu.style.display = "none";
      subMenu.style.height = "0px";
    }
  });

  // Display subcategories on mouseover
  mainCategories.forEach((category) => {
    category.addEventListener("mouseover", () => {
      subCategories.innerHTML = "";

      if (checkMobileSize(mobileResponsive)) return;

      const categoryId = category.getAttribute("data-category");
      const lists = subMenuList[categoryId];
      lists.forEach((list) => createListItem(subCategories, list));
    });

    // Toggle accordion on click for mobile
    category.addEventListener("click", () => {
      if (!checkMobileSize(mobileResponsive)) return;

      const categoryId = category.getAttribute("data-category");
      toggleAccordion(categoryId);
    });
  });

  // Hide subcategories when mouse leaves the categories area
  document
    .querySelector(".test-5-dynamic-cotegories-container")
    .addEventListener("mouseleave", () => {
      if (checkMobileSize(mobileResponsive)) return;

      subCategories.innerHTML = "";
    });

  // Show mobile menu
  humburger.addEventListener("click", () => {
    humburgerClose.style.display = "flex";
    document.body.classList.add("test-5-mobile-body");
    subNavBar.classList.add("test-5-sub-navbar-container-mobile");
  });

  // Close mobile menu
  humburgerClose.addEventListener("click", () => {
    resetEntireMobileResponsive();
  });

  // Reset mobile menu and submenu
  function resetEntireMobileResponsive() {
    humburgerClose.style.display = "none";
    document.body.classList.remove("test-5-mobile-body");
    subNavBar.classList.remove("test-5-sub-navbar-container-mobile");
    resetSubcatagoryAndRemoveClass();
  }

  // Reset submenu
  function resetSubcatagoryAndRemoveClass() {
    subMenuAccordianLists.forEach((item) => {
      item.style.display = "none";
    });
    if (subMenu) {
      subMenu.classList.remove("test-5-dropdown-menu-mobile");
    }
  }

  // Handle window resize to adjust menu display
  function reportWindowSize() {
    if (shopItem && subMenu && window.innerWidth <= mobileResponsive) {
      if (shopItem.classList.contains("hover-active")) {
        shopItem.classList.remove("hover-active");
        subMenu.style.display = "none";
        subMenu.style.height = "0px";
      }
    }

    if (window.innerWidth > mobileResponsive) {
      if (document.body.classList.contains("test-5-mobile-body")) {
        resetEntireMobileResponsive();
      }
    }
  }

  window.onresize = reportWindowSize;
};

// Check if the current window width is below or equal to the specified value
function checkMobileSize(value) {
  return window.innerWidth <= value;
}

function createBaseElement() {

  if (!document.querySelector('.test-5-container')) {
    const maincontainerElement = document.createElement("div");
    maincontainerElement.className = "test-5-container";
  
    const htmlInsert = `
    <div class="test-5-main-navbar-container">
              <div class="main-container-1">
                  <div class="test-5-menu-close">
                      <span>
                          &#x2715;
                      </span>
                  </div>
                  <div class="test-5-menu-bars">
                      <hr />
                      <hr />
                      <hr />
                  </div>
                  <div>
                      <img src="./assets/logo.png" class="test-5-logo" alt="Optiphoenix logo" />
                  </div>
                  <div class="test-5-search-container">
                      <input type="text" class="test-5-search-input" placeholder="Search Products" />
                      <img src="./assets/search.png" class="test-5-search-icon" alt="Search logo" />
                  </div>
                  <div class="test-5-icons-container">
                      <div class="test-5-search-mobile-icon">
                          <img src="./assets/search_mobile.png" alt="mobile responsive search icon" />
                      </div>
                      <div class="test-5-user-icon">
                          <img src="./assets/user.png" alt="user-profile" />
                      </div>
                      <div class="test-5-cart-icon">
                          <img src="./assets/cart.png" alt="cart" />
                          <div class="test-5-cart-count">
                              <p>2</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div id="test-5-sub-navbar" class="test-5-sub-navbar-container">
              <nav class="test-5-desktop">
                  <ul class="test-5-desktop-navbar">
                      <li class="">
                          <a href="javascript:void(0)"> Home </a>
                      </li>
                      <li id="shop-desktop">
                          <a href="javascript:void(0)">
                              Shop
                              <img src="./assets/down_arrow.png" class="down_arrow" />
                              <img src="./assets/up_arrow.png" class="up_arrow" />
                          </a>
                          <img src="./assets/up_arrow.png" width="9" height="6" class="right-arrow" />
                      </li>
                      <li>
                          <a href="javascript:void(0)"> Blog </a>
                      </li>
                      <li>
                          <a href="javascript:void(0)"> About </a>
                      </li>
                      <li>
                          <a href="javascript:void(0)"> Contact </a>
                      </li>
                  </ul>
              </nav>
          </div>
          <div id="shop-desktop-dropdown" class="test-5-dropdown-menu">
              <div class="shop-desktop-dropdown-container">
                  <div class="test-5-dynamic-cotegories-container">
                      <div class="test-5-main-categories-container">
                          <div id="test-5-shop-back" class="test-5-mobile-back-shop">
                              <img src="./assets/up_arrow.png" width="9" height="6" class="left-arrow" />
                              <p>
                                  Shop
                              </p>
                          </div>
                          <ul id="test-5-main-categories-list">
                              <li data-category="1">
                                  <a href="javascript:void(0)">
                                      Electronics
                                  </a>
                                  <img src="./assets/up_arrow.png" width="9" height="6" class="right-arrow" />
                              </li>
                              <div data-category="1" class="test-5-mobile-sub-catagory">
                                  <ul>
                                      <li>
                                          Smartphones
                                      </li>
                                      <li>
                                          Phone
                                      </li>
                                  </ul>
                              </div>
                              <li data-category="2">
                                  <a href="javascript:void(0)">
                                      Fashion and Accessories
                                  </a>
                                  <img src="./assets/up_arrow.png" width="9" height="6" class="right-arrow" />
                              </li>
                              <div data-category="2" class="test-5-mobile-sub-catagory">
                                  <ul>
                                      <li>
                                          Tops
                                      </li>
                                      <li>
                                          Women's Dresses
                                      </li>
                                      <li>
                                          Women's Shoes
                                      </li>
                                      <li>
                                          Men's Shirts
                                      </li>
                                      <li>
                                          Men's Shoes
                                      </li>
                                      <li>
                                          Men's Watches
                                      </li>
                                      <li>
                                          Women's Watches
                                      </li>
                                      <li>
                                          Women's Bags
                                      </li>
                                      <li>
                                          Women's Jewellery
                                      </li>
                                      <li>
                                          Sunglasses
                                      </li>
                                  </ul>
                              </div>
                              <li data-category="3">
                                  <a href="javascript:void(0)">
                                      Home and Decor
                                  </a>
                                  <img src="./assets/up_arrow.png" width="9" height="6" class="right-arrow" />
                              </li>
                              <div data-category="3" class="test-5-mobile-sub-catagory">
                                  <ul>
                                      <li>
                                          Home Decoration
                                      </li>
                                      <li>
                                          Furniture
                                      </li>
                                      <li>
                                          Lighting
                                      </li>
                                  </ul>
                              </div>
                              <li data-category="4">
                                  <a href="javascript:void(0)">
                                      Beauty and Personal Care </a>
                                  <img src="./assets/up_arrow.png" width="9" height="6" class="right-arrow" />
                              </li>
                              <div data-category="4" class="test-5-mobile-sub-catagory">
                                  <ul>
                                      <li>
                                          Fragrances
                                      </li>
                                      <li>
                                          Skincare
                                      </li>
                                  </ul>
                              </div>
                              <li data-category="5">
                                  <a href="javascript:void(0)">
                                      Groceries and Automotive
                                  </a>
                                  <img src="./assets/up_arrow.png" width="9" height="6" class="right-arrow" />
                              </li>
                              <div data-category="5" class="test-5-mobile-sub-catagory">
                                  <ul>
                                      <li>
                                          Groceries
                                      </li>
                                      <li>
                                          Automotive
                                      </li>
                                      <li>
                                          Motorcycle
                                      </li>
                                  </ul>
                              </div>
                          </ul>
                      </div>
                      <div class="test-5-sub-categories-container">
                          <ul id="test-5-sub-categories-list">
                          </ul>
                      </div>
                  </div>
                  <div class="test-5-other-pages">
                      <ul>
                          <li>
                              <a href="javascript:void(0)"> Collection Grid </a>
                          </li>
                          <li>
                              <a href="javascript:void(0)"> Simple Product </a>
                          </li>
                          <li>
                              <a href="javascript:void(0)"> Variable Product </a>
                          </li>
                          <li>
                              <a href="javascript:void(0)"> External Product </a>
                          </li>
                          <li>
                              <a href="javascript:void(0)"> Grouped Product </a>
                          </li>
                          <li>
                              <a href="javascript:void(0)"> On Sale </a>
                          </li>
                          <li>
                              <a href="javascript:void(0)"> Out of Stock </a>
                          </li>
                          <li>
                              <a href="javascript:void(0)"> Shopping Cart </a>
                          </li>
                          <li>
                              <a href="javascript:void(0)"> Checkout </a>
                          </li>
                          <li>
                              <a href="javascript:void(0)"> Order Complete </a>
                          </li>
                          <li>
                              <a href="javascript:void(0)"> Order Tracking </a>
                          </li>
      
                      </ul>
                  </div>
                  <div class="test-5-poster-container">
                      <div class="test-5-image-container">
                          <img src="./assets/static_poster.png" 
                              alt="modern static poster" />
                          <div class="test-5-poster-content">
                              <p class="test-5-new-arrivals-text">new arrivals</p>
                              <a href="javascript:void(0)"> view all </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>`;
    maincontainerElement.innerHTML = htmlInsert;
    document.body.appendChild(maincontainerElement);
  
  
    handleTransitions();
  }
}

document.addEventListener("DOMContentLoaded", createBaseElement);
