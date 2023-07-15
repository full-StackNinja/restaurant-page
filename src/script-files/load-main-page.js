import "../stylesheets/normalize.css";
import "../stylesheets/index-style.css";
import "../stylesheets/contact-page-style.css"
import "../stylesheets/home-page-style.css"
import "../stylesheets/menu-page-style.css"

// Create header section of the page...
function loadMainPage() {
     const body = document.querySelector("body");

     const headerItems = document.createElement("ul");
     const homeLink = document.createElement("li");
     const menuLink = document.createElement("li");
     const contactLink = document.createElement("li");

     const homeText = document.createElement("a");
     const menuText = document.createElement("a");
     const contactText = document.createElement("a");

     homeText.innerHTML = "Home";
     homeText.setAttribute("tabindex", "1");
     homeText.classList.add("home-tab");

     menuText.innerHTML = "Menu";
     menuText.setAttribute("tabindex", "2");
     menuText.classList.add("menu-tab");

     contactText.innerHTML = "Contact";
     contactText.setAttribute("tabindex", "3");
     contactText.classList.add("contact-tab");

     homeLink.appendChild(homeText);
     menuLink.appendChild(menuText);
     contactLink.appendChild(contactText);

     headerItems.classList.add("header-items");
     homeLink.classList.add("home-link");
     menuLink.classList.add("menu-link");
     contactLink.classList.add("contact-link");

     headerItems.append(homeLink);
     headerItems.append(menuLink);
     headerItems.append(contactLink);

     body.insertBefore(headerItems, body.firstChild);
}

export default loadMainPage;
