// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT_E6AIWbdm7fsHPjpVBfhOIMtr2xsWI8",
  authDomain: "auth-practise-4fc2d.firebaseapp.com",
  projectId: "auth-practise-4fc2d",
  storageBucket: "auth-practise-4fc2d.appspot.com",
  messagingSenderId: "539791266164",
  appId: "1:539791266164:web:e4661a608839701582dc21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

