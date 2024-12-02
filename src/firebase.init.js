// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-QrnNDwwi-OcT96tv8IlmWqLrkTYmGpw",
  authDomain: "coffee-store-b546c.firebaseapp.com",
  projectId: "coffee-store-b546c",
  storageBucket: "coffee-store-b546c.firebasestorage.app",
  messagingSenderId: "743609826076",
  appId: "1:743609826076:web:09f45986bef92c70b298d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);