const mymap = document.querySelector("#mapid");
setupUI = (user) => {
  if (user) {
db.collection("users").doc(user.uid).get().then( (doc) => {
console.log(doc.data().bio)

})
  }}

  //------------------
  //-------MAPA-------
  //------------------
  /*var map = L.map("mapid").setView([db.collection("users").doc.data().lat, db.collection("users").doc.data().long], 18);

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
  }).addTo(map);*/

