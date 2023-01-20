let toggleBtn = document.querySelector(".toggleBtn"),
  mobileMenu = document.getElementById("mobile-menu"),
  closeBtn = document.querySelector(".closeBtn"),
  mobileMenuItems = mobileMenu.querySelectorAll("ul li");

toggleBtn.onclick = () => {
  mobileMenu.classList.toggle("hidden");
};

closeBtn.onclick = () => {
  mobileMenu.classList.add("hidden");
};

for (let i = 0; i < mobileMenuItems.length; i++) {
  mobileMenuItems[i].onclick = () => {
    mobileMenu.classList.add("hidden");
  };
}
