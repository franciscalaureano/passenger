//------------------------
//------LOCALIZAÇÃO-------
//------------------------
window.onload = function getLocation() {
  if (navigator.geolocation) {
  navigator.geolocation.watchPosition(showPosition);
  } else {
  x.innerHTML = "Geolocation is not supported by this browser.";
  }
  };
  // coordenadas da posição atual do utilizador
  function showPosition(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
 
  document.getElementById("latitude").innerHTML = lat;
  document.getElementById("latitude").style.display = "none";


  document.getElementById("longitude").innerHTML = long;
  document.getElementById("longitude").style.display = "none";

//------------------------
//------autentificação-------
//------------------------
auth.onAuthStateChanged((user) => {
  if (user) {
    db.collection("users").onSnapshot(
      (snapshot) => {
        //setupGuides(snapshot.docs);
        setupUI(user);
      },
      (err) => {
        console.log(err.message);
      }
    );
  } else {
    setupUI();
    //setupGuides([]);
  }
});

const createForm = document.querySelector("#create-form");
createForm.addEventListener("submit", (e) => {
  e.preventDefault();
  db.collection("guides")
    .add({
      title: createForm.title.value,
      content: createForm.content.value,
    })
    .then(() => {
      // close the create modal & reset form
      const modal = document.querySelector("#modal-create");
      M.Modal.getInstance(modal).close();
      createForm.reset();
    })
    .catch((err) => {
      console.log(err.message);
    });
});

// / sign up
const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // get user info
  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;

 
  
  // sign up the user
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((cred) => {
      return db.collection("users").doc(cred.user.uid).set({
        bio: signupForm["signup-bio"].value,
        lat: signupForm["latitude"].value,
        long: signupForm["longitude"].value,
      });

    })
  }).then(() => {
    // close the signup modal & reset form
    /*const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    signupForm.reset();*/
   location.href = "index.html";
  })
  ;


//logout
const logout = document.querySelector("#logout");
logout.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log("user signed out");
  });
});
// login
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // get user info
  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;


  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    console.log(cred.user);
    // close the signup modal & reset form
    const modal = document.querySelector("#modal-login");
    M.Modal.getInstance(modal).close();
    loginForm.reset();
  });
});
  }