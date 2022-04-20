// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiAHUpPlNa5WVe2DrTbqZCD5WrdtoeSc0",
  authDomain: "gelustiendacesde.firebaseapp.com",
  projectId: "gelustiendacesde",
  storageBucket: "gelustiendacesde.appspot.com",
  messagingSenderId: "750759112682",
  appId: "1:750759112682:web:67ff7bc661b6d132744c93",
  measurementId: "G-DX8565PQKP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);