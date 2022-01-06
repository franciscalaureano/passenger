const popup1 = document.querySelector(".proxviagens");

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    var uid = user.uid;

    db.collection("users")
      .doc(uid)
      .collection("viagens")
      .onSnapshot((snapshot) => {
        setupPopup1(snapshot.docs);
      });

    const setupPopup1 = (data) => {
      let html = "";
      data.forEach((doc) => {
        const viagem = doc.data();
        const li = `
                <div class="viagem"> 
                  <div> 
                      <h2>  ${viagem.descricao} </h2>
                      <p class="noMargin">Viagem a <span class="bold">${viagem.onde}</span> com <span class="bold"> ${viagem.com} </span> </p>
                      <p class="noMargin">De <span class="bold">${viagem.inicio}</span> a <span class="bold">${viagem.fim}</span></p>
                       </div>
                </div>
                
                
              `;
        html += li;
      });
      popup1.innerHTML = html;
    };
  } else {
  }
});
