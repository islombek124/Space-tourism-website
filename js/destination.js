// Tabs
let tabs = document.querySelectorAll(".tab_item"),
  tabLinks = document.querySelectorAll(".tab_link"),
  img = document.querySelector(".img"),
  pics = [
    "./assets/destination/image-moon.png",
    "./assets/destination/image-mars.png",
    "./assets/destination/image-europa.png",
    "./assets/destination/image-titan.png",
  ];

function hideTabContent() {
  tabs.forEach(function (tab) {
    tab.classList.remove("tab__item_active");
  });
  tabLinks.forEach(function (item) {
    item.classList.remove("tab__link__active");
  });
}

function showTabContent(i = 0) {
  tabs[i].classList.add("tab__item_active");
  tabLinks[i].classList.add("tab__link__active");
}

tabLinks.forEach(function (item, i) {
  item.addEventListener("click", function (e) {
    hideTabContent();
    showTabContent(i);
    if (true) {
      img.src = pics[i];
    }
  });
});

hideTabContent();
showTabContent();
