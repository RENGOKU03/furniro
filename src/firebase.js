import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC05N7E6V-0NGHYi8krm6wB_Y0qS9AiChQ",
  authDomain: "furniro-631fb.firebaseapp.com",
  projectId: "furniro-631fb",
  storageBucket: "furniro-631fb.firebasestorage.app",
  messagingSenderId: "765536904403",
  appId: "1:765536904403:web:db535dddfde0ab20fae026",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const db = getFirestore(app);

export { auth, provider, signInWithPopup, db };
