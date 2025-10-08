document.addEventListener("DOMContentLoaded", function () {
    var navbarSideActions = document.querySelector(".navbar-side-actions");
    var navbarSideMenu = document.querySelector(".navbar_side-links");
    var closeBtn = document.querySelector(".navbar_side-links .close-btn");
    var navbar = document.querySelector(".navbar");
    navbarSideActions.addEventListener("click", function() {
        navbarSideMenu.style.display = "flex";
        navbarSideMenu.style.zIndex = "1000";
        navbar.style.display = "";

    });
    closeBtn.addEventListener("click", function() {
        navbarSideMenu.style.display = "none";
        navbar.style.display = "flex";
    });
});