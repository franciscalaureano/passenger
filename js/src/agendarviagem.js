const agendarForm = document.querySelector("#agendar-form");
var docrefe;
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    var uid = user.uid;

    agendarForm.addEventListener("submit", (e) => {
      var user = firebase.auth().currentUser;
      console.log(uid);
      e.preventDefault();
      const onde = agendarForm["onde"].value;
      const inicio = agendarForm["inicio"].value;
      const fim = agendarForm["fim"].value;
      const horainicio = agendarForm["horainicio"].value;
      const horafim = agendarForm["horafim"].value;
      const descricao = agendarForm["descricao"].value;
      const trajeto = agendarForm["trajeto"].value;
      const playlist = agendarForm["playlist"].value;
      db.collection("users")
        .doc(uid)
        .collection("viagens")
        .add({
          onde: onde,
          inicio: inicio,
          fim: fim,
          horainicio: horainicio,
          horafim: horafim,
          descricao: descricao,
          trajeto: trajeto,
          playlist: playlist,
        })
        .then((docRef) => {
          db.collection("users").doc(uid).update({
            docid: docRef.id,
          });
          /* docrefe = docRef.id;
          console.log("Document written with ID: ", docrefe);
          window.x = "docrefe"; */
        })
        .then(() => {
          console.log("VIVO");
          db.collection("users")
            .doc(uid)
            .collection("viagensProv")
            .doc("1")
            .set({
              onde: onde,
              inicio: inicio,
              fim: fim,
              horainicio: horainicio,
              horafim: horafim,
              descricao: descricao,
              trajeto: trajeto,
              playlist: playlist,
            });
        })

        .then(() => {
          location.href = "resumoviagem.html";
        });
    });
  } else {
    // User is signed out
    // ...
  }
});
