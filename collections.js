// collections.js

document.addEventListener("DOMContentLoaded", function () {
    // --- UI Event Listeners (No Changes) ---
    var offerBoxclose = document.querySelector(".offer_box i");
    offerBoxclose.addEventListener("click", function () {
        var offerBox = document.querySelector(".offer_box");
        offerBox.style.display = "none";
    });

    var navbarSideActions = document.querySelector(".navbar-side-actions");
    var navbarSideMenu = document.querySelector(".navbar_side-links");
    var closeBtn = document.querySelector(".navbar_side-links .close-btn");
    navbarSideActions.addEventListener("click", function () {
        navbarSideMenu.style.display = "flex";
        navbarSideMenu.style.zIndex = "1000";
    });
    closeBtn.addEventListener("click", function () {
        navbarSideMenu.style.display = "none";
    });

    // --- Product Data (Using images from img.rar) ---
    const products = [
        { name: "Casual T-Shirt", price: 1500, src: "products/f1.jpg", tags: "Summer,White,New" },
        { name: "Vintage Shirt", price: 1800, src: "products/f2.jpg", tags: "Summer,Green,Old" },
        { name: "Patterned Shirt", price: 2000, src: "products/f3.jpg", tags: "Beach,Blue,Trending" },
        { name: "White T-Shirt", price: 1200, src: "products/f4.jpg", tags: "Summer,White,New" },
        { name: "Classic T-Shirt", price: 1300, src: "products/f5.jpg", tags: "Party,Blue,Trending" },
        { name: "Red Party Top", price: 2500, src: "products/f6.jpg", tags: "Party,Red" },
        { name: "Khaki Trousers", price: 1900, src: "products/f7.jpg", tags: "Summer,Beach" },
        { name: "Floral Top", price: 2200, src: "products/f8.jpg", tags: "Beach,Black,New" }
    ];

    var container = document.querySelector(".products");

    // --- Display Products (No Changes) ---
    products.forEach((product) => {
        var createItem = document.createElement("div");
        createItem.classList.add("product");
        createItem.innerHTML = ` <img style="width: 20vw;" src="img/${product.src}">
            <h1>${product.name}</h1>
            <p>₹${product.price}</p>
            <tags style="visibility:hidden;">${product.tags}</tags>`;
        container.append(createItem);
    });

    // --- Filtering and Search Logic ---
    var filterList = [];
    var tags = document.getElementsByName("tags");
    var searchInput = document.getElementById("searchInput");
    
    // **NEW**: Get the search icon element
    var searchIcon = document.getElementById("searchIcon");

    tags.forEach((tag) => {
        tag.addEventListener("change", (e) => {
            if (e.target.checked) {
                filterList.push(e.target.value);
            } else {
                filterList = filterList.filter(item => item !== e.target.value);
            }
            update();
        });
    });

    // **MODIFIED**: Update the search input's event listener
    searchInput.addEventListener("keyup", function () {
        // Check the length of the text in the input box
        if (searchInput.value.length > 0) {
            searchIcon.style.display = "none"; // Hide the icon
        } else {
            searchIcon.style.display = "inline-block"; // Show the icon
        }
        update(); // Also run the product filter
    });

    // The update function remains the same
    function update() {
        var productList = document.querySelectorAll(".product");
        var searchTerm = searchInput.value.toLowerCase();

        productList.forEach((product) => {
            const productName = product.querySelector("h1").innerText.toLowerCase();
            const productTags = product.querySelector("tags").innerText.split(',');
            const nameMatch = productName.includes(searchTerm);
            let filterMatch = filterList.length === 0 || filterList.some(filter => productTags.includes(filter));

            if (nameMatch && filterMatch) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    }
});