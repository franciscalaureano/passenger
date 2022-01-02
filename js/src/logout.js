const logout = document.querySelector("#logout");
console.log("tou vivo");
logout.addEventListener("click", (e) => {
  e.preventDefault();
  auth
    .signOut()
    .then(() => {
      console.log("user signed out");
    })
    .then(() => {
      location.href = "index.html";
    });
});
