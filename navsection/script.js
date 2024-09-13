const subMenuList = {
  1: ["Smartphones", "phone"],
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

document.addEventListener("DOMContentLoaded", function () {
  // Get all menu items
  const shopItem = document.querySelector("#shop-desktop");
  const subMenu = document.querySelector("#shop-desktop-dropdown");
  const mainCategories = document.querySelectorAll(
    "#test-5-main-categories-list > li:nth-child(n)"
  );
  const subCategories = document.querySelector("#test-5-sub-categories-list");
  // Add event listeners to show sub-menu on mouseover
  shopItem.addEventListener("mouseover", function () {
    shopItem.classList.add("hover-active");
    if (subMenu) {
      subMenu.style.display = "block";
      subMenu.style.height = "406px";
    }
  });

  // Add event listener to hide sub-menu on mouseout
  shopItem.addEventListener("mouseleave", function (event) {
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
    shopItem.classList.remove("hover-active");
    if (subMenu) {
      subMenu.style.display = "none";
      subMenu.style.height = "0px";
    }
  });

  mainCategories.forEach((category) => {
    category.addEventListener("mouseover", () => {
      subCategories.innerHTML = "";

      const categoryId = category.getAttribute("data-category");

      const lists = subMenuList[categoryId];
      lists.forEach((list) => createListItem(subCategories, list));
    });
  });

  // Hide subcategories when mouse leaves the main categories area
  document
    .querySelector(".test-5-dynamic-cotegories-container")
    .addEventListener("mouseleave", () => {
      subCategories.innerHTML = "";
    });

  function reportWindowSize() {
    if (shopItem && subMenu) {
      if (shopItem.className.includes("hover-active")) {
        shopItem.classList.remove("hover-active");
        subMenu.style.display = "none";
        subMenu.style.height = "0px";
      }
    }
  }

  window.onresize = reportWindowSize;
});
