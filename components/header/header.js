//Dom Structure
const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
        <link rel="stylesheet" href="components/header/header-style.css">
        
        <header>
            <nav class="nav-bar">
                <a class="logo-link" href="index.html">
                    <img class="nav-logo" src="components/header/brand/full-width-logo.png">
                </a>
        
                <button id="mobile-nav-btn">
                    <img src="components/header/icons/menu_black.svg" alt="">
                </button>
        
                <div class="nav-links" id="nav-menu">
                    <a href="index.html">
                        <span class="nav-item non-active-page">
                            <span>Home</span>
                            <span class="mobile-item-glyph">&#62;</span>
                        </span>
                    </a>
                    <a href="services.html">
                        <span class="nav-item non-active-page">
                            <span>Services</span>
                            <span class="mobile-item-glyph">&#62;</span>
                        </span>
                    </a>
                    <a href="gallery.html">
                        <span class="nav-item non-active-page">
                            <span>Gallery</span>
                            <span class="mobile-item-glyph">&#62;</span>
                        </span>
                    </a>
                    <a href="about.html">
                        <span class="nav-item non-active-page">
                            <span>About</span>
                            <span class="mobile-item-glyph">&#62;</span>
                        </span>
                    </a>
                    <a href="contact.html">
                        <span class="nav-item non-active-page">
                            <span>Contact</span>
                            <span class="mobile-item-glyph">&#62;</span>
                        </span>
                    </a>
                    <a href="book.html">
                        <span class="nav-item non-active-page nav-cta-btn">
                            <span>Book Now</span>
                            <span class="mobile-item-glyph">&#62;</span>
                        </span>
                    </a>
                </div>
            </nav>
        </header>`;


class Header extends HTMLElement {
    constructor() {
        super();
    }

    //Creates the shadow root and appends it to HTML
    connectedCallback(){
        const shadowRoot = this.attachShadow({mode: "open"});
        shadowRoot.appendChild(headerTemplate.content);
    }


}

customElements.define('header-component', Header);


