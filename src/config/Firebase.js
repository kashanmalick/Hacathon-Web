import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCJoyMCa7fS8x0xFMw-HbXqNhhfGzsrZ_E",
    authDomain: "khanasubklye.firebaseapp.com",
    projectId: "khanasubklye",
    storageBucket: "khanasubklye.appspot.com",
    messagingSenderId: "637511946514",
    appId: "1:637511946514:web:a0d68d00042a5e65aaa3cb"
};

const app = initializeApp(firebaseConfig);
export const Authentication = getAuth();
export const db = getFirestore(app);