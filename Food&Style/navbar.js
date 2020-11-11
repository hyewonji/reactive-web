const navbar = document.querySelector(".js-navbar");
const menu = navbar.querySelector(".navbar__menu");
const toggleBtn = navbar.querySelector(".navbar__toggleBtn");

function loadMenu() {
    const icon = toggleBtn.querySelector("i");
    menu.classList.toggle("active");
    toggleBtn.classList.toggle("active");
    if (navbar.querySelector(".active")) {
        console.log("yes")
        icon.className = "fas fa-times";
    } else {
        console.log("no")
        icon.className = "fas fa-bars";
    }
}


toggleBtn.addEventListener("click", loadMenu)