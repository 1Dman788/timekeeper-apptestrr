// Firebase initialization module

// Import required Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// Your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyDU7yhApAh4EbZYmIvqdefLy7xY6G2Ik7g",
  authDomain: "uhhh-27210.firebaseapp.com",
  projectId: "uhhh-27210",
  storageBucket: "uhhh-27210.firebasestorage.app",
  messagingSenderId: "869810449235",
  appId: "1:869810449235:web:618ab8dadce7ea93490fa6",
  measurementId: "G-9335TS6XZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Export app + database
export { app, db };
