/**
 * @file photo-slider,js
 * @author Luis Miranda
 *
 * This script updates the carousel when a user clicks on the previous
 * or next buttons.
 * */

const photoSliderComponent = document.querySelector('photo-slider-component').shadowRoot

// const nextBtn = document.getElementById('next-btn');
// const prevBtn = document.getElementById('prev-btn');
const nextBtn = photoSliderComponent.querySelector('#next-btn');
const prevBtn = photoSliderComponent.querySelector('#prev-btn');

let leftSlot = photoSliderComponent.querySelector('#left-slide');
let centerSlot = photoSliderComponent.querySelector('#center-slide');
let rightSlot = photoSliderComponent.querySelector('#right-slide');

// let leftSlot = document.getElementById('left-slide');
// let centerSlot = document.getElementById('center-slide');
// let rightSlot = document.getElementById('right-slide');

// Returns an array with all the service descriptions
// let descriptions = document.getElementsByClassName('service-description');
let descriptions = photoSliderComponent.querySelectorAll('.service-description');

// Image name format: service-image-0000X.jpg
// const IMG_PATH_BASE = 'service-images/service-image-0000';
const IMG_PATH_BASE = '/components/photo-slider/service-images/service-image-0000';
// All images are assumed to be in .jpg format
const IMG_EXT = '.jpg';

// Index of the image that will first be loaded
const DEFAULT_SERVICE = 6;

// Index of the first image in the set
const FIRST_SLIDE = 0;
// Index of the last image in the set
const LAST_SLIDE = 8;

// On initial page load, the center slide will be
// the default slide.
let centerSlide = DEFAULT_SERVICE;

// Move all the slots in the carousel right one spot when
// the previous button is clicked.
nextBtn.addEventListener("click", function() {

    let prevSlide = getNewSlide(centerSlide - 1, FIRST_SLIDE, LAST_SLIDE);
    let nextSlide = getNewSlide(centerSlide + 1, FIRST_SLIDE, LAST_SLIDE);

    // Make left slot = center slot
    showNextSlide(leftSlot, prevSlide);

    // Make center slot = right slide
    showNextSlide(centerSlot, centerSlide);

    // Make right slot = next slide
    showNextSlide(rightSlot, nextSlide);

    showNextDescription(descriptions, centerSlide);

    centerSlide = getNewSlide(centerSlide + 1, FIRST_SLIDE, LAST_SLIDE);
});

// Move all the slots in the carousel left one spot when
// the previous button is clicked.
prevBtn.addEventListener("click", function () {

    let prevSlide = getNewSlide(centerSlide - 1, FIRST_SLIDE, LAST_SLIDE);
    let nextSlide = getNewSlide(centerSlide + 1, FIRST_SLIDE, LAST_SLIDE);

    // Make left slot = prev image
    showPrevSlide(leftSlot, prevSlide);

    // Make center slot = left slot
    showPrevSlide(centerSlot, centerSlide);

    // Make right slot = center slot
    showPrevSlide(rightSlot, nextSlide);

    showPrevDescription(descriptions, centerSlide)
    centerSlide = getNewSlide(centerSlide - 1, FIRST_SLIDE, LAST_SLIDE);
});


/**
 * Changes the image in the current slot to the next image.
 *
 * @param slot slot that will have its image changed
 * @param curSlide index for the image in the current slot
 * */
function showNextSlide(slot, curSlide){
    const nextSlide = getNextSlide(curSlide);
    slot.src = IMG_PATH_BASE + nextSlide + IMG_EXT;
}

/**
 * Changes the image in the current slot to the previous image.
 *
 * @param slot slot that will have its image changed
 * @param curSlide index for the image in the current slot
 * */
function showPrevSlide(slot, curSlide) {
    const nextSlide = getPrevSlide(curSlide);
    slot.src = IMG_PATH_BASE + nextSlide + IMG_EXT;
}

/**
 * Obtains the slide to the right of the current slide.
 *
 * @param curSlide index of the current slide
 * @return index of the slide to the right
 * */
function getNextSlide(curSlide){
    let nextSlide = curSlide + 1;

    return getNewSlide(nextSlide, FIRST_SLIDE, LAST_SLIDE)
}

/**
 * Obtains the slide to the left of the current slide.
 *
 * @param curSlide index of the current slide
 * @return index of the slide to the left
 * */
function getPrevSlide(curSlide){
    let prevSlide = curSlide - 1;

    return getNewSlide(prevSlide, FIRST_SLIDE, LAST_SLIDE)
}

/**
 * Gets the index for the slide to the left or right of the
 * current slide. Will make sure the desired index is in bounds,
 * If not, it will loop to the beginning or the end of the image
 * set to stay in bounds.
 *
 * @param slideIndex index for the desired slide
 * @param firstSlide index of the first image in the set
 * @param lastSlide index of the last image in the set
 * @return the index of the new slide
 * */
function getNewSlide(slideIndex, firstSlide, lastSlide){

    // If slide before the beginning is trying to be
    // accessed, then circle back to the end
    if (slideIndex < firstSlide){
        return lastSlide;
    }

    // If slide after the end is trying to be
    // accessed, then circle back to the beginning
    if (slideIndex > lastSlide){
        return firstSlide;
    }

    // Slide trying to be accessed is not out of bounds,
    // There are no issues
    return slideIndex;
}


function showNextDescription(descriptions, currentSlide) {

    descriptions[currentSlide].style.display = 'none';

    if (currentSlide === descriptions.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }

    descriptions[currentSlide].style.display = 'block';
}

function showPrevDescription(descriptions, currentSlide) {

    descriptions[currentSlide].style.display = 'none';

    if (currentSlide === 0) {
        currentSlide = descriptions.length;
    }

    currentSlide--;

    descriptions[currentSlide].style.display = 'block';
}