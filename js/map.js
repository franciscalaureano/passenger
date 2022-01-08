/* var map = L.map("mapid").setView([40.2018, -8.4256], 18);

// deifnir tile do mapa
var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
});
osm.addTo(map);
 */

const mymap = document.querySelector("#mapid");
const setupUI = (user) => {
  if (user) {
    // account info
    db.collection("users")
      .doc(user.uid)
      .get()
      .then((doc) => {
        const html = `
        <div>Logged in as ${user.email}</div>
        <div>${doc.data().bio}</div>
      `;
        mymap.innerHTML = html;
      });
    // toggle user UI elements
    loggedInLinks.forEach((item) => (item.style.display = "block"));
    loggedOutLinks.forEach((item) => (item.style.display = "none"));
  } else {
    // clear account info
    accountDetails.innerHTML = "";
    // toggle user elements
    loggedInLinks.forEach((item) => (item.style.display = "none"));
    loggedOutLinks.forEach((item) => (item.style.display = "block"));
  }
};

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
