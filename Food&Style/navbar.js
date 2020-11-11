const navbar = document.querySelector(".js-navbar");
const menu = navbar.querySelector(".navbar__menu");
const toggleBtn = navbar.querySelector(".navbar__toggleBtn");

function loadMenu() {
    const icon = toggleBtn.querySelector("i");
    menu.classList.toggle("active");
    toggleBtn.classList.toggle("active");
    if (navbar.querySelector(".active")) {
        navbar.style.width = 100 + "%";
        navbar.style.height = 100 + "%";
        icon.className = "fas fa-times";
    } else {
        navbar.style.height = 0 + "%";
        icon.className = "fas fa-bars";
    }
}


toggleBtn.addEventListener("click", loadMenu)