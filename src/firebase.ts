import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASNlNOirb9RFgbJMxluBbXisUMt-K1d1c",
  authDomain: "sambika-healthcare.firebaseapp.com",
  projectId: "sambika-healthcare",
  storageBucket: "sambika-healthcare.firebasestorage.app",
  messagingSenderId: "313112031584",
  appId: "1:313112031584:web:c1a946e4dcf321c5beee05",
  measurementId: "G-YVSCTV4H5B"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);