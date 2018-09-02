
window.onload = function () {
    var navIcon = document.querySelector(".main-header__mob-nav");
    var nav = document.querySelector(".nav");
    navIcon.onclick = function () {
        navIcon.classList.toggle("mob-nav_hide");
        nav.classList.toggle("nav_hidden");
    }
}
