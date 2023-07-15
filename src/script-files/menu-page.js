// import required assets
import woodenBoard from "../assets/menu-page/wooden-board.jpg";
import grilledSalmonSalad from "../assets/menu-page/grilled-salmon-salad.jpg";
import grilledHarissaChicken from "../assets/menu-page/grilled-harissa-chicken.jpeg";
import grilledMushroomSalad from "../assets/menu-page/Grilled Mushroom Antipasto Salad.jpeg";
import grilledRomaineSalad from "../assets/menu-page/Grilled Romaine Salad.jpeg";
import grilledSteaks from "../assets/menu-page/Grilled Steaks Recipe.jpg";
import grilledWarmMushroomSalad from "../assets/menu-page/Warm Mushroom Salad with Sesame Dressing.jpg";

const menuPageAssets = [
     {
          dishBoard: woodenBoard,
          dishFood: grilledSalmonSalad,
          dishName: "Grilled Salmon Salad",
          dishDescription: "This Grilled Salmon Salad with Creamy Cilantro Lime Dressing is perfect for summer barbecues and outdoor gatherings. Chock full of fresh organic produce, not only is this entree salad healthy and easy to make, it’s bursting with delicious summertime flavor! Keto and Low-carb.",
     },
     {
          dishBoard: woodenBoard,
          dishFood: grilledHarissaChicken,
          dishName: "Grilled Harissa Chicken",
          dishDescription: "Ready to spice up your chicken dinner? This quick harissa chicken recipe is your ticket! Chicken thighs coated in harissa chile paste, garlic, onion and a few warm spices. Savory, smoky, with a little spice kick!",
     },
     {
          dishBoard: woodenBoard,
          dishFood: grilledMushroomSalad,
          dishName: "Grilled Mushroom Salad",
          dishDescription: '"Mushrooms turn into crispy, smoky flavor bombs on the grill," says Brad Leone. I keep them in big pieces so they don’t fall between the grates. Easy, hearty, and it can stand up to the hot weather if you make it ahead and it’s sitting there on the picnic table or whatever.',
     },
     {
          dishBoard: woodenBoard,
          dishFood: grilledRomaineSalad,
          dishName: "Grilled Romaine Salad",
          dishDescription: "Grilled Romaine with Maitake Mushrooms with Furikake Caesar Dressing -a Japanese-Inspired Caesar salad that comes together in 20 minutes! Keto and yummy.",
     },
     {
          dishBoard: woodenBoard,
          dishFood: grilledSteaks,
          dishName: "Juicy Grilled Steaks",
          dishDescription: "Indulge in the succulent pleasure of perfectly grilled steaks, offering a tantalizing blend of juicy tenderness and mouthwatering charred flavors. Each bite is a culinary delight that leaves you craving for another savory slice.",
     },
     {
          dishBoard: woodenBoard,
          dishFood: grilledWarmMushroomSalad,
          dishName: "Grilled Warm Mushroom Salad",
          dishDescription: "Grilled Warm Mushroom Salad: A delightful fusion of tender grilled mushrooms and fresh greens, offering a harmonious balance of smoky flavors and crisp textures. This enticing salad is a culinary journey that leaves you yearning for its satisfying blend with every bite.",
     },
];
// Load menu page upon user tabbing of the "Menu" Tab
export default function LoadMenuPage() {
     const content = document.querySelector(".content");
     for (let dish of menuPageAssets) {
          let menuDish = document.createElement("div");
          let dishName = document.createElement("p");
          let dishDescription = document.createElement("p");
          let dishBoard = new Image();
          let dishFood = new Image();

          menuDish.classList.add("menu-dish");

          dishBoard.src = dish.dishBoard;
          dishBoard.classList.add("dish-board");

          dishFood.src = dish.dishFood;
          dishFood.classList.add("dish-food");

          dishName.innerHTML = dish.dishName;
          dishName.classList.add("dish-name");

          dishDescription.innerHTML = dish.dishDescription;
          dishDescription.classList.add("dish-description");

          menuDish.appendChild(dishBoard);
          menuDish.appendChild(dishFood);
          menuDish.appendChild(dishName);
          menuDish.appendChild(dishDescription);
          content.appendChild(menuDish);
     }

     // Add restaurant name in menu page
     const hangingBoardContainer = document.createElement("div");
     hangingBoardContainer.classList.add("hanging-board-container");

     const restaurantName = document.createElement("p");
     restaurantName.innerHTML = "Hot Grilly";

     hangingBoardContainer.appendChild(restaurantName);
     content.appendChild(hangingBoardContainer);
}
