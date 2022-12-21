/**
 * Mobile Menu Handler
 *
 * This file controls the navigation menu on mobile devices.
 * It toggles the mobile and desktop menu when the screen is
 * lower than the minimum amount of pixels.
 */

const mobileNavBtn = document.getElementById('mobile-nav-btn');
const mobileNavMenu = document.getElementById('mobile-nav-menu');
const MIN_PIXELS = 768;

/* Hide the menu if the screen is small when the page loads.
The resize event listener below only works when the page is
manually resized. */
if (window.innerWidth <= MIN_PIXELS) {
    mobileNavBtn.style.display = 'block';
} else {
    mobileNavBtn.style.display = 'none';
}

/**
 * When the user resizes the page, check if the screen size
 * is below the minimum and toggle the menu if appropriate.
 */
window.addEventListener("resize", function() {
    toggleMobileNav(mobileNavBtn, mobileNavMenu)
});


/**
 * Hides or shows the mobile navigation, button and menu,
 * based on the screen current screen size.
 *
 * @param {HTMLElement} menuBtn the button which toggles the
 * mobile navigation menu.
 * @param {HTMLElement} menu the navigation menu for mobile
 * devices containing links to all other main pages on site.
 */
function toggleMobileNav(menuBtn, menu) {
    if (window.innerWidth > MIN_PIXELS) {
        menuBtn.style.display = 'none';
        menu.style.display = 'none';
    }

    if (window.innerWidth <= MIN_PIXELS) {
        mobileNavBtn.style.display = 'block';
    }
}

/**
 * Check if the user has clicked on the mobile navigation button.
 */
mobileNavBtn.addEventListener("click", function() {
    toggleNavMenu(mobileNavMenu)
});


/**
 * This function will either toggle the mobile navigation menu
 * on or off.
 *
 * @param {HTMLElement} navMenu the navigation menu for mobile
 * devices containing links to all other main pages on site.
 */
function toggleNavMenu(navMenu) {
    if (navMenu.offsetParent === null) {
        navMenu.style.display = 'flex';
    } else (navMenu.style.display = 'none');

}