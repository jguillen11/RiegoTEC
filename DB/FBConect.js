// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA29zgpPmMSxvMRP_V12OyZAIFXtUVYPLM",
  authDomain: "riego-tec.firebaseapp.com",
  databaseURL: "https://riego-tec-default-rtdb.firebaseio.com",
  projectId: "riego-tec",
  storageBucket: "riego-tec.firebasestorage.app",
  messagingSenderId: "73390716317",
  appId: "1:73390716317:web:dd6a2aa491b44bc0542b74",
  measurementId: "G-JRDGRY3LHW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);

export {app,auth};