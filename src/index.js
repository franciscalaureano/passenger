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

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);