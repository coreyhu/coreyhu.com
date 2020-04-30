// Change Hamburger Icon on Scroll

var menuButton = document.getElementById('hamburger-icon');
console.log(window.innerHeight)
window.onscroll = function () { 
    console.log(window.pageYOffset);
    if (window.pageYOffset >= window.innerHeight) {
        menuButton.classList.add("icon-white");
        menuButton.classList.remove("icon-black");
    } 
    else {
        menuButton.classList.add("icon-black");
        menuButton.classList.remove("icon-white");
    }
};