import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyCjW55HpNclI5e8LsS8DpPSwmHj0C7R-yU",
    authDomain: "debtors-ledger.firebaseapp.com",
    projectId: "debtors-ledger",
    storageBucket: "debtors-ledger.firebasestorage.app",
    messagingSenderId: "207764357040",
    appId: "1:207764357040:web:2024528a8869129a24a075"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
