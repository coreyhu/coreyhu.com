function menuToggle(button, menu) {
    button.classList.toggle("hamburger-button-active");
    menu.classList.toggle("menu-active");
}

var menuButton = document.getElementById('hamburger-icon');
var hamburgerMenu = document.getElementById('hamburger-menu');
menuButton.addEventListener('click', function() { menuToggle(menuButton, hamburgerMenu); });


function copyEmail(elem, user, domain) {
    var textArea = document.createElement("textarea");
    textArea.value = user + "@" + domain;
  
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    document.execCommand('copy');
    document.body.removeChild(textArea);
    
    if (!elem.classList.contains("text-swapped")) {
        var originalText = elem.innerHTML;
        elem.innerHTML = "Email Copied!";

        setTimeout(function(){
            elem.innerHTML = originalText;
        }, 1200);
    }

}

var footerLink = document.getElementById("footer-email-copy-link");
footerLink.addEventListener('click', function() { copyEmail(footerLink, "contact", "coreyhu.com"); });


var heroLink = document.getElementById("hero-email-copy-link");
heroLink.addEventListener('click', function() { copyEmail(heroLink, "contact", "coreyhu.com"); });


