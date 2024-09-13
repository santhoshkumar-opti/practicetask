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

const mobileResponsive = 1010;
function createListItem(parent, text) {
  // Create a new list item element
  const li = document.createElement("li");

  // Create a new anchor element
  const a = document.createElement("a");

  // Set the text for the anchor element
  a.textContent = text;

  // Optionally, set the href attribute for the anchor element
  a.href = "#"; // You can modify this if needed

  // Append the anchor element to the list item
  li.appendChild(a);

  // Append the list item to the parent element
  parent.appendChild(li);
}

// Function to toggle accordion sections
function toggleAccordion(categoryId) {

  const allContents = document.querySelectorAll('.test-5-mobile-sub-catagory');

  const currentOpenElement =  Array.from(allContents).find((category) => category.getAttribute("data-category") == categoryId );

  if (!currentOpenElement) {
    return;
  }
  
  // Check if the clicked section is already open
  const isCurrentlyOpen = currentOpenElement.style.display === 'block';

  // Close all accordion items
  allContents.forEach(item => {
      item.style.display = 'none';
  });

  // Toggle the clicked section if it was not already open
  if (!isCurrentlyOpen) {
    currentOpenElement.style.display = 'block';
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Get all menu items
  const shopItem = document.querySelector("#shop-desktop");
  const subMenu = document.querySelector("#shop-desktop-dropdown");
  const mainCategories = document.querySelectorAll(
    "#test-5-main-categories-list > li:nth-child(n)"
  );
  const subCategories = document.querySelector("#test-5-sub-categories-list");
  const humburger = document.querySelector(".test-5-menu-bars");
  const humburgerClose = document.querySelector(".test-5-menu-close");
  const subNavBar = document.querySelector("#test-5-sub-navbar");
  const subMenuAccordianLists = document.querySelectorAll('.test-5-mobile-sub-catagory');
  // Add event listeners to show sub-menu on mouseover
  shopItem.addEventListener("mouseover", function () {
    if (checkMobileSize(mobileResponsive)) {
      return;
    }

    shopItem.classList.add("hover-active");
    if (subMenu) {
      subMenu.style.display = "block";
      subMenu.style.height = "406px";
    }
  });

  // Add click event listner to navigator sub catagories
  shopItem.addEventListener("click", function () {
    if (!checkMobileSize(mobileResponsive)) {
      return;
    }

    if (subMenu) {
      subMenu.classList.add('test-5-dropdown-menu-mobile');
    }
  });

  // Add event listener to hide sub-menu on mouseout
  shopItem.addEventListener("mouseleave", function (event) {
    if (checkMobileSize(mobileResponsive)) {
      return;
    }
    if (!subMenu.contains(event.toElement)) {
      shopItem.classList.remove("hover-active");
      if (subMenu) {
        subMenu.style.display = "none";
        subMenu.style.height = "0px";
      }
    }
  });

  // Add event listener to hide sub-menu on mouseleave
  subMenu.addEventListener("mouseleave", function () {
    if (checkMobileSize(mobileResponsive)) {
      return;
    }

    shopItem.classList.remove("hover-active");
    if (subMenu) {
      subMenu.style.display = "none";
      subMenu.style.height = "0px";
    }
  });

  mainCategories.forEach((category) => {

    category.addEventListener("mouseover", () => {
      subCategories.innerHTML = "";

      if (checkMobileSize(mobileResponsive)) {
        return;
      }

      const categoryId = category.getAttribute("data-category");

      const lists = subMenuList[categoryId];
      lists.forEach((list) => createListItem(subCategories, list));
    });

    category.addEventListener("click", () => {

      if (!checkMobileSize(mobileResponsive)) {
        return;
      }

      const categoryId = category.getAttribute("data-category");


      toggleAccordion(categoryId);
    });
  });

  // Hide subcategories when mouse leaves the main categories area
  document
    .querySelector(".test-5-dynamic-cotegories-container")
    .addEventListener("mouseleave", () => {
      if (checkMobileSize(mobileResponsive)) {
        return;
      }

      subCategories.innerHTML = "";
    });

  function reportWindowSize() {
    if (shopItem && subMenu && window.innerWidth <= 1010) {
      if (shopItem.className.includes("hover-active")) {
        shopItem.classList.remove("hover-active");
        subMenu.style.display = "none";
        subMenu.style.height = "0px";
      }
    }
  }

  window.onresize = reportWindowSize;

  humburger.addEventListener("click", () => {
    humburgerClose.style.display = "flex";
    document.body.classList.add("test-5-mobile-body");
    subNavBar.classList.add("test-5-sub-navbar-container-mobile");
  });
  humburgerClose.addEventListener("click", () => {
    humburgerClose.style.display = "none";
    document.body.classList.remove("test-5-mobile-body");
    subNavBar.classList.remove("test-5-sub-navbar-container-mobile");
  });
});

function checkMobileSize(value) {
  return window.innerWidth <= value;
}
