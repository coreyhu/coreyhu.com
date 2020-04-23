function menuToggle(button, menu) {
    button.classList.toggle("hamburger-button-active");

    button.childNodes[1].classList.toggle("drop-shadow");
    button.childNodes[3].classList.toggle("drop-shadow");
    button.childNodes[5].classList.toggle("drop-shadow");

    menu.classList.toggle("menu-active");
}

var menuButton = document.getElementById('hamburger-icon');
var hamburgerMenu = document.getElementById('hamburger-menu');
menuButton.addEventListener('click', function() { menuToggle(menuButton, hamburgerMenu); });
