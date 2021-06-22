function toggleClass() {
    var menu = document.querySelector(".MainMenu");
    menu.classList.toggle("toggleCls");
}

var hamburger = document.querySelector(".hamIcon");

hamburger.addEventListener('click', toggleClass);