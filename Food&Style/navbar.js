const navbar = document.querySelector(".js-navbar");
const menu = navbar.querySelector(".navbar__menu");
const menuLists = menu.querySelectorAll(".menu__list");
const toggleBtn = navbar.querySelector(".navbar__toggleBtn");
const icon = toggleBtn.querySelector("i");

function loadMenu() {
    if (navbar.offsetWidth <= 768) {
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
}

toggleBtn.addEventListener("click", loadMenu);
for (const li of menuLists) {
    li.addEventListener('click', loadMenu)
}