import { addDoc, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";
import { checkAuth } from "./auth.js";
import { db } from "./firebaseConfig.js";

const customerRef = collection(db, "customers")

const button = document.querySelector("button")

window.addEventListener("DOMContentLoaded", async e => {
    const authenticated = await checkAuth()
    if(!authenticated){
        window.location.href = "auth.html"
        return
    }

})

button.addEventListener("click", async e => {
    addCustomer()
})

async function getCustomerByIDNumber(idNumber){
    try {
        const q = query(
            customerRef,
            where("idNumber", "==", idNumber)
        )

        const customer = await getDocs(q)
        
        return customer.docs
    } catch (error) {
        console.error(error)
        return null
    }
}

async function addCustomer(){
    const email = document.getElementById("email").value
    const firstName = document.getElementById("first-name").value
    const lastName = document.getElementById("last-name").value
    const cellNumber = document.getElementById("cell-number").value
    const idNumber = document.getElementById("id-number").value

    console.log("email :", email,"first name :",firstName,"last name :",lastName,"cell number :",cellNumber,"id number :",idNumber);
    try {
        const existingCustomer = await getCustomerByIDNumber(idNumber)
        console.log(existingCustomer);
        
        if(existingCustomer && existingCustomer.length !== 0){
            alert("Customer with this Id Number exists")
            return
        }
        const docRef = await addDoc(customerRef, {
            email: email.toLowerCase(),
            firstName: firstName.toLowerCase(),
            lastName: lastName.toLowerCase(),
            cellNumber: cellNumber.toLowerCase(),
            idNumber: idNumber.toLowerCase()
        })
        String().t
        console.log("customer added")
    } catch (error) {
        console.error(error)
    }
}



