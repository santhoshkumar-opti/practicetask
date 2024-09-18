// Tab functionality
const tabs = document.querySelectorAll(".tab");

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
