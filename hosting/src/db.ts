// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxQwtTBvwc98loi5LlBBDIL34iiSOL10E",
  authDomain: "lex-c62a6.firebaseapp.com",
  projectId: "lex-c62a6",
  storageBucket: "lex-c62a6.appspot.com",
  messagingSenderId: "821876437446",
  appId: "1:821876437446:web:e4916d55c3f682a365c2c7",
  measurementId: "G-5BK9HSMSEY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
