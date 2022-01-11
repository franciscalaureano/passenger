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

        var map = L.map("mapid" , {zoomControl:false}).setView([cord_lat, cord_long], 18);

        // deifnir tile do mapa
        var osm = L.tileLayer(
          "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          }
        );
        osm.addTo(map);

        //meter imagens no mapa
        db.collection("ImageLinks").onSnapshot((snapshot) => {
          setupImgs(snapshot.docs);
        });
        const setupImgs = (data) => {
          data.forEach((doc) => {
           const img = doc.data();
           var imageUrl= img.ImageUrl;
  
           var iconImg= 'imagens/pin_imagem.png';
           var wI= "40px";
           var hI="auto";
           var imgIcon = L.icon({
            iconUrl: iconImg,
            iconSize:     [wI, hI], // size of the icon
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        });
        L.marker([img.Imglat-0.0001, img.Imglong], {icon: imgIcon}).addTo(map).bindPopup("<img src=" +imageUrl + " width='100px' height= 'auto'/> ");
           
          });
        };
        //ver todos os utilizadores no mapa no mapa
        db.collection("users").onSnapshot((snapshot) => {
          setupUsers(snapshot.docs);
        });

        const setupUsers = (data) => {
          data.forEach((doc) => {
            const user = doc.data();
            var icon= 'imagens/pin_amigo.png';
            var w= "40px";
            var h="auto";
            var userIcon = L.icon({
              iconUrl: icon,
              iconSize:     [w, h], // size of the icon
              iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
              popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
          });
          L.marker([user.lat, user.long], {icon: userIcon}).addTo(map).bindPopup(user.username);

          });
        };

        // círculo para indicar a localização atual da pessoa
        var circle = L.circle([cord_lat, cord_long], {
          color: "#777373",
          colorOpacity: 0.5,
          fillColor: "#485C73",
          fillOpacity: 1,
          radius: 10,
        }).addTo(map);
      });
  } else {
   
  }
});
