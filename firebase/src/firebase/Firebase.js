// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTYrvf7gtRNye21PEol864lI-y7jAAOG8",
  authDomain: "fir-project-ea6ed.firebaseapp.com",
  projectId: "fir-project-ea6ed",
  storageBucket: "fir-project-ea6ed.appspot.com",
  messagingSenderId: "991146339885",
  appId: "1:991146339885:web:91e09ce9c3579c46abd2a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)