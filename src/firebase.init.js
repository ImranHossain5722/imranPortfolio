// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain:process.env.REACT_APP_AUTH_DOMAIN,
  projectId:process.env.REACT_APP_PROJECT_ID,
  storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId:process.env.REACT_APP_APP_ID
  
//   apiKey: "AIzaSyAfOQfOfaMmfCc-0ZclmtpG_WzAs9ebc08",
//   authDomain: "imran-portfolio-86d8a.firebaseapp.com",
//   projectId: "imran-portfolio-86d8a",
//   storageBucket: "imran-portfolio-86d8a.appspot.com",
//   messagingSenderId: "391062191577",
//   appId: "1:391062191577:web:3d6627b816b0754f0a2dc8"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;