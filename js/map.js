//------------------------
//------LOCALIZAÇÃO-------
//------------------------
window.onload = function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
};

// coordenadas da posição atual do utilizador
function showPosition(position) {
  var lat = position.coords.latitude;
  var long = position.coords.longitude;

  // document.getElementById("latitude").innerHTML = long;
  // document.getElementById("latitude").style.display = "none";

  // document.getElementById("longitude").innerHTML = lat;
  // document.getElementById("longitude").style.display = "none";

  //------------------
  //-------MAPA-------
  //------------------
  var map = L.map("mapid").setView([lat, long], 18);

  // deifnir tile do mapa
  var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  });
  osm.addTo(map);
}
