/* const resultsList = document.getElementById('results')
new URLSearchParams(window.location.search).forEach((value, name) => {
    resultsList.append(`${name}: ${value}`)
    resultsList.append(document.createElement('br'))
    resultsList.append(document.createElement('br'))
}) */

const popup1 = document.querySelector("#results");

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    var uid = user.uid;
    var docRef = db
      .collection("users")
      .doc(uid)
      .collection("viagensProv")
      .doc("1");

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          let html = "";
          /* data.forEach((doc) => { */
          const viagem = doc.data();
          const li = `
        
        <div> 
         <p>Destino: <span class="bold">${viagem.onde}</span> </p>
         <p>Data de Inicio: <span class="bold">${viagem.inicio}</span> </p> 
         <p>Data de Fim: <span class="bold">${viagem.fim}</span> </p> 
         <p>Hora de Inicio: <span class="bold">${viagem.horainicio}</span> </p> 
         <p>Hora de Fim: <span class="bold">${viagem.horafim}</span> </p> 
         <p>Descrição: <span class="bold">${viagem.descricao}</span> </p> 
         <p>Permissão de Trajeto: <span class="bold">${viagem.trajeto}</span> </p> 
         <p>Permissão de Playlist: <span class="bold">${viagem.playlist}</span> </p> 
      </div>
              `;
          html += li;
          /* }); */
          popup1.innerHTML = html;
          console.log("Document data:", doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });

    /* var documento = db
        .collection("users")
        .doc(uid)
        .collection("viagens")
        .doc("1")
        .data();
      console.log(documento); */

    const setupPopup1 = (data) => {
      let html = "";
      /* data.forEach((doc) => { */
      const viagem = doc.data();
      const li = `
        
        <div> 
         <p>Destino: <span class="bold">${viagem.onde}</span> </p>
         <p>Data de Inicio: <span class="bold">${viagem.inicio}</span> </p> 
         <p>Data de Fim: <span class="bold">${viagem.fim}</span> </p> 
         <p>Hora de Inicio: <span class="bold">${viagem.horainicio}</span> </p> 
         <p>Hora de Fim: <span class="bold">${viagem.horafim}</span> </p> 
         <p>Descrição: <span class="bold">${viagem.descricao}</span> </p> 
         <p>Permissão de Trajeto: <span class="bold">${viagem.trajeto}</span> </p> 
         <p>Permissão de Playlist: <span class="bold">${viagem.playlist}</span> </p> 
      </div>
              `;
      html += li;
      /* }); */
      popup1.innerHTML = html;
    };
  } else {
  }
});
