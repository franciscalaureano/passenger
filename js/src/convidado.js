const guideList = document.querySelector(".guides");
console.log("Document was read with ID: ", docrefe);
db.collection("users").onSnapshot((snapshot) => {
  setupUsers(snapshot.docs);
});

const setupUsers = (data) => {
  let html = "";

  data.forEach((doc) => {
    const user = doc.data();
    console.log(user.docid);
    const li = `
          
          
          
          <div class="entry"> 
          <input type="radio" name="escolha" id="${user.username}" value="${user.username}" />
          <label class="user" for="${user.username}">
            
          
            <img src="images/user.png" alt="user" class="imagem">
          

            <div> 
                <h1>${user.username}</h1>
                <h2>${user.email}<h2>
            </div>
            
          </label>
          <div class="highlight"></div>
          
          </div>
          

        `;
    html += li;
  });
  guideList.innerHTML = html;
};
