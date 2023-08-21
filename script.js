const menuForOpen = document.getElementById("menuForOpen");
const buttonForOpen = document.getElementsByClassName("openMenu");
const buttonForOpenMobileMenu = document.getElementById("openMobileMenu");
const buttonForOpenOffer = document.getElementById("openOffer");
const inputSearch = document.getElementById("inputSearch");
let image = "";

//Open offer
buttonForOpenOffer.addEventListener("click", function () {
  menuForOpen.classList.toggle("hidden");
});

//Open Mobile Menu
buttonForOpenMobileMenu.addEventListener("click", function () {
  document.getElementById("mobileMenu").classList.toggle("hidden");
  document.querySelector("body").classList.toggle("overflow-hidden");
});

document.addEventListener("click", function (event) {
  var isClickInside =
    menuForOpen.contains(event.target) ||
    buttonForOpenOffer.contains(event.target);

  if (!isClickInside) {
    menuForOpen.classList.add("hidden");
  } else {
  }
});

const btnSearch = document.getElementById("buttonForSearchOpen");

btnSearch.addEventListener("click", function () {
  inputSearch.classList.toggle("hidden");
});

const openImage = (item) => {
  image = item.src;

  document.getElementById("modal").classList.toggle("hidden");
  document.getElementById("image-modal").src = image;
  document.querySelector("body").classList.add("overflow-hidden");
};

const btn = document.getElementById("close-modal");

const closeModal = () => {
  document.getElementById("modal").classList.toggle("hidden");
  document.querySelector("body").classList.remove("overflow-hidden");
};

const showGallery = () => {
  document
    .getElementById("hidden-gallery")
    .classList.remove("xl:max-h-[1400px]");
  document.getElementById("hidden-gallery").classList.remove("max-h-[400px]");
  document.getElementById("hidden-gallery").classList.add("show-gallery");
  document.getElementById("gradient-container").classList.add("hidden");
};

document
  .getElementById("show-hidden-images")
  .addEventListener("click", showGallery);

btn.addEventListener("click", closeModal);

const mobileLinks = document.querySelectorAll("#mobile-link");

mobileLinks.forEach((link) => {
  link.onclick = function () {
    document.getElementById("mobileMenu").classList.add("hidden");
    document.querySelector("body").classList.remove("overflow-hidden");
  };
});
