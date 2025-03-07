document.getElementById("signup-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const userData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        age: document.getElementById("age").value,
        weight: document.getElementById("weight").value,
        height: document.getElementById("height").value,
        disease: document.getElementById("disease").value,
    };

    const response = await fetch("/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
    });

    const data = await response.json();
    if (response.ok) {
        alert("Signup Successful! Redirecting...");
        window.location.href = "/dashboard";
    } else {
        alert("Error: " + data.message);
    }
});
