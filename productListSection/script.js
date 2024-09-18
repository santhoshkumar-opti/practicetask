const imagesHolders = {
  favourite: "https://i.postimg.cc/8zzffMNS/favourit.png",
  item1: "https://i.postimg.cc/7ZtG3hZT/item-1-web.png",
  item2: "https://i.postimg.cc/9f44J2Dg/item-2-web.png",
  item3: "https://i.postimg.cc/7605rNMg/item-3-web.png",
  item4: "https://i.postimg.cc/yxKk1Sv2/item-4-web.png",
  item5: "https://i.postimg.cc/gjKrnk7j/item-5-web.png",
  item6: "https://i.postimg.cc/CMCRvmK0/item-6-web.png",
  item7: "https://i.postimg.cc/L6HnGLq1/item-7-web.png",
  item8: "https://i.postimg.cc/hPpfnvx3/item-8-web.png",
};

// https://postimg.cc/gallery/VCY609m
const dummyData = [
  {
    main: "electronics",
    title: "Floor Lamp With Polyester Shade",
    price: "399",
    image: imagesHolders.item1,
  },
  {
    main: "electronics",
    title: "Led Steel Floor Lamp",
    price: "299",
    image: imagesHolders.item2,
  },
  {
    main: "Home and Decor",
    title: "Teak Garden Chair With Armrests",
    price: "999",
    image: imagesHolders.item3,
  },
  {
    main: "electronics",
    title: "Wood Outdoor Adirondack Chair",
    price: "1099",
    image: imagesHolders.item4,
  },
  {
    main: "Beauty and Personal Care",
    title: "Water Resistant Sunscreen",
    price: "199",
    image: imagesHolders.item5,
  },
  {
    main: "Beauty and Personal Care",
    title: "Non-Oily Sunscreen",
    price: "299",
    image: imagesHolders.item6,
  },
  {
    main: "Groceries and Automotive",
    title: "Perspiciatis Unde Omnis",
    price: "1299",
    image: imagesHolders.item7,
  },
  {
    main: "Groceries and Automotive",
    title: "Neque Porro Amest",
    price: "250",
    image: imagesHolders.item8,
  },
];

const mobileResponsive = 1010;

let isFirstHalfPushed = false;

function createProduct(data) {
  // Create the main product container
  const productContainer = document.createElement("div");
  productContainer.className = "product-container";

  // Create the product image container
  const productImageContainer = document.createElement("div");
  productImageContainer.className = "product-image-container";

  // Create the product image
  const productImage = document.createElement("img");
  productImage.src = data.image;
  productImage.className = "product-image";
  productImage.alt = "item 1";

  // Create the favorite icon
  const favouriteIcon = document.createElement("img");
  favouriteIcon.src = "https://i.postimg.cc/rm3MMhLf/favourit.png";
  favouriteIcon.className = "product-favourite";
  favouriteIcon.width = 19;
  favouriteIcon.height = 19;
  favouriteIcon.alt = "favourite icon";

  // Create the add to cart button
  const addToCartButton = document.createElement("button");
  addToCartButton.type = "button";
  addToCartButton.className = "product-addcart";
  addToCartButton.innerText = "add to cart";

  // Append image and button to product image container
  productImageContainer.appendChild(productImage);
  productImageContainer.appendChild(favouriteIcon);
  productImageContainer.appendChild(addToCartButton);

  // Create the product details container
  const productDetailContainer = document.createElement("div");
  productDetailContainer.className = "product-detail-container";

  // Create the main category paragraph
  const mainCategory = document.createElement("p");
  mainCategory.className = "main-catagory";
  mainCategory.innerText = data.main;

  // Create the product title
  const productTitle = document.createElement("h4");
  productTitle.className = "product-title";
  productTitle.innerText = data.title;

  // Create the product price
  const productPrice = document.createElement("p");
  productPrice.className = "product-price";
  productPrice.innerText = `$${data.price}`;

  // Append category, title, and price to product detail container
  productDetailContainer.appendChild(mainCategory);
  productDetailContainer.appendChild(productTitle);
  productDetailContainer.appendChild(productPrice);

  // Append the image container and detail container to the main product container
  productContainer.appendChild(productImageContainer);
  productContainer.appendChild(productDetailContainer);
  return productContainer;
}

function addProducts() {
  const productContainer = document.querySelector(".products-container");

  let duplicatedData = [...dummyData];

  if (checkMobileSize(mobileResponsive)) {
    const indexs = isFirstHalfPushed ? [4] : [0, 4];

    isFirstHalfPushed = !isFirstHalfPushed;

    duplicatedData = dummyData.slice(...indexs);
  } else {
    isFirstHalfPushed = false
  }

  duplicatedData.forEach((list) =>
    productContainer.appendChild(createProduct(list))
  );
}

function attachEventListeners() {
  // Tab functionality
  const tabs = document.querySelectorAll(".tab");
  const discoverMoreElement = document.querySelector("#discover-more");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Remove active class from all tabs
      tabs.forEach((t) => t.classList.remove("active"));
      // Remove active class from all contents

      // Add active class to clicked tab
      tab.classList.add("active");

      // Scroll to the active tab if on mobile
      tab.scrollIntoView({ behavior: "smooth", inline: "center" });
    });
  });

  discoverMoreElement.addEventListener("click", () => {
    addProducts();
  });
}

function createTrendProductsSection() {
  // Create the main test container
  const testContainer = document.createElement("div");
  testContainer.className = "test-container";

  // Create the title container
  const titleContainer = document.createElement("div");
  titleContainer.className = "title-container";

  // Create the title (h2) element
  const title = document.createElement("h2");
  title.innerText = "Our Trend Products";

  // Append title to title container
  titleContainer.appendChild(title);

  // Create the tabs container
  const tabsContainer = document.createElement("div");
  tabsContainer.className = "tabs";
  tabsContainer.id = "tabContainer";

  // Array of tab names
  const tabs = [
    "All",
    "Electronics",
    "Beauty and Personal Care",
    "Groceries and Automotive",
    "Home and Decor",
    "Fashion and Accessories",
  ];

  // Create each tab and append to tabs container
  tabs.forEach((tabName, index) => {
    const tab = document.createElement("div");
    tab.className = index === 0 ? "tab active" : "tab";
    tab.innerText = tabName;
    tabsContainer.appendChild(tab);
  });

  // Create the products container
  const productsContainer = document.createElement("div");
  productsContainer.className = "products-container";

  // Create the discover more container
  const discoverContainer = document.createElement("div");
  discoverContainer.className = "discover-container";

  // Create the discover more paragraph
  const discoverMore = document.createElement("p");
  discoverMore.id = "discover-more";
  discoverMore.innerText = "discover more";

  // Append the discoverMore paragraph to the discover container
  discoverContainer.appendChild(discoverMore);

  // Append everything to the main test container
  testContainer.appendChild(titleContainer);
  testContainer.appendChild(tabsContainer);
  testContainer.appendChild(productsContainer);
  testContainer.appendChild(discoverContainer);

  // Append the test container to the body (or another parent element)
  // document.body.appendChild(testContainer);

  return testContainer;
}

function createPlpSectionAndAttachEvent(element) {
  // attach test class in body element
  document.body.classList.add("test-8-product-list-section");

  if (!document.querySelector(".test-container")) {
    element.appendChild(createTrendProductsSection());
  }

  // on initial loaded
  addProducts();
  attachEventListeners();
}

// Check if the current window width is below or equal to the specified value
function checkMobileSize(value) {
  return window.innerWidth <= value;
}

document.addEventListener(
  "DOMContentLoaded",
  createPlpSectionAndAttachEvent(document.body)
);
