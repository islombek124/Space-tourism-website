// Tabs
let tabs = document.querySelectorAll(".tab_item"),
  tabLinks = document.querySelectorAll(".tab_link"),
  img = document.querySelector(".img"),
  pics = [
    "../assets/crew/image-douglas-hurley.png",
    "..//assets/crew/image-mark-shuttleworth.png",
    "../assets/crew/image-victor-glover.png",
    "../assets/crew/image-anousheh-ansari.png",
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
