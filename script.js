function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            message.style.color = "green";
            message.textContent = "Login successful! Redirecting...";
            setTimeout(() => {
                window.location.href = "index.html"; // লগইন সফল হলে Home Page-এ যাবে
            }, 2000);
        })
        .catch((error) => {
            message.style.color = "red";
            message.textContent = error.message;
        });
}