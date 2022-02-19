//hide drawer
let menuToggleButton = document.querySelector(".menu-toggle-button");
let allFilterItemsContainer = document.querySelector(".all-filter-items-container");
console.log(menuToggleButton);
menuToggleButton.onclick = () => {
    allFilterItemsContainer.classList.toggle("unhide-menu");

}