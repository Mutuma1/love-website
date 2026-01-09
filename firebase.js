
// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// 🔥 REPLACE these values with your Firebase Realtime Database config
export const firebaseConfig = {
  
  apiKey: "AIzaSyAh27cRZY8RcsVdycPVy-WsRl839PkuBys",
  authDomain: "lov3-card.firebaseapp.com",
  databaseURL: "https://lov3-card-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "lov3-card",
  storageBucket: "lov3-card.firebasestorage.app",
  messagingSenderId: "721363840628",
  appId: "1:721363840628:web:57b7129ce0ef28e1c96b21"
};

// Initialize Firebase app
export const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
export const db = getDatabase(app);
