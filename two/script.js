document.addEventListener("DOMContentLoaded", () => {
  // // element ref for opening a dialog
  // const ctaButton = document.getElementById("cta-button");
  // // Element ref for dialog overlay
  // const popupOverlay = document.getElementById("popup-overlay");
  // // Element ref for icon to close
  // const closeIcon = document.getElementById("close-icon");
  // // element ref for dismiss the dialog in no thanks text
  // const getStartedButton = document.getElementById("no-thanks");
  // //   form ref
  // const form = document.getElementById("onPopupForm");
  // // show error for name
  // const nameError = document.getElementById("nameError");
  // //   show error for email
  // const emailError = document.getElementById("emailError");
  // //   element input name
  // const nameInput = document.getElementById("name");
  // //   element input email
  // const emailInput = document.getElementById("email");

  // // Open Popup
  // openPopup();
  // ctaButton.addEventListener("click", () => {
  //   openPopup();
  // });

  // // Close Popup on clicking the close icon
  // closeIcon.addEventListener("click", () => {
  //   popupOverlay.classList.add("hidden");
  // });

  // // Close Popup on clicking outside the popup container
  // popupOverlay.addEventListener("click", (e) => {
  //   if (e.target === popupOverlay) {
  //     popupOverlay.classList.add("hidden");
  //   }
  // });

  // // Close Popup on clicking the "Let's Get Started" button
  // getStartedButton.addEventListener("click", () => {
  //   popupOverlay.classList.add("hidden");
  // });

  // // Function to open a popup
  // function openPopup() {
  //   popupOverlay.classList.remove("hidden");
  //   document.getElementById("screen1").classList.add("active");
  //   document.getElementById("screen2").classList.remove("active");

  //   // Clear input fields
  //   nameInput.value = '';
  //   emailInput.value = '';

  //   // Clear previous errors
  //   nameError.textContent = "";
  //   emailError.textContent = "";
  // }

  // form.addEventListener("submit", (event) => {
  //   event.preventDefault();
  //   submitForm();
  // });

  // // Function to validate form and switch screens
  // function submitForm() {
  //   const nameValue = nameInput.value.trim();
  //   const emailValue = emailInput.value.trim();

  //   // Clear previous errors
  //   nameError.textContent = "";
  //   emailError.textContent = "";

  //   let valid = true;

  //   // Name validation: only letters
  //   const nameRegex = /^[A-Za-z]+$/;
  //   if (!nameValue) {
  //     nameError.textContent = "Please complete this required field.";
  //     valid = false;
  //   } else if (!nameRegex.test(nameValue)) {
  //     nameError.textContent = "Name must be formatted correctly.";
  //     valid = false;
  //   }

  //   // Email validation
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailValue) {
  //     emailError.textContent = "Please complete this required field.";
  //     valid = false;
  //   } else if (!emailRegex.test(emailValue)) {
  //     emailError.textContent = "Email must be formatted correctly.";
  //     valid = false;
  //   }

  //   // If valid, switch screens
  //   if (valid) {
  //     document.getElementById("screen1").classList.remove("active");
  //     document.getElementById("screen2").classList.add("active");
  //   }
  // }

  createPopup();
});
function createPopup() {
  var popupOverlay;
  // if popup is already exist
  if (document.querySelector("#popup-overlay")) {
    popupOverlay = document.querySelector("#popup-overlay");
  } else {
    // Create the main popup overlay container
    popupOverlay = document.createElement("div");
    popupOverlay.id = "popup-overlay";
    popupOverlay.className = "popup-overlay hidden";

    // Create the popup container
    const popupContainer = document.createElement("div");
    popupContainer.className = "popup-container";

    // Create the close icon
    const closeIcon = document.createElement("span");
    closeIcon.id = "close-icon";
    closeIcon.className = "close-icon";
    closeIcon.innerHTML = "&#10005;";

    // Create the main content container
    const mainContainer = document.createElement("div");
    mainContainer.className = "main-container";

    // Create the image block
    const imageBlock = document.createElement("div");
    imageBlock.className = "image-block";

    // Create the content block
    const contentBlock = document.createElement("div");
    contentBlock.className = "content-block";

    // Create the first section (screen1)
    const screen1 = document.createElement("section");
    screen1.id = "screen1";
    screen1.className = "screen section-login";

    const screen1Title = document.createElement("h1");
    screen1Title.className = "content-title-font-style content-title-size";
    screen1Title.textContent = "Sign Up to Our Newsletter";

    const screen1Description = document.createElement("p");
    screen1Description.className =
      "content-description-font-style content-description-size";
    screen1Description.textContent =
      "Be the first to get the latest news about trends, promotions, and much more!";

    const form = document.createElement("form");
    form.id = "onPopupForm";

    const nameGroup = document.createElement("div");
    nameGroup.className = "form-group mt-1";
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "name";
    nameInput.className = "input-font-style input-size";
    nameInput.name = "name";
    nameInput.placeholder = "Your Name";
    const nameError = document.createElement("div");
    nameError.id = "nameError";
    nameError.className = "validation-error";
    nameGroup.appendChild(nameInput);
    nameGroup.appendChild(nameError);

    const emailGroup = document.createElement("div");
    emailGroup.className = "form-group mt-1";
    const emailInput = document.createElement("input");
    emailInput.type = "text";
    emailInput.id = "email";
    emailInput.className = "input-font-style input-size";
    emailInput.name = "email";
    emailInput.placeholder = "Your Email";
    const emailError = document.createElement("div");
    emailError.id = "emailError";
    emailError.className = "validation-error";
    emailGroup.appendChild(emailInput);
    emailGroup.appendChild(emailError);

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.className = "form-submit-style form-submit-font-style mt-2";
    submitButton.textContent = "Join Now";

    const noThanksButton = document.createElement("button");
    noThanksButton.type = "button";
    noThanksButton.id = "no-thanks";
    noThanksButton.className = "mt-3 ignore-button";
    noThanksButton.textContent = "No, Thanks";

    form.appendChild(nameGroup);
    form.appendChild(emailGroup);
    form.appendChild(submitButton);

    screen1.appendChild(screen1Title);
    screen1.appendChild(screen1Description);
    screen1.appendChild(form);
    screen1.appendChild(noThanksButton);

    // Create the second section (screen2)
    const screen2 = document.createElement("section");
    screen2.id = "screen2";
    screen2.className = "screen section-thankyou";

    const screen2Title = document.createElement("h1");
    screen2Title.className = "content-title-font-style content-title-size";
    screen2Title.innerHTML = "Thank you for <br/> subscribing";

    const screen2Description = document.createElement("p");
    screen2Description.className =
      "content-description-font-style content-description-size";
    screen2Description.textContent =
      "Be the first to get the latest news about trends, promotions, and much more!";

    screen2.appendChild(screen2Title);
    screen2.appendChild(screen2Description);

    // Append sections to content block
    contentBlock.appendChild(screen1);
    contentBlock.appendChild(screen2);

    // Append image block and content block to the main container
    mainContainer.appendChild(imageBlock);
    mainContainer.appendChild(contentBlock);

    // Append close icon and main container to the popup container
    popupContainer.appendChild(closeIcon);
    popupContainer.appendChild(mainContainer);

    // Append popup container to the popup overlay
    popupOverlay.appendChild(popupContainer);

    // Append popup overlay to the body
    document.body.appendChild(popupOverlay);
  }

  // Open Popup
  openPopup();

  // Close Popup on clicking the close icon
  closeIcon.addEventListener("click", () => {
    popupOverlay.classList.add("hidden");
  });

  // Close Popup on clicking outside the popup container
  popupOverlay.addEventListener("click", (e) => {
    if (e.target === popupOverlay) {
      popupOverlay.classList.add("hidden");
    }
  });

  // Close Popup on clicking the "Let's Get Started" button
  noThanksButton.addEventListener("click", () => {
    popupOverlay.classList.add("hidden");
  });

  // Function to open a popup
  function openPopup() {
    popupOverlay.classList.remove("hidden");
    screen1.classList.add("active");
    screen2.classList.remove("active");

    // Clear input fields
    nameInput.value = "";
    emailInput.value = "";

    // Clear previous errors
    nameError.textContent = "";
    emailError.textContent = "";
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    submitForm();
  });

  // Function to validate form and switch screens
  function submitForm() {
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();

    // Clear previous errors
    nameError.textContent = "";
    emailError.textContent = "";

    let valid = true;

    // Name validation: only letters
    const nameRegex = /^[A-Za-z]+$/;
    if (!nameValue) {
      nameError.textContent = "Please complete this required field.";
      valid = false;
    } else if (!nameRegex.test(nameValue)) {
      nameError.textContent = "Name must be formatted correctly.";
      valid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValue) {
      emailError.textContent = "Please complete this required field.";
      valid = false;
    } else if (!emailRegex.test(emailValue)) {
      emailError.textContent = "Email must be formatted correctly.";
      valid = false;
    }

    // If valid, switch screens
    if (valid) {
      screen1.classList.remove("active");
      screen2.classList.add("active");
    }
  }
}
