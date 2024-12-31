import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDGpy49f5R0ZnETxkhqmoazSismhe9ecCM",
  authDomain: "ongcetbulgaria.firebaseapp.com",
  projectId: "ongcetbulgaria",
  storageBucket: "ongcetbulgaria.firebasestorage.app",
  messagingSenderId: "1096144210485",
  appId: "1:1096144210485:web:a2376a7e713c2e05d2bf7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
// Export Firestore and Storage instances
