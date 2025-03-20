import { signIn } from "./auth.js";

const button =  document.querySelector("button")
button.addEventListener("click",async e => {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const signedIn =  await signIn(email,password)
    if(signedIn){
        window.location.href = "index.html"
        return
    }else {
        alert("wrong log in credentials")
    }
})