db.collection("users").onSnapshot((snapshot) => {
  setupUsers(snapshot.docs);
});
const guideList = document.querySelector(".guides");
const setupUsers = (data) => {
  let html = "";
  data.forEach((doc) => {
    const user = doc.data();

    const li = `
          
          <li>

          <div class="user"> 
            <div> 
            <img id="imagem" src="images/user.png" alt="user">
            </div>
            <div id="userbox"> 
                <h1>${user.username}</h1>
                <h2>${user.email}<h2>
            </div>
            <a href="https://radiant-forest-87782.herokuapp.com/" style="margin:auto"/><img src="imagens/chat.png" width="60" height="60" ></a>
          </div>
          
          </li>
        `;
    html += li;
  });
  guideList.innerHTML = html;
};
