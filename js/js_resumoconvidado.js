/* const resultsList = document.getElementById('results')
new URLSearchParams(window.location.search).forEach((value, name) => {
    resultsList.append(`${name}`)
    resultsList.append(document.createElement('br'))
}) */
const popup1 = document.querySelector("#results");
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    var uid = user.uid;
    var docRef = db.collection("users").doc(uid);
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const user = doc.data();
          docid = user.docid;
          var doc2Ref = db
            .collection("users")
            .doc(uid)
            .collection("viagens")
            .doc(docid);

          doc2Ref
            .get()
            .then((doc) => {
              if (doc.exists) {
                const user2 = doc.data();
                const com = user2.com;
                let html = "";
                const li = `
                <div class="user"> 
            <div> 
            <img src="images/user.png" alt="user">
            </div>
            <div> 
            <h1 class"titulo">${com}</h1>
                
            </div>
          </div>
                
                
              `;
                html += li;

                popup1.innerHTML = html;
                console.log("Com", com);
              } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
              }
            })
            .catch((error) => {
              console.log("Error getting document:", error);
            });

          console.log("Com", doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  } else {
  }
});
