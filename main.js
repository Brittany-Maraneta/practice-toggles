// the toggle button to control hide/show
const toggleMobileMenu = document.querySelector("#menu-button");

// the nav items to hide and show
const gridContainer = document.querySelector("#grid-container");

// the site header to click off the nav and close it
const siteHeader = document.querySelector("#site-header");

// the mobile media query to passivly close the menu when user goes to desktop size
const mobileMediaQuery = window.matchMedia("(max-width: 550px)");

// remove the mobile menu from the nav bar
// mobile menu event listener toggle
toggleMobileMenu.addEventListener("click", () => {
  //when user clicks, show the menu with classList.toggle
  gridContainer.classList.toggle("menu-row");
});

// automatically collapse the mobile menu when switch to desktop
//add an event listener to the media query
mobileMediaQuery.addEventListener("change", () => {
  gridContainer.classList.remove("menu-row");
});

// add an event listener to the whole document
document.addEventListener("click", (e) => {
  if (!(e.target === siteHeader || siteHeader.contains(e.target))) {
    gridContainer.classList.remove("menu-row");
  }
});

// if the user clicks anywhere except for the site header and its children
// remove the menu-row
