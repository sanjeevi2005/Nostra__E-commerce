document.addEventListener("DOMContentLoaded", function() {
    var offerBoxclose = document.querySelector(".offer_box i");
    offerBoxclose.addEventListener("click", function() {
        var offerBox = document.querySelector(".offer_box");
        offerBox.style.display = "none";
    });

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

    const imageContainer = document.querySelector(".slider-image-container");
    const sliderLeftButton = document.getElementById("slider-left-activate");
    const sliderRightButton = document.getElementById("slider-right-activate");
    
    if (imageContainer && sliderLeftButton && sliderRightButton) {
        const totalImages = document.querySelectorAll(".slider-image").length;
        let currentMargin = 0;
        const maxMargin = (totalImages - 1) * 100; 

        sliderRightButton.addEventListener("click", function () {
            currentMargin += 100;
            if (currentMargin > maxMargin) {
                currentMargin = 0;
            }
            imageContainer.style.marginLeft = `-${currentMargin}vw`;
        });
         
        sliderLeftButton.addEventListener("click", function () {  
            currentMargin -= 100;
            if (currentMargin < 0) {
                currentMargin = maxMargin;
            }
            imageContainer.style.marginLeft = `-${currentMargin}vw`;
        });
    }

    // replace the previous wishlist handler with this more reliable toggle
    var wishButtons = document.querySelectorAll(".blackheart");
    wishButtons.forEach(function(btn) {
        btn.addEventListener("click", function() {
            var img = btn.querySelector("img");
            if (!img) return;
            var file = (img.getAttribute('src') || '').split('/').pop().toLowerCase();
            if (file === 'blackheart.png') {
                img.src = "./img/icons/redheart.png";
                btn.setAttribute('aria-pressed', 'true');
                img.alt = "liked";
            } else {
                img.src = "./img/icons/blackheart.png";
                btn.setAttribute('aria-pressed', 'false');
                img.alt = "not liked";
            }
        });
    });
});