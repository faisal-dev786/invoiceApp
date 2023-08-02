// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKhD_G-YzjxGdSN1Fxgeg6jnOhwjE6CNs",
  authDomain: "invoices-78926.firebaseapp.com",
  projectId: "invoices-78926",
  storageBucket: "invoices-78926.appspot.com",
  messagingSenderId: "1019803186904",
  appId: "1:1019803186904:web:c77d63d80b9d12d1b889ad",
  measurementId: "G-8C1ZN7KDY4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
