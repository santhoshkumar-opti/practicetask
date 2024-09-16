const mobileResponsive = 1010;

function attachEventListeners() {
  const emailInput = document.querySelector("#email");
  const emailError = document.querySelector("#emailError");
  const joinButton = document.querySelector("#register-newsletter");

  const accordianHeaders = document.querySelectorAll(
    ".org-menu-tile-container"
  );

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

  const isCurrentlyOpen = parenNode.className.includes('active');

  allContents.forEach((item) => {
    item.classList.remove('active');
  });

  if (!isCurrentlyOpen) {
    parenNode.classList.add('active');
  }
}

// Handle window resize to adjust menu display
function reportWindowSize() {
  //   if (shopItem && subMenu && window.innerWidth <= mobileResponsive) {
  //     maincontainerElement.classList.add("test-5-mobile-body");
  //     if (shopItem.classList.contains("hover-active")) {
  //       shopItem.classList.remove("hover-active");
  //       subMenu.style.height = "";
  //     }
  //   }
  //   if (window.innerWidth > mobileResponsive) {
  //     if (maincontainerElement.classList.contains("test-5-mobile-body")) {
  //       resetEntireMobileResponsive();
  //     }
  //   }
}

window.onresize = reportWindowSize;

// Check if the current window width is below or equal to the specified value
function checkMobileSize(value) {
  return window.innerWidth <= value;
}

document.addEventListener("DOMContentLoaded", attachEventListeners);
