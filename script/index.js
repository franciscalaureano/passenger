
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfouMJgtqKCfGPdSrrQQ0cPJkDj34DcAA",
  authDomain: "passenger-26635.firebaseapp.com",
  databaseURL: "https://passenger-26635-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "passenger-26635",
  storageBucket: "passenger-26635.appspot.com",
  messagingSenderId: "857432739466",
  appId: "1:857432739466:web:8c5f88b01994112c42a773",
  measurementId: "G-3PKJHYJ5K6"
};

firebase.initializeApp(irebaseConfi);
    
    // make auth and firestore references
    const db = firebase.firestore();

// Get a reference to the database service
const database = firebase.getDatabase(app);

const userId = document.getElementById("userId");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const age = document.getElementById("age");
const addBtn = document.getElementById("addBtn");
const updateBtn = document.getElementById("updateBtn");
const removeBtn = document.getElementById("removeBtn");

const database= firebase.database(); 

addBtn.addEventListener('click',  (e) => {
    e.preventDefault(); 
    database.ref('/users/'+userId.value).set({
        first_name: firstName.value,
        last_name: lastName.value, 
        age: age.value 
    })
});
