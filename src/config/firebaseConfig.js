import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4oEt9UbhnfQTfy_Gu3_P5SUkxqB7wscg",
  authDomain: "data-technook.firebaseapp.com",
  databaseURL: "https://data-technook-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "data-technook",
  storageBucket: "data-technook.firebasestorage.app",
  messagingSenderId: "628536218197",
  appId: "1:628536218197:web:4b568df8d4d740a5733adc",
  measurementId: "G-CBFLZKBSGW"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
