// Import required plugins and modules
const loadGoogleMapsApi = require("load-google-maps-api");

export default function loadContactPage() {
     const content = document.querySelector(".content");

     const contactContainer = document.createElement("div");
     const mapContainer = document.createElement("div");
     const contactAddress = document.createElement("p");

     contactContainer.classList.add("contact-container");
     mapContainer.classList.add("map-container");

     contactAddress.innerHTML = "Address: The Anarkali Street, Lahore, Punjab Pakistan";
     setTimeout(() => {
          loadGoogleMapsApi({
               key: process.env.API_KEY,
          })
               .then(function (googleMaps) {
                    const map = new googleMaps.Map(mapContainer, {
                         center: {
                              lat: 31.582045,
                              lng: 74.329376,
                         },
                         zoom: 6,
                    });
                    new google.maps.Marker({
                         position: { lat: 31.582045, lng: 74.329376 },
                         map: map,
                         icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                    });
               })
               .catch(function (error) {
                    console.error("map error is ", error);
               });
     }, 500);
     contactContainer.appendChild(contactAddress);
     contactContainer.appendChild(mapContainer);
     content.appendChild(contactContainer);
}
