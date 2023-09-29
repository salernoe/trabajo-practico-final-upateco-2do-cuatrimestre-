const form = document.getElementById("form1");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const mensajeError = [];
    console.log(nombre);
    console.log(apellido);
    console.log(username);
    console.log(email);
    console.log(password);
    if (nombre === "") {
        mensajeError.push("El nombre es obligatorio.");
        document.getElementById("nombre").focus();
    }
    if (apellido === "") {
        mensajeError.push("El apellido es obligatorio.");
        document.getElementById("apellido").focus();
    }
    if (username === "") {
        mensajeError.push("El nombre de usuario es obligatorio.");
        document.getElementById("username").focus();
    }
    if (email === "") {
        mensajeError.push("El email es obligatorio.");
        document.getElementById("email").focus();
    }
    if (password === "") {
        mensajeError.push("La contraseña es obligatoria.");
        document.getElementById("password").focus();
    }

    const mensajeElement = document.getElementById("mensaje");
    if (mensajeError.length > 0) {
        mensajeElement.innerHTML = mensajeError.join("<br>");
    } else {
        mensajeElement.innerHTML = "Formulario completado correctamente.";
    }
});
