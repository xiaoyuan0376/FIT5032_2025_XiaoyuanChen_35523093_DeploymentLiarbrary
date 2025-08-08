// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWlHy6PfnVc2Kt51Tm24vUliy144SXHq8",
  authDomain: "assessed-lab-7.firebaseapp.com",
  projectId: "assessed-lab-7",
  storageBucket: "assessed-lab-7.firebasestorage.app",
  messagingSenderId: "189813608449",
  appId: "1:189813608449:web:ecd9486b6540de240cf000"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
export default db;