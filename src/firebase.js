// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdhR1IKEl_jt7bI_HmjrYWSvEvLf9T6W8",
  authDomain: "realtor-clone-a0b0b.firebaseapp.com",
  projectId: "realtor-clone-a0b0b",
  storageBucket: "realtor-clone-a0b0b.appspot.com",
  messagingSenderId: "78976965076",
  appId: "1:78976965076:web:5f66a84094c155238f9e41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();