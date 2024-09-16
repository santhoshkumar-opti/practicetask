const mobileResponsive = 1010;

function createFooter() {
  // Create the footer element
  const footer = document.createElement('footer');
  footer.className = 'footer';

  // Create the reset-div container
  const resetDiv = document.createElement('div');
  resetDiv.className = 'reset-div';

  // Create the footer-info-container
  const footerInfoContainer = document.createElement('div');
  footerInfoContainer.className = 'footer-info-container reset-div';

  // Create the org-info-container
  const orgInfoContainer = document.createElement('div');
  orgInfoContainer.className = 'org-info-container reset-div';

  // Create and append logo
  const logo = document.createElement('img');
  logo.src = './assets/logo.png';
  logo.className = 'org-logo';
  logo.height = 36.75;
  logo.alt = 'Optiphoenix logo';
  orgInfoContainer.appendChild(logo);

  // Create and append address
  const address = document.createElement('p');
  address.className = 'org-address';
  address.textContent = '1002B 11th Floor, Westend mall, Janakpuri, New Delhi, Delhi 110058';
  orgInfoContainer.appendChild(address);

  // Create and append contact information
  const orgContact = document.createElement('div');
  orgContact.className = 'org-contact reset-div';
  
  const emailSpan = document.createElement('span');
  emailSpan.textContent = 'support@optiphoenix.com';
  orgContact.appendChild(emailSpan);

  const contactLine = document.createElement('div');
  contactLine.className = 'org-contact-vertical-line reset-div';
  orgContact.appendChild(contactLine);

  const phoneSpan = document.createElement('span');
  phoneSpan.textContent = '+91 000-000-0000';
  orgContact.appendChild(phoneSpan);

  orgInfoContainer.appendChild(orgContact);

  // Create the org-menus-container
  const orgMenusContainer = document.createElement('div');
  orgMenusContainer.className = 'org-menus-container reset-div';

  // Helper function to create a menu
  function createMenu(title, items) {
      const menu = document.createElement('div');
      menu.className = 'org-menu reset-div';

      const menuTileContainer = document.createElement('div');
      menuTileContainer.className = 'org-menu-tile-container reset-div';

      const menuTitle = document.createElement('p');
      menuTitle.className = 'org-menu-title';
      menuTitle.textContent = title;
      menuTileContainer.appendChild(menuTitle);

      const downArrow = document.createElement('img');
      downArrow.src = './assets/down_arrow.png';
      downArrow.alt = 'down arrow';
      downArrow.className = 'down-arrow';
      downArrow.height = 5.31;
      menuTileContainer.appendChild(downArrow);

      const upArrow = document.createElement('img');
      upArrow.src = './assets/up_arrow.png';
      upArrow.alt = 'up arrow';
      upArrow.className = 'up-arrow';
      upArrow.height = 5.31;
      menuTileContainer.appendChild(upArrow);

      menu.appendChild(menuTileContainer);

      const submenuListContainer = document.createElement('div');
      submenuListContainer.className = 'org-submenu-list-container reset-div';

      const ul = document.createElement('ul');
      items.forEach(item => {
          const li = document.createElement('li');
          li.textContent = item;
          ul.appendChild(li);
      });

      submenuListContainer.appendChild(ul);
      menu.appendChild(submenuListContainer);

      return menu;
  }

  // Create menus and append them
  const companyMenu = createMenu('company', ['about us', 'careers', 'Affiliates', 'Blog', 'Contact Us']);
  const shopMenu = createMenu('shop', ['new arrivals', 'Accessories', 'Men', 'Women', 'Shop All']);
  const helpMenu = createMenu('help', ['Customer Service', 'My Account', 'Find a Store', 'Legal & Privacy', 'Contact', 'Gift Card']);

  orgMenusContainer.appendChild(companyMenu);
  orgMenusContainer.appendChild(shopMenu);
  orgMenusContainer.appendChild(helpMenu);

  // Create the org-newsletter
  const orgNewsletter = document.createElement('div');
  orgNewsletter.className = 'org-newsletter reset-div';

  const newsletterTitle = document.createElement('p');
  newsletterTitle.className = 'org-newsletter-title';
  newsletterTitle.textContent = 'subscribe';
  orgNewsletter.appendChild(newsletterTitle);

  const newsletterDescription = document.createElement('p');
  newsletterDescription.className = 'org-newsletter-description';
  newsletterDescription.textContent = 'Be the first to get the latest news about trends, promotions, and much more!';
  orgNewsletter.appendChild(newsletterDescription);

  const newsletterJoinContainer = document.createElement('div');
  newsletterJoinContainer.className = 'org-newsletter-join-container reset-div';

  const emailInput = document.createElement('input');
  emailInput.type = 'text';
  emailInput.name = 'email';
  emailInput.id = 'email';
  emailInput.className = 'org-newsletter-join-input';
  emailInput.placeholder = 'Your Email';
  newsletterJoinContainer.appendChild(emailInput);

  const joinButton = document.createElement('button');
  joinButton.type = 'button';
  joinButton.id = 'register-newsletter';
  joinButton.className = 'org-newsletter-join-button';
  joinButton.textContent = 'Join';
  newsletterJoinContainer.appendChild(joinButton);

  const emailError = document.createElement('div');
  emailError.id = 'emailError';
  emailError.className = 'validation-error reset-div';
  newsletterJoinContainer.appendChild(emailError);

  orgNewsletter.appendChild(newsletterJoinContainer);

  // Create the copyrights container
  const copyrightsContainer = document.createElement('div');
  copyrightsContainer.className = 'copyrights-container reset-div';

  const copyrightsText = document.createElement('p');
  copyrightsText.textContent = 'Copyrights © 2024. All rights reserved OptiPhoenix.';
  copyrightsContainer.appendChild(copyrightsText);

  // Assemble the footer
  footerInfoContainer.appendChild(orgInfoContainer);
  footerInfoContainer.appendChild(orgMenusContainer);
  footerInfoContainer.appendChild(orgNewsletter);
  resetDiv.appendChild(footerInfoContainer);
  footer.appendChild(resetDiv);
  footer.appendChild(copyrightsContainer);

  // Append the footer to the body or another element
  // document.body.appendChild(footer);
  return footer
}

function attachEventListeners() {
  const emailInput = document.querySelector("#email");
  const emailError = document.querySelector("#emailError");
  const joinButton = document.querySelector("#register-newsletter");

  const accordianHeaders = document.querySelectorAll(".org-menu-tile-container");

  joinButton.addEventListener("click", () => {
    const emailValue = emailInput.value.trim();
    emailError.textContent = "";

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValue) {
      emailError.textContent = "Please complete this required field.";
      return;
    }
    if (!emailRegex.test(emailValue)) {
      emailError.textContent = "Email must be formatted correctly.";
      return;
    }

    emailInput.value = "";
  });

  accordianHeaders.forEach((eachHeader) => {
    eachHeader.addEventListener("click", () => {
      if (!checkMobileSize(mobileResponsive)) {
        return;
      }

      toggleAccordion(eachHeader.parentNode);
    });
  });

  if (checkMobileSize(mobileResponsive)) {
    // default collapsed
    document
      .querySelectorAll(".org-menu")
      .forEach((value) => value.classList.add("accordian", "active"));
  }
}

// Toggle the visibility of accordion sections based on category ID
function toggleAccordion(parenNode) {
  const allContents = document.querySelectorAll(".org-menu");

  const isCurrentlyOpen = parenNode.className.includes("active");
  if (document.querySelectorAll('.org-menu.accordian.active').length > 1) {
    parenNode.classList[isCurrentlyOpen ? 'remove': 'add']("active");
  } else {
    allContents.forEach((item) => {
      item.classList.remove("active");
    });
  }

  if (!isCurrentlyOpen) {
    parenNode.classList.add("active");
  }
}

// Handle window resize to adjust menu display
function reportWindowSize() {
  if (checkMobileSize(mobileResponsive)) {
    // default collapsed
    document
      .querySelectorAll(".org-menu")
      .forEach((value) => value.classList.add("accordian", "active"));
  }
  if (window.innerWidth > mobileResponsive) {
    document
      .querySelectorAll(".org-menu")
      .forEach((value) => value.classList.remove("accordian", "active"));
  }
}

window.onresize = reportWindowSize;

// Check if the current window width is below or equal to the specified value
function checkMobileSize(value) {
  return window.innerWidth <= value;
}

document.addEventListener("DOMContentLoaded", attachFooterAndListenForEvents(document.body));



function attachFooterAndListenForEvents(element) {

  document.body.classList.add('test-6-footer-section')

  if (!document.querySelector('.footer')) {
    element.insertAdjacentElement('afterbegin', createFooter())
  }


  attachEventListeners()
}