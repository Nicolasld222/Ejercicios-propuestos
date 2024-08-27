const usuarios = [
    { identificacion: 109487, nombre: "Yarleno", pin: 4545 },
    { identificacion: 100555, nombre: "Carlos", pin: 1234 },
    { identificacion: 119234, nombre: "Camilo", pin: 8778 }
];

// Función para solicitar y devolver la identificación del usuario
function idIngresado() {
    return Number(prompt("Ponga su número de identificación"));
}

// Función para solicitar y validar el PIN del usuario
function validarPin(usuario) {
    const pinIngresado = Number(prompt("Ingrese su PIN"));
    if (pinIngresado === usuario.pin) {
        alert(`Bienvenido, ${usuario.nombre}!`);
    } else {
        alert("PIN incorrecto. Inténtelo de nuevo.");
    }
}

// Función principal para validar al usuario
function validacionUsu() {
    const id = idIngresado(); // Solicita la identificación del usuario
    const usuario = usuarios.find(u => u.identificacion === id); // Busca el usuario en el array
    
    if (usuario) {
        // Si el usuario existe, valida el PIN
        validarPin(usuario);
    } else {
        alert("Usuario no encontrado.");
    }
}

// Llamada a la función principal para iniciar el proceso
validacionUsu();
