
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-96f54.firebaseapp.com",
  projectId: "interviewiq-96f54",
  storageBucket: "interviewiq-96f54.firebasestorage.app",
  messagingSenderId: "111766245828",
  appId: "1:111766245828:web:8e273a90f2beb474ec9491"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}

