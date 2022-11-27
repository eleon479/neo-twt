// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnZbs1M5lXktsYPs4A3HazrLHURonLh5M",
  authDomain: "chitter-751d7.firebaseapp.com",
  projectId: "chitter-751d7",
  storageBucket: "chitter-751d7.appspot.com",
  messagingSenderId: "308761815874",
  appId: "1:308761815874:web:01dc3d5e0e6cc2830fb6db",
  measurementId: "G-VSHXVNNNJ0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
