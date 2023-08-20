const menuForOpen = document.getElementById("menuForOpen");
const buttonForOpen = document.getElementsByClassName("openMenu");
const buttonForOpenMobileMenu = document.getElementById("openMobileMenu");
const buttonForOpenOffer = document.getElementById("openOffer");
const inputSearch = document.getElementById("inputSearch");

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
