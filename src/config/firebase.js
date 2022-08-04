import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDHNNkxy1ArDBxSLG2CYS2pzS7Zndyy9Yc",
    authDomain: "rizki-final.firebaseapp.com",
    projectId: "rizki-final",
    storageBucket: "rizki-final.appspot.com",
    messagingSenderId: "158899545922",
    appId: "1:158899545922:web:216516fef06aec008b0adb"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };