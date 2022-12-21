/*
* Mobile Menu Helper
* Author: Luis Miranda
*
* This file will toggle the mobile navigation when the mobile menu
* button is clicked.
* */


// Selecting elements in Shadow DOM with JS: https://stackoverflow.com/questions/34112089/is-it-possible-to-bind-an-event-listener-to-an-element-within-a-shadow-dom-from
const headerComponent = document.querySelector('header-component').shadowRoot;
const navMenu = headerComponent.querySelector('#nav-menu');
const mobileNavBtn = headerComponent.querySelector('#mobile-nav-btn');

var prevWindowWidth = window.innerWidth;

// Breakpoint for minimum screen size in pixels
const MIN_WIDTH = 768;


// Check screen size on page load. Hide the menu if the screen is
// equal to or less than the breakpoint. This action will avoid
// loading the mobile menu on initial page load.
if (window.innerWidth <= MIN_WIDTH) {
    navMenu.style.display = 'none';
} else {
    navMenu.style.display = 'flex';
}


// Controls the menu appearance when the window is manually resized.
window.addEventListener("resize", function(){

    // Nav links will be hidden by default for the mobile menu.
    // If the user enlarges the window, nav links should be displayed
    // once the breakpoint for the desktop size is reached
    if (window.innerWidth > MIN_WIDTH && navMenu.style.display === 'none'){
        toggleNavMenu(navMenu);
    }

    // Check if screen is shrinking from desktop to mobile
    if (window.innerWidth < prevWindowWidth && prevWindowWidth > MIN_WIDTH){

        // Nav links will be shown by default for the desktop menu.
        // If the user shrinks the window, the nav links should be
        // hidden once the breakpoint for the mobile size is reached
        if (window.innerWidth <= MIN_WIDTH && navMenu.style.display === 'flex') {
            toggleNavMenu(navMenu);
        }
    }

    prevWindowWidth = window.innerWidth;

});


// Check whenever the mobile navigation button is clicked.
// If the button is clicked, toggle the mobile navigation
mobileNavBtn.addEventListener("click", function() {
    toggleNavMenu(navMenu);
});


/**
 * This function will either toggle the mobile navigation menu
 * on or off.
 *
 * @param {HTMLElement} navMenu a navigation menu that is responsive
 * at a given breakpoint. It should only contain links to all other
 * main pages on site.
 */
function toggleNavMenu(navMenu) {
    if (navMenu.offsetParent === null) {
        navMenu.style.display = 'flex';
    } else (navMenu.style.display = 'none');

}