const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // get user info
  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;

  // log the user in
  auth
    .signInWithEmailAndPassword(email, password)
    .catch((err) => {
      document.getElementById("loginError").innerHTML = err.message;
      console.log(err);
    })
    .then((cred) => {
      console.log(cred.user);
      const modal = document.querySelector("#modal-login");
      M.Modal.getInstance(modal).close();
      loginForm.reset();
    })
    .then(() => {
      location.href = "index.html";
    });
});
