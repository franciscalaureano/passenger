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
     <a href="https://mysterious-headland-46020.herokuapp.com/d9a7e7cb-6b45-4746-911b-2f7371da1bad" style="margin:auto"/>

                <div class="viagem"> 
                  <div> 
                      <h2>  ${viagem.descricao} </h2>
                      <p class="noMargin">Viagem a <span class="bold">${viagem.onde}</span> </br> com <span class="bold"> ${viagem.com} </span> </p>
                      <p class="noMargin">De <span class="bold">${viagem.inicio}</span> a <span class="bold">${viagem.fim}</span></p>
                  </div>
                  <a href="https://mysterious-headland-46020.herokuapp.com/d9a7e7cb-6b45-4746-911b-2f7371da1bad" style="margin:auto"/>
                  <img id="imagem" src="imagens/entrarviagem.png" width="50" height="50" > </a>
                </div>
               </a> 
                
              `;
        html += li;
      });
      popup1.innerHTML = html;
    };
  } else {
  }
});
