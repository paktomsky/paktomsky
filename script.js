function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
    
    if (username === "pak_tomo" && password === "123") {
        window.location.href = "beranda1.html";
    } else {
        errorMessage.textContent = "Kata sandi atau nama pengguna salah.";
    }
}
