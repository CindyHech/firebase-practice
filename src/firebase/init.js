// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdlM5EWllzGL8IAVifhdz94vqmstl2VK8",
  authDomain: "fir-practice-7608f.firebaseapp.com",
  projectId: "fir-practice-7608f",
  storageBucket: "fir-practice-7608f.firebasestorage.app",
  messagingSenderId: "1094864752114",
  appId: "1:1094864752114:web:7a2d6746ec6bf6bd1e6f6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();



