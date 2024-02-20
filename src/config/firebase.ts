// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrxi7zPtlDXEnZvd9dew6psLEp72068nI",
  authDomain: "ne-krum.firebaseapp.com",
  databaseURL: "https://ne-krum-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ne-krum",
  storageBucket: "ne-krum.appspot.com",
  messagingSenderId: "58146709430",
  appId: "1:58146709430:web:56d896d3b71c08e2f52b17",
  measurementId: "G-5T28W52QLK"
};

// Initialize Firebase
const fb_app = initializeApp(firebaseConfig);
const fb_analytics = getAnalytics(fb_app);

export default { fb_app, fb_analytics }
