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



const imagesHolders = {
  favourite: "https://i.postimg.cc/rm3MMhLf/favourit.png",
  item1: "https://i.postimg.cc/Y2Ltbw1Z/item-1-web.png",
  item2: "https://i.postimg.cc/xTrnZF5C/item-2-web.png",
  item3: "https://i.postimg.cc/Kvnxhrp5/item-3-web.png",
  item4: "https://i.postimg.cc/8zNDpJqg/item-4-web.png",
  item5: "https://i.postimg.cc/8zNDpJqg/item-5-web.png",
  item6: "https://i.postimg.cc/8zNDpJqg/item-6-web.png",
  item7: "https://i.postimg.cc/8zNDpJqg/item-7-web.png",
  item8: "https://i.postimg.cc/8zNDpJqg/item-8-web.png",

}