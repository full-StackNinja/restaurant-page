/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!***********************************!*\
  !*** ./src/script-files/index.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../stylesheets/normalize.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../stylesheets/index-style.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



// Create IIFE(module) to create header section of the page...
(function headerSectionCreator() {
     const body = document.querySelector("body");
     const homeBtn = document.createElement("button");
     const menuBtn = document.createElement("button");
     const contactBtn = document.createElement("button");
     homeBtn.classList.add("home-btn");
     homeBtn.innerHTML = "Home";
     menuBtn.classList.add("menu-btn");
     menuBtn.innerHTML = "Menu";
     contactBtn.classList.add("contact-btn");
     contactBtn.innerHTML = "Contact Us";
     body.insertBefore(contactBtn, body.firstChild);
     body.insertBefore(menuBtn, body.firstChild);
     body.insertBefore(homeBtn, body.firstChild);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7O0FDTnNDO0FBQ0U7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3NjcmlwdC1maWxlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi4vc3R5bGVzaGVldHMvbm9ybWFsaXplLmNzc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzaGVldHMvaW5kZXgtc3R5bGUuY3NzXCI7XG5cbi8vIENyZWF0ZSBJSUZFKG1vZHVsZSkgdG8gY3JlYXRlIGhlYWRlciBzZWN0aW9uIG9mIHRoZSBwYWdlLi4uXG4oZnVuY3Rpb24gaGVhZGVyU2VjdGlvbkNyZWF0b3IoKSB7XG4gICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKFwiaG9tZS1idG5cIik7XG4gICAgIGhvbWVCdG4uaW5uZXJIVE1MID0gXCJIb21lXCI7XG4gICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZChcIm1lbnUtYnRuXCIpO1xuICAgICBtZW51QnRuLmlubmVySFRNTCA9IFwiTWVudVwiO1xuICAgICBjb250YWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWJ0blwiKTtcbiAgICAgY29udGFjdEJ0bi5pbm5lckhUTUwgPSBcIkNvbnRhY3QgVXNcIjtcbiAgICAgYm9keS5pbnNlcnRCZWZvcmUoY29udGFjdEJ0biwgYm9keS5maXJzdENoaWxkKTtcbiAgICAgYm9keS5pbnNlcnRCZWZvcmUobWVudUJ0biwgYm9keS5maXJzdENoaWxkKTtcbiAgICAgYm9keS5pbnNlcnRCZWZvcmUoaG9tZUJ0biwgYm9keS5maXJzdENoaWxkKTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=