// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7ZtBgGstU9cpDKUBGDy6SLiuJ-yGKQAc",
  authDomain: "toy-verse-assignment.firebaseapp.com",
  projectId: "toy-verse-assignment",
  storageBucket: "toy-verse-assignment.appspot.com",
  messagingSenderId: "266756489310",
  appId: "1:266756489310:web:21b6a023bac4942527b4cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;