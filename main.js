import { checkAuth } from "./auth.js";

window.addEventListener("DOMContentLoaded", async e => {
    const authenticated = await checkAuth()
    if(!authenticated){
        window.location.href = "auth.html"
    }
})