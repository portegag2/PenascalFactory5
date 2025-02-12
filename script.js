function mostrarBienvenida() {
    // Obtener el valor del input
    const nombre = document.getElementById('nombre').value;

    // Verificar si el nombre no está vacío
    if (nombre.trim() === "") {
        alert("Por favor, ingresa tu nombre.");
        return;
    }

    // Mostrar el mensaje de bienvenida
    const mensaje = document.getElementById('mensaje');
    mensaje.textContent = `¡Hola, ${nombre}! Bienvenido/a a nuestra página.`;
}

async function llamarAPI() {
    try {
        let respuesta = await fetch("http://127.0.0.1:8000/");
        let datos = await respuesta.json();
        document.getElementById("resultado").innerText = datos.mensaje;
    } catch (error) {
        console.error("Error al llamar la API", error);
    }
}

//window.llamarAPI = llamarAPI
//window.mostrarBienvenida = mostrarBienvenida