import loadMainPage from "./load-main-page.js";
import removePageContent from "./remove-content.js";
import loadHomePage from "./home-page.js";
import loadMenuPage from "./menu-page.js";
import loadContactPage from "./contact-page.js";

// Load the main page...
loadMainPage();

// Then load home page at start
loadHomePage();
// Listen to the header tabs to load corresponding page upon click of corresponding tab
const headerTabs = document.querySelector(".header-items");
const homePage = document.querySelector(".home-tab");
const menuPage = document.querySelector(".menu-tab");
const contactPage = document.querySelector(".contact-tab");

headerTabs.addEventListener("click", (event) => {
     // First remove previous content of the page
     removePageContent();

     // Then load user required page
     if (event.target === homePage) {
          loadHomePage();
     } else if (event.target === menuPage) {
          loadMenuPage();
     } else if (event.target === contactPage) {
          console.log("it page contact page?",event.target === contactPage)
          loadContactPage();
     }
});
