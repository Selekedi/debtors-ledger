import { addDoc, collection } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";
import { checkAuth } from "./auth.js";
import { db } from "./firebaseConfig.js";

const button = document.querySelector("button")

window.addEventListener("DOMContentLoaded", async e => {
    const authenticated = await checkAuth()
    if(!authenticated){
        window.location.href = "auth.html"
        return
    }

})


async function addProduct(){
    const brand = document.getElementById("brand").value
    const name = document.getElementById("name").value
    const quantity = document.getElementById("quantity").value
    const price = document.getElementById("price").value

    try {
        const docRef = await addDoc(collection(db,"products"), {
            brand,
            name,
            quantity,
            price
        })
    } catch (error) {
        
    }
}