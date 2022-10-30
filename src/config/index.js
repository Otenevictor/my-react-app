// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, GoogleAuthProvider, getRedirectResult, onAuthStateChanged } from "firebase/auth";

// const provider = new GoogleAuthProvider();
import App from "../App";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfd33FODMOWXfwivoN-Cbx9Q7_wp1jBek",
  authDomain: "blessed-50872.firebaseapp.com",
  projectId: "blessed-50872",
  storageBucket: "blessed-50872.appspot.com",
  messagingSenderId: "580956779625",
  appId: "1:580956779625:web:48e9a8fdf3039527d19ef8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// setup auth provider
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth, signInWithRedirect, GoogleAuthProvider, getRedirectResult, onAuthStateChanged };
