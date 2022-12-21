/*
File: footer.js
Author: Luis Miranda

This is a reusable web-component for the site footer.

All paths should be from the content root as images and stylesheets are loaded from the ____.html files
at the root level.
*/

//Dom Structure
const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `

<!--        <link rel="stylesheet" href="styles/main.css">-->
        <link rel="stylesheet" href="components/footer/footer-style.css">
        
        <footer>
                
            <div class="footer-content-container">
                <span class="footer-site-map-links">
                    <ul>
                        <li>Site Map</li>
                        <a href="index.html">
                            <li>Home</li>
                        </a>
                        <a href="services.html">
                            <li>Services</li>
                        </a>
                        <a href="gallery.html">
                            <li>Gallery</li>
                        </a>
                        <a href="about.html">
                            <li>About</li>
                        </a>
                        <a href="contact.html">
                            <li>Contact</li>
                        </a>
                    </ul>
                </span>
        
                <div class="footer-center-logos">
                    <img class="footer-brand-logo" src="components/footer/brand/full-width-logo-inverted.png" alt="">
                    <span class="footer-social-icons">
                        <a href=""><img class="footer-icons" src="components/footer/icons/social-icons/icons8-facebook.svg" alt=""></a>
                        <img class="footer-icons" src="components/footer/icons/social-icons/icons8-instagram.svg" alt="">
                    </span>
                </div>
        
        
                <div class="footer-contact-info">
                    <span class="footer-phone-number">
                        <img class="footer-icons" src="components/footer/icons/call.svg" alt="">
                        <a href="tel:520-440-6118"><p>(520) 440-6118</p></a>
                    </span>
        
                    <span class="footer-address">
                        <img class="footer-icons" src="components/footer/icons/pin-drop.svg" alt="">
                        <div>
                            <a href="https://goo.gl/maps/sCqsgdYvBWM6nLwW8" target="_blank"><p>1299 W Speedway Blvd Tucson, AZ 85745</p></a>
                        </div>
                    </span>
                </div>
        
            </div>
        
            <div class="footer-credit">
                <p>Designed by <a href="mailto:luismiranda.dev@gmail.com">luismiranda.dev@gmail.com</a></p>
                <p>Social icons provided by icons8.com</p>
            </div>
            
        </footer>`;


class Footer extends HTMLElement {
    constructor() {
        super();
    }

    //Creates the shadow root and appends it to HTML
    connectedCallback(){
        const shadowRoot = this.attachShadow({mode: "open"});
        shadowRoot.appendChild(footerTemplate.content);
    }

}

customElements.define('footer-component', Footer);

