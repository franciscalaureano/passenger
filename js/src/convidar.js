const convidarForm = document.querySelector("#convidar-form");

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    var uid = user.uid;
    var docRef = db.collection("users").doc(uid);
    var docid;
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const user = doc.data();
          docid = user.docid;
          convidarForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const com = convidarForm["escolha"].value;
            db.collection("users")
              .doc(uid)
              .collection("viagens")
              .doc(docid)
              .update({
                com: com,
              })
              .then(() => {
                location.href = "resumoconvidado.html";
              });
          });
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  } else {
    // User is signed out
    // ...
  }
});
