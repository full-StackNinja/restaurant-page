import "../stylesheets/normalize.css";
import "../stylesheets/index-style.css";

// Create IIFE(module) to create header section of the page...
(function headerSectionCreator() {
     const header = document.createElement("div");
     const body = document.querySelector("body");
     const homeBtn = document.createElement("button");
     const menuBtn = document.createElement("button");
     const contactBtn = document.createElement("button");
     header.classList.add("header");
     homeBtn.classList.add("home-btn");
     homeBtn.innerHTML = "Home";
     menuBtn.classList.add("menu-btn");
     menuBtn.innerHTML = "Menu";
     contactBtn.classList.add("contact-btn");
     contactBtn.innerHTML = "Contact Us";
     header.append(homeBtn);
     header.append(menuBtn);
     header.append(contactBtn);
     body.insertBefore(header, body.firstChild);
})();
