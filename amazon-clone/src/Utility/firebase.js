// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAm4G-3sXWGvKXCyjwj0o29YZoJ-PPY1eQ",
    authDomain: "clone-15e9a.firebaseapp.com",
    projectId: "clone-15e9a",
    storageBucket: "clone-15e9a.firebasestorage.app",
    messagingSenderId: "527080945184",
    appId: "1:527080945184:web:75b26c4d5c928b7a742e45"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);







