window.onload = function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
};
let lat;
let long;
// coordenadas da posição atual do utilizador
function showPosition(position) {
  lat = position.coords.latitude;
  long = position.coords.longitude;
}
