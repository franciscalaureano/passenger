window.onload = function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
};
// coordenadas da posição atual do utilizador
function showPosition(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;

  document.getElementById("latitude").innerHTML = lat;
  document.getElementById("latitude").style.display = "none";

  document.getElementById("longitude").innerHTML = long;
  document.getElementById("longitude").style.display = "none";
}
