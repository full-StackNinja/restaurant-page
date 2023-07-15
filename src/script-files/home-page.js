import diningTableEmpty from "../assets/home-page/dining-empty.jpg";
import diningTable from "../assets/home-page/dining.jpg";
export default function LoadHomePage() {
     const content = document.querySelector(".content");
     const assetsPaths = [diningTableEmpty, diningTable];

     for (let url of assetsPaths) {
          const imgElement = new Image();
          imgElement.src = url;
          content.appendChild(imgElement);
     }
     const hangingBoardContainer = document.createElement("div");
     hangingBoardContainer.classList.add("hanging-board-container");

     const restaurantName = document.createElement("p");
     restaurantName.innerHTML = "Hot Grilly";

     hangingBoardContainer.appendChild(restaurantName);
     content.appendChild(hangingBoardContainer);
}
