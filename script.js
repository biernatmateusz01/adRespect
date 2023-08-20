const menuForOpen = document.getElementById("menuForOpen");
const buttonForOpen = document.getElementsByClassName("openMenu");
const buttonForOpenMobileMenu = document.getElementById("openMobileMenu");
const buttonForOpenOffer = document.getElementById("openOffer");
const inputSearch = document.getElementById("inputSearch");

let image = "";

console.log(inputSearch);

//Open offer
buttonForOpenOffer.addEventListener("click", function () {
  menuForOpen.classList.toggle("hidden");
});

//Open Mobile Menu
buttonForOpenMobileMenu.addEventListener("click", function () {
  document.getElementById("mobileMenu").classList.toggle("hidden");
});

document.addEventListener("click", function (event) {
  var isClickInside =
    menuForOpen.contains(event.target) ||
    buttonForOpenOffer.contains(event.target);

  if (!isClickInside) {
    menuForOpen.classList.add("hidden");
  } else {
    console.log(isClickInside, "s");
  }
});

const btnSearch = document.getElementById("buttonForSearchOpen");

btnSearch.addEventListener("click", function () {
  inputSearch.classList.toggle("hidden");
  inputSearch.classList.toggle("-translate-y-[100px]");
});

const openImage = (item) => {
  image = item.src;
  document.getElementById("modal").classList.toggle("hidden");
  document.getElementById("image-modal").src = image;
};

const btn = document.getElementById("close-modal");

const closeModal = () => {
  document.getElementById("modal").classList.toggle("hidden");
};

const showGallery = () => {
  document.getElementById("hidden-gallery").classList.toggle("max-h-[1400px]");
  document.getElementById('gradient-container').classList.add('hidden')
};

document
  .getElementById("show-hidden-images")
  .addEventListener("click", showGallery);

btn.addEventListener("click", closeModal);
