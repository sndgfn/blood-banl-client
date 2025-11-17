// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDDZ0hDjYKJMAJGuH4dgbLPajAmQbRV7s",
  authDomain: "blood-bank-af686.firebaseapp.com",
  projectId: "blood-bank-af686",
  storageBucket: "blood-bank-af686.firebasestorage.app",
  messagingSenderId: "919179625214",
  appId: "1:919179625214:web:4365ca922bee059cff5baf",
  measurementId: "G-QT1DFHFZ08"
};


// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId
// };



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);