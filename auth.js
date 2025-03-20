import { signInWithEmailAndPassword ,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";

import { auth } from "./firebaseConfig.js";

export async function signIn(email,password){
    try {
        const userCredentials = await signInWithEmailAndPassword(auth,email,password)
        console.log(userCredentials);
        
        if(userCredentials){
            return true
        }
        else {
            return false
        }
    } catch (error) {
        console.error(error)
        return false
    }
    
}

export async function checkAuth(){
    try {
        const user = await new Promise((resolve, reject) => {
            onAuthStateChanged(auth, resolve, reject)
        })

        if(user){
            return true
        }
        return false
    } catch (error) {
       return false 
    }
}

