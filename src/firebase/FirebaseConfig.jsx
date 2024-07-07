// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkYE8RnOlN8OS32jtwb8CfLwrZzMDlUno",
  authDomain: "frontend-61aa9.firebaseapp.com",
  projectId: "frontend-61aa9",
  storageBucket: "frontend-61aa9.appspot.com",
  messagingSenderId: "586068000800",
  appId: "1:586068000800:web:27173d082f74c18d583c45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);
export {fireDB, auth}