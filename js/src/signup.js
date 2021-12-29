const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // get user info
  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;

  // sign up the user
  auth
    .createUserWithEmailAndPassword(email, password)
    .catch((err) => {
      document.getElementById("signupError").innerHTML = err.message;
      console.log(err);
    })
    .then((cred) => {
      return db.collection("users").doc(cred.user.uid).set({
        bio: signupForm["signup-bio"].value,
        lat: signupForm["latitude"].value,
        long: signupForm["longitude"].value,
      });
    })
    .then(() => {
      location.href = "index.html";
    });
});

console.log(err);
