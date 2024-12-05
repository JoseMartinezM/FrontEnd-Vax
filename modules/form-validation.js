// Validación del formulario
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    let isValid = true;

    // Validar nombre
    if (!name.value.trim()) {
        alert("El nombre no puede estar vacío.");
        isValid = false;
    }

    // Validar email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        alert("Por favor, ingresa un correo válido.");
        isValid = false;
    }

    // Validar mensaje
    if (message.value.trim().length < 10) {
        alert("El mensaje debe tener al menos 10 caracteres.");
        isValid = false;
    }

    // Mensaje de éxito y log en consola
    if (isValid) {
        console.log("=== Nuevo Mensaje de Contacto ===");
        console.log(`Nombre: ${name.value}`);
        console.log(`Correo Electrónico: ${email.value}`);
        console.log(`Mensaje: ${message.value}`);
        console.log("=================================");

        alert("Formulario enviado correctamente.");

        // Limpiar campos
        name.value = "";
        email.value = "";
        message.value = "";
    }
});
