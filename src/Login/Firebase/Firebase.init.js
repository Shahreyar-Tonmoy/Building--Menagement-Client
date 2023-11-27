// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  measurementId: import.meta.env.VITE_measurementId


  // apiKey: "AIzaSyA1Ki0eDKaTteX4ZGB6QqlKOBiQcz4NJoI",
  // authDomain: "buildsync-hub.firebaseapp.com",
  // projectId: "buildsync-hub",
  // storageBucket: "buildsync-hub.appspot.com",
  // messagingSenderId: "299412948548",
  // appId: "1:299412948548:web:5099682d1be85a01075e11",
  // measurementId: "G-JQ5YX4HKHY"



};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
