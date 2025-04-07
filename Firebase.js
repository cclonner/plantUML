// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvHnkoEoL702Rs3atDqmeOz4x5KfZLJ8o",
  authDomain: "muiv-ca20e.firebaseapp.com",
  projectId: "muiv-ca20e",
  storageBucket: "muiv-ca20e.firebasestorage.app",
  messagingSenderId: "276905966500",
  appId: "1:276905966500:web:fbf274e8a7e066704a1f31",
  measurementId: "G-YRPK6MDR8E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);