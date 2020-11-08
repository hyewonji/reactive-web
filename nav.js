/*const bodyForm = document.querySelector("body");
const navBar = document.querySelector(".js-navBar");
const logo = navBar.querySelector(".navBar__logos"),
    category = navBar.querySelector(".navBar__categories"),
    link = navBar.querySelector(".navBar__icons"),
    menuBar = navBar.querySelector(".navBar__menuBar");
const slideMenu = document.querySelector(".js-slideMenu");

function getSize() {
    const minWidth = 900;
    if (document.getElementById("myMenu")) {
        if (bodyForm.offsetWidth > minWidth) {
            const menuBars = menuBar.querySelector("i");
            navBar.appendChild(logo);
            navBar.appendChild(link);
            menuBar.removeChild(menuBars)
        }
    }
    else {
        if (bodyForm.offsetWidth <= minWidth) {
            const menuBars = document.createElement("i");
            menuBars.className = "fas fa-bars";
            menuBars.id = "myMenu";
            menuBar.appendChild(menuBars);
            slideMenu.appendChild(logo);
            slideMenu.appendChild(link);
        }
    }
}


function slide() {
    slideMenu.style.display = "block"
    slideMenu.style.height = 300 + "px"
    category.style.height = 200 + "px"
    category.style.width = 100 + "%"
    category.style.margin = 30 + "px"
}

function init() {
    if (bodyForm.offsetWidth <= 900) {
        getSize();
    };
    window.addEventListener("resize", getSize);
    menuBar.addEventListener("click", slide);
}

init()*/

const toggleBtn = document.querySelector(".navBar__toogleBtn");
const menu = document.querySelector(".navBar__categories");
const icons = document.querySelector(".navBar__icons");


toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    icons.classList.toggle("active");
})
