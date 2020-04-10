function menuToggle(button, menu) {
    button.classList.toggle("button-active");
    menu.classList.toggle("menu-active");
}


// function copyAddress() {
//     var copyText = document.getElementById("myInput");
//     copyText.select();
//     copyText.setSelectionRange(0, 99999);      
//     document.execCommand("copy");
      
// }

var menuButton = document.getElementById('hamburger-icon');
var hamburgerMenu = document.getElementById('hamburger-menu');
menuButton.addEventListener('click', function() { menuToggle(menuButton, hamburgerMenu); });

