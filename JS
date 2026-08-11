
const formulario = document.querySelector("form");


formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();


    const correo = document.getElementById("correo").value.trim();
    const password = document.getElementById("password").value.trim();
s
    if (correo === "" || password === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoCorreo.test(correo)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
    }

  
    if (password.length < 6) {
        alert("La contraseña debe tener mínimo 6 caracteres.");
        return;
    }

    alert("¡Bienvenido a Wonder Beauty Shop!");

    
    formulario.reset();
});
```

