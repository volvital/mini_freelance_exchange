// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import API from "./api";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8QuKx_W_F-V14bjYi0r0fDovx5jyzAk8",
  authDomain: "mini-freelance-exchange-deploy.firebaseapp.com",
  databaseURL: "https://mini-freelance-exchange-deploy-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mini-freelance-exchange-deploy",
  storageBucket: "mini-freelance-exchange-deploy.firebasestorage.app",
  messagingSenderId: "351439644376",
  appId: "1:351439644376:web:09a8113c795fa78b1a19ad"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig)
export const api = new API()

export default app