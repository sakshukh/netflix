// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtSSnbKqXdGGXAy18vkHcHTbPhTrAJ828",
  authDomain: "netflixgpt-52388.firebaseapp.com",
  projectId: "netflixgpt-52388",
  storageBucket: "netflixgpt-52388.appspot.com",
  messagingSenderId: "471367238937",
  appId: "1:471367238937:web:0879dfb84e6a326c78f188",
  measurementId: "G-ERBDD78FTJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
