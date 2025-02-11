function register() {
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const freeFireId = document.getElementById("freeFireId").value || "N/A"; // Optional
    const pubgId = document.getElementById("pubgId").value || "N/A"; // Optional
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (!fullName || !email || !phone || !password) {
        message.style.color = "red";
        message.textContent = "Full Name, Gmail, Phone & Password required!";
        return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const userId = userCredential.user.uid;

            firebase.database().ref("users/" + userId).set({
                fullName: fullName,
                email: email,
                phone: phone,
                freeFireId: freeFireId,
                pubgId: pubgId,
                userId: userId
            });

            message.style.color = "green";
            message.textContent = "Registration successful! Redirecting...";
            setTimeout(() => {
                window.location.href = "index.html"; // লগইন পেজে পাঠাবে
            }, 2000);
        })
        .catch((error) => {
            message.style.color = "red";
            message.textContent = error.message;
        });
}