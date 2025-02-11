// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrjVM2waGRqxHuYweMUdnL2pdGEPXQuls",
  authDomain: "tournament-1d238.firebaseapp.com",
  databaseURL: "https://tournament-1d238-default-rtdb.firebaseio.com",
  projectId: "tournament-1d238",
  storageBucket: "tournament-1d238.firebasestorage.app",
  messagingSenderId: "985830262896",
  appId: "1:985830262896:web:3b2265ff6073f239154cb5",
  measurementId: "G-KDJP1DHMVQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);