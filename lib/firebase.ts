import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFQ_xxvIW1dcRKzhaWULdNb7gEEpe_9TU",
  authDomain: "areca-studio.firebaseapp.com",
  databaseURL: "https://areca-studio-default-rtdb.firebaseio.com",
  projectId: "areca-studio",
  storageBucket: "areca-studio.firebasestorage.app",
  messagingSenderId: "801485446463",
  appId: "1:801485446463:web:915b8a6a7c5011d500478a",
  measurementId: "G-M2Q10TERDP"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
