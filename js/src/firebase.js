// Initialize Firebase
var config = {
  apiKey: "AIzaSyAMNRdeSeupmt3q-pfRJ6slzQZsMDwwKT0",
  authDomain: "passenger-95dd3.firebaseapp.com",
  projectId: "passenger-95dd3",
  storageBucket: "passenger-95dd3.appspot.com",
  messagingSenderId: "263648786960",
  appId: "1:263648786960:web:4d39c863d96a5b3974e895",
};

firebase.initializeApp(config);

// make auth and firestore references
const auth = firebase.auth();
const db = firebase.firestore();

// update firestore settings
db.settings({ timestampsInSnapshots: true });
