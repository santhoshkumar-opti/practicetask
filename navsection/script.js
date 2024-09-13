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
document.addEventListener("DOMContentLoaded", function () {
  const shopItem = document.querySelector("#shop-desktop");
  const subMenu = document.querySelector("#shop-desktop-dropdown");
  const mainCategories = document.querySelectorAll("#test-5-main-categories-list > li");
  const subCategories = document.querySelector("#test-5-sub-categories-list");
  const humburger = document.querySelector(".test-5-menu-bars");
  const humburgerClose = document.querySelector(".test-5-menu-close");
  const subNavBar = document.querySelector("#test-5-sub-navbar");
  const subMenuAccordianLists = document.querySelectorAll(".test-5-mobile-sub-catagory");
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
});

// Check if the current window width is below or equal to the specified value
function checkMobileSize(value) {
  return window.innerWidth <= value;
}
