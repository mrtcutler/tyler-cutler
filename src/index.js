import { initializeApp } from 'firebase/app'; // 'https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js'; // 
// "getAuth", "getFirestore" are getter functions for firebase services
// ex: import { <service> } from 'firebase/<service>';
import { getAuth, onAuthStateChanged } from 'firebase/auth'; // 'https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js'; // 
import { getFirestore } from 'firebase/firestore'; // 'https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js'; // 
import { getAnalytics } from 'firebase/analytics'; // 'https://www.gstatic.com/firebasejs/9.6.5/firebase-analytics.js'; // 

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyByqjwcqvsYgRyubX0Ct69fRfPZBAN0wIc",
    authDomain: "tyler-cutler.firebaseapp.com",
    projectId: "tyler-cutler",
    storageBucket: "tyler-cutler.appspot.com",
    messagingSenderId: "749598706252",
    appId: "1:749598706252:web:06b49fea658fb1ace982e9",
    measurementId: "G-HZ1DQLCL68"
  };


// Must Initialize Firebase First, before calling service getter functions
const firebaseApp = initializeApp(firebaseConfig);

// start services
const analytics = getAnalytics(firebaseApp);
const auth = getAuth();
const db = getFirestore();

// Detect Auth State
onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log('logged in!');
    } else {
        console.log('no user');
    }
});
