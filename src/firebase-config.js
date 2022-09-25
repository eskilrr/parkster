import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBbPCzjJEhAU0DAccA3lu_hzr-b0x4rcKo",
    authDomain: "parkster-ff46d.firebaseapp.com",
    projectId: "parkster-ff46d",
    storageBucket: "parkster-ff46d.appspot.com",
    messagingSenderId: "620034913272",
    appId: "1:620034913272:web:6b83fdfdb660df045adc0d",
    measurementId: "G-77JEPYCME3"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)