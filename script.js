const menu_btn = document.querySelector(".menu-btn");
const navbar= document.getElementById("navbar");
function showMenu() {
 navbar.classList.toggle("active");
}
menu_btn.addEventListener("click", () => showMenu());