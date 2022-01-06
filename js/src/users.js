db.collection("users").onSnapshot((snapshot) => {
  setupUsers(snapshot.docs);
});

const setupUsers = (data) => {
  let html = "";
  data.forEach((doc) => {
    const user = doc.data();

    const li = `
          
          <li>

          <div class="user"> 
            <div> 
            <img src="images/user.png" alt="user">
            </div>
            <div> 
                <h1>${user.username}</h1>
                <h2>${user.email}<h2>
                
            </div>
          </div>
          
          </li>
        `;
    html += li;
  });
  guideList.innerHTML = html;
};
