const toggleBtn = document.querySelector(".navBar__toogleBtn");
const menu = document.querySelector(".navBar__categories");
const icons = document.querySelector(".navBar__icons");


toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    icons.classList.toggle("active");
})
