const mymap = document.querySelector("#mapid");

auth.onAuthStateChanged((user) => {
  if (user) {
    db.collection("users")
      .doc(user.uid)
      .get()
      .then((doc) => {
        const guideList = document.querySelector(".guides");

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
       

        db.collection("ImageLinks").onSnapshot((snapshot) => {
          setupImgs(snapshot.docs);
        });
        const setupImgs = (data) => {
          data.forEach((doc) => {
           const img = doc.data();
           var imageUrl= img.ImageUrl;
           var greenIcon = L.icon({
            iconUrl: imageUrl,
            iconSize:     [40, 40], // size of the icon
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        });
        L.marker([40.1962412, -8.4339997], {icon: greenIcon}).addTo(map)
           
          });
        };

        db.collection("users").onSnapshot((snapshot) => {
          setupUsers(snapshot.docs);
        });
        const setupUsers = (data) => {
          data.forEach((doc) => {
            const user = doc.data();
            var circle = L.circle([user.lat, user.long], {
              color: "#FF0000",
              colorOpacity: 0.5,
              fillColor: "#FF0000",
              fillOpacity: 1,
              radius: 5,
            }).addTo(map);
          });
        };

        // círculo para indicar a localização atual da pessoa
        var circle = L.circle([cord_lat, cord_long], {
          color: "#777373",
          colorOpacity: 0.5,
          fillColor: "#485C73",
          fillOpacity: 1,
          radius: 50,
        }).addTo(map);
      });
  } else {
    console.log("user logged out");
  }
});
