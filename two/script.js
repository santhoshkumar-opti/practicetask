document.addEventListener("DOMContentLoaded", () => {
  // element ref for opening a dialog
  const ctaButton = document.getElementById("cta-button");
  // Element ref for dialog overlay
  const popupOverlay = document.getElementById("popup-overlay");
  // Element ref for icon to close
  const closeIcon = document.getElementById("close-icon");
  // element ref for dismiss the dialog in no thanks text
  const getStartedButton = document.getElementById("no-thanks");
  //   form ref
  const form = document.getElementById("onPopupForm");
  // show error for name
  const nameError = document.getElementById("nameError");
  //   show error for email
  const emailError = document.getElementById("emailError");
  //   element input name
  const nameInput = document.getElementById("name");
  //   element input email
  const emailInput = document.getElementById("email");

  // Open Popup
  openPopup();
  ctaButton.addEventListener("click", () => {
    openPopup();
  });

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
  getStartedButton.addEventListener("click", () => {
    popupOverlay.classList.add("hidden");
  });

  // Function to open a popup
  function openPopup() {
    popupOverlay.classList.remove("hidden");
    document.getElementById("screen1").classList.add("active");
    document.getElementById("screen2").classList.remove("active");

    // Clear input fields
    nameInput.value = '';
    emailInput.value = '';

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
      document.getElementById("screen1").classList.remove("active");
      document.getElementById("screen2").classList.add("active");
    }
  }
});
