const mymap = document.querySelector("#mapid");

auth.onAuthStateChanged((user) => {
  if (user) {
    db.collection("users")
      .doc(user.uid)
      .get()
      .then((doc) => {
        var cord_lat = doc.data().lat;
        var cord_long = doc.data().long;
        console.log(cord_lat);
        console.log(cord_long);

        var map = L.map("mapid").setView([cord_lat, cord_long], 18);

        // deifnir tile do mapa
        var osm = L.tileLayer(
          "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          }
        );
        osm.addTo(map);

        // círculo para indicar a localização atual da pessoa
        var circle = L.circle([cord_lat, cord_long], {
          color: "#777373",
          colorOpacity: 0.5,
          fillColor: "#485C73",
          fillOpacity: 1,
          radius: 5,
        }).addTo(map);
      });
  } else {
    console.log("user logged out");
  }
});
