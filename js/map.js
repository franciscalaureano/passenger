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

  // círculo para indicar a localização atual da pessoa
  var circle = L.circle([lat, long], {
    color: "#777373",
    colorOpacity: 0.5,
    fillColor: "#485C73",
    fillOpacity: 1,
    radius: 5,
  }).addTo(map);
}
