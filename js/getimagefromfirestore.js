import {initializeApp} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import {getFirestore, doc, getDoc, setDoc, collection, addDoc} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyAMNRdeSeupmt3q-pfRJ6slzQZsMDwwKT0",
    authDomain: "passenger-95dd3.firebaseapp.com",
    databaseURL: "https://passenger-95dd3-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "passenger-95dd3",
    storageBucket: "passenger-95dd3.appspot.com",
    messagingSenderId: "263648786960",
    appId: "1:263648786960:web:4d39c863d96a5b3974e895"
  };

const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)

async function getImageFromFirestore(imageName){
	var image = document.getElementById("") 
	var ref = doc(firestore, "ImageLinks/"+ imageName)
	const docSnap = await getDoc(ref)

	if(docSnap.exists()){
		image.src = docSnap.data().ImageURL
	}
}
