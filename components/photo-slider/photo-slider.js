/*
File: photo-slider.js
Author: Luis Miranda


*/

//Dom Structure
const photoSlider = document.createElement('template');
photoSlider.innerHTML = `
    <link rel="stylesheet" href="/styles/main.css">
    <link rel="stylesheet" href="/components/photo-slider/photo-slider.css">
<!--    <link rel="stylesheet" href="photo-slider.css">-->
    
    <div class="photo-slider">
        <article class="slider-description">
            <span class="service-description">
                <h3>Balayage</h3>
    
                <p>Balayage is an alternative way to add a splash of color into your hair. Unlike highlights, during a balayage we hand paint strands of your hair instead of using foils.</p>
                <p>Where as highlights are placed closer to your scalp, in a balayage we paint lower sections of your hair. This technique gives your hair a much more natural appearance.</p>
            </span>
            <span class="service-description" >
                <h3>Brazilian Blowout</h3>
    
                <p>Looking to smooth out your hair? With our Brazilian Blowout your hair will flow smooth and silky. This type of hair treatment works by applying a protective liquid protein to your hair which gives each strand a fuller, smoother, and shinier appearance.</p>
            </span>
            <span class="service-description" >
                <h3>Hair Extensions</h3>
    
                <p>Are you looking to add volume and length to your natural hair? Our hair extensions are a quick and easy way to get you that look you just can’t seem to achieve with your current hair just yet.</p>
                <p>We believe you should be able to rock the hair style you want, when you want.</p>
            </span>
            <span class="service-description" >
                <h3>Highlights</h3>
    
                <p>Highlights are a great way to keep your hair vibrant and youthful. Need to eliminate some of the grays? Adding highlights is a great way to restore your natural hair appearance.</p>
                <p>Highlights also make your hair appear fuller which is great for people with fine or thin hair.</p>
            </span>
            <span class="service-description" >
                <h3>Hair Treatment</h3>
    
                <p>Your hair is not just for looks. Your hair is a reflection of your health and self care.</p>
                <p>Our selection of treatments work to moisturize your hair, nourish your scalp, and even promote hair growth. Love your hair the way your hair deserves to be loved.</p>
            </span>
            <span class="service-description" >
                <h3>Makeup</h3>
    
                <p>Why should you have your makeup professionally done?</p>
                <p>We’ve applied makeup hundreds if not thousands of times. We know which products best compliment your skin type and facial structure with just a glance. Your makeup can range from natural to extravagant, or anything in between.</p>
            </span>
            <span class="service-description default-service" >
                <h3>Hairstyles For Events</h3>
    
                <p>For those special moments that deserve the extra care and attention. Weddings, Birthdays, Graduations, and
                more.</p>
                <p>Our expert hairdressers will make sure you have a uniquely crafted and elegantly styled look that will leave
                everyone around you totally astonished.</p>
            </span>
            <span class="service-description" >
                <h3>Hair Color</h3>
    
                <p>Purple hair, blue hair, green hair… These days dyeing your hair is all the rage. But why risk damaging your luscious hair with random chemicals at home?</p>
                <p>At Mon Chéri we carry a carefully curated selection of hair products that will keep your hair healthy and still give you the trendy look you’re after.</p>
            </span>
            <span class="service-description" >
                <h3>Haircut</h3>
    
                <p>Whether you need a routine hair cut, you want try a new look, or are looking to fix the mess your previous hairdresser left; Mon Chéri can help.</p>
                <p>With years of experience, we can give you any look you’re after.  Show us a picture or describe your ideal haircut, either way you’ll walk out of our salon with a fresh look that you’ll be happy with.</p>
            </span>
        </article>
    
        <div class="carousel">
            <span class="slider-btn prevent-select" id="next-btn">&gt</span>
            <span class="slider-btn prevent-select" id="prev-btn">&lt</span>
    
            <img class="photo-slide" id="left-slide" src="/components/photo-slider/service-images-optimized/service-image-00005.webp" alt="">
            <img class="photo-slide" id="center-slide" src="/components/photo-slider/service-images-optimized/service-image-00006.webp" alt="">
            <img class="photo-slide" id="right-slide" src="/components/photo-slider/service-images-optimized/service-image-00007.webp" alt="">
        </div>
    </div>
    
    `;


class PhotoSlider extends HTMLElement {
    constructor() {
        super();
    }

    //Creates the shadow root and appends it to HTML
    connectedCallback(){
        const shadowRoot = this.attachShadow({mode: "open"});
        shadowRoot.appendChild(photoSlider.content);
    }

}

customElements.define('photo-slider-component', PhotoSlider);

