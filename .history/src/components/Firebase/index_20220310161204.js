// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnlzQ8G_AYhpiy_HwzOrHyrUaGmI8rKaQ",
  authDomain: "blog-79ec0.firebaseapp.com",
  projectId: "blog-79ec0",
  storageBucket: "blog-79ec0.appspot.com",
  messagingSenderId: "395985474497",
  appId: "1:395985474497:web:39cc8bf9ad4d428a1e9540",
  measurementId: "G-7REHMS8T2X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

