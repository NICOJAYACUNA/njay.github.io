const loginForm = document.getElementById("form");
const loginButton = document.getElementById("btn");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "12345") {
        alert("Your username and Password is Correct!");
        location.href = "web1.html";
    } else {
       alert("Your username and Password is Incorrect!");
    }
})