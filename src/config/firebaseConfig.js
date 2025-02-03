import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIas4f1bprTpWp9dRvl7KayX2nAFWynz0",
  authDomain: "data-residue.firebaseapp.com",
  databaseURL: "https://data-residue-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "data-residue",
  storageBucket: "data-residue.firebasestorage.app",
  messagingSenderId: "60508556617",
  appId: "1:60508556617:web:b82d5cb0a2abb17ebf1e98",
  measurementId: "G-GNWVY6JJWK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
