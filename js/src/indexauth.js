const guideList = document.querySelector(".guides");
const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");
const accountDetails = document.querySelector(".account-details");
const setupUI = (user) => {
  if (user) {
    db.collection("users")
      .doc(user.uid)
      .get()
      .then((doc) => {
        const html = `
      <div> Logged in as ${user.email}</div>
      <div>${doc.data().bio}</div>
      `;
        accountDetails.innerHTML = html;
      });

    // toggle user UI elements
    loggedInLinks.forEach((item) => (item.style.display = "block"));
    loggedOutLinks.forEach((item) => (item.style.display = "none"));
  } else {
    accountDetails.innerHTML = ``;
    // toggle user elements
    loggedInLinks.forEach((item) => (item.style.display = "none"));
    loggedOutLinks.forEach((item) => (item.style.display = "block"));
  }
};

/* <div> Logged in as ${user.email}</div> */

/* db.collection("users")
  .doc("V5YgTKtIHfbacTMXQzU0OzniMbJ2")
  .get()
  .then((doc) => {
    const html = `
      
      <div>${doc.data().bio}</div>
      `;
    accountDetails.innerHTML = html;
  }); */

// toggle user UI elements
loggedInLinks.forEach((item) => (item.style.display = "block"));
loggedOutLinks.forEach((item) => (item.style.display = "none"));

// setup guides
/*
const setupGuides = (data) => {
  if (data.length) {
    let html = "";
    data.forEach((doc) => {
      const guide = doc.data();
      const li = `
        <li>
          <div class="collapsible-header grey lighten-4"> ${guide.email} </div>
          <div class="collapsible-body white"> ${guide.bio} </div>
        </li>
      `;
      html += li;
    });
    guideList.innerHTML = html;
  } else {
    guideList.innerHTML =
      '<h5 class="center-align">Login to view the Guides </h5>';
  }
};*/

/* const setupUsers = (data) => {
  if (data.length) {
    let html = "";
    data.forEach((doc) => {
      const guide = doc.data();
      const li = `
        <li>
          <div class="collapsible-header grey lighten-4"> ${guide.email} </div>
          <div class="collapsible-body white"> ${guide.bio} </div>
        </li>
      `;
      html += li;
    });
    guideList.innerHTML = html;
  } else {
    guideList.innerHTML =
      '<h5 class="center-align">Login to view the Guides </h5>';
  }
}; */

db.collection("users").onSnapshot((snapshot) => {
  setupUsers(snapshot.docs);
});

const setupUsers = (data) => {
  let html = "";
  data.forEach((doc) => {
    const user = doc.data();

    const li = `
        <li>
          <div class="collapsible-header grey lighten-4"> ${user.email} </div>
          <div class="collapsible-body white"> ${user.bio} </div>
        </li>
      `;
    html += li;
  });
  guideList.innerHTML = html;
};

document.addEventListener("DOMContentLoaded", function () {
  var modals = document.querySelectorAll(".modal");
  M.Modal.init(modals);

  var items = document.querySelectorAll(".collapsible");
  M.Collapsible.init(items);
});
