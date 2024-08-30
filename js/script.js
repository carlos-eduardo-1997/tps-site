let headerMenuButton = document.getElementById("header-menu-btn");

headerMenuButton.addEventListener("click", function () {

    let header = document.querySelector("body > header");
    let isOpen = (header.dataset.menuOpen === "true");
    header.dataset.menuOpen = !isOpen;

});