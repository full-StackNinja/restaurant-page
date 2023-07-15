export default function removePageContent() {
     const content = document.querySelector(".content");
     while (content.firstChild) {
          content.removeChild(content.firstChild);
     }
}
