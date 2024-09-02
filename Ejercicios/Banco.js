const usuarios = [
    { identificacion: 109487, nombre: "Yarleno", pin: 4545, saldo: 100000, numero_cuenta: 1 },
    { identificacion: 109487, nombre: "Yarleno", pin: 4546, saldo: 100000, numero_cuenta: 2 },
    { identificacion: 100555, nombre: "Carlos", pin: 1234, saldo: 100000, numero_cuenta: 1 },
    { identificacion: 100555, nombre: "Carlos", pin: 1235, saldo: 100000, numero_cuenta: 2 },
    { identificacion: 119234, nombre: "Camilo", pin: 8778, saldo: 100000, numero_cuenta: 1 },
    { identificacion: 119234, nombre: "Camilo", pin: 8779, saldo: 100000, numero_cuenta: 2 }
];

// Función para solicitar y devolver la identificación del usuario
function idIngresado() {
    return Number(prompt("Ponga su número de identificación"));
}

// Función para solicitar y validar el PIN del usuario
function validarPin(usuario) {
    const intentosMax = 3;
    let intentos = 0;

    while (intentos < intentosMax) {
        const pinIngresado = Number(prompt("Ingrese su PIN"));
        if (pinIngresado === usuario.pin) {
            alert(`Bienvenido, ${usuario.nombre}!`);
            return true;
        } else {
            alert("PIN incorrecto. Inténtelo de nuevo.");
            intentos++;
        }
    }
    
    alert("Número máximo de intentos alcanzado. Inténtelo más tarde.");
    return false;
}

// Función principal para validar al usuario
function validacionUsu() {
    const id = idIngresado();
    const usuario = usuarios.find(u => u.identificacion === id);
    
    if (usuario) {
        if (validarPin(usuario)) {
            const cuentas = usuarios.filter(u => u.identificacion === id);
            const numCuenta = Number(prompt(`Seleccione el número de cuenta (1 o 2) de las siguientes cuentas disponibles:\n${cuentas.map(c => c.numero_cuenta).join('\n')}`));
            const cuentaSeleccionada = cuentas.find(c => c.numero_cuenta === numCuenta);
            
            if (cuentaSeleccionada) {
                return cuentaSeleccionada;
            } else {
                alert("Número de cuenta no válido.");
                return false;
            }
        } else {
            return false;
        }
    } else {
        alert("Usuario no encontrado.");
        return false;
    }
}

// Función para encontrar destinatario
function encontrarDestinatario(identificacion, numero_cuenta) {
    return usuarios.find(u => u.identificacion === identificacion && u.numero_cuenta === numero_cuenta);
}

// Función principal del menú
function Menu() {
    const usuario = validacionUsu();

    if (!usuario) return; 

    let continuar = true;

    while (continuar) {
        const opcion = Number(prompt(`Seleccione una opción:
            1. Consultar saldo
            2. Retirar
            3. Transferir
            4. Salir`));
        
        switch (opcion) {
            case 1:
                alert(`Su saldo es: $${usuario.saldo}`);
                break;
            
            case 2: {
                const retiro = Number(prompt(`Ingrese el monto que desea retirar:
                    1. $50000
                    2. $100000
                    3. $150000`));
                
                let montoRetiro;
                if (retiro === 1) {
                    montoRetiro = 50000;
                } else if (retiro === 2) {
                    montoRetiro = 100000;
                } else if (retiro === 3) {
                    montoRetiro = 150000;
                } else {
                    alert(`Monto no válido.`);
                    break;
                }

                if (usuario.saldo >= montoRetiro) {
                    usuario.saldo -= montoRetiro;
                    alert(`Su retiro de $${montoRetiro} fue exitoso. Su nuevo saldo es: $${usuario.saldo}`);
                } else {
                    alert(`Saldo insuficiente.`);
                }
                break;
            }
            
            case 3: {
                const cuentaDestinada = Number(prompt("Ingrese la identificación del destinatario"));
                const numCuentaDestinada = Number(prompt("Ingrese el número de cuenta del destinatario (1 o 2)"));
                const montoTransferir = Number(prompt("Ingrese el monto que desea transferir"));

                const destinatario = encontrarDestinatario(cuentaDestinada, numCuentaDestinada);
                
                if (destinatario) {
                    if (usuario.saldo >= montoTransferir) {
                        usuario.saldo -= montoTransferir;
                        destinatario.saldo += montoTransferir;
                        alert(`Su transferencia de $${montoTransferir} se realizó exitosamente.`);
                    } else {
                        alert(`Saldo insuficiente para realizar la transferencia.`);
                    }
                } else {
                    alert(`Destinatario no encontrado.`);
                }
                break;
            }
            
            case 4:
                continuar = false;
                alert(`Saliendo...`);
                break;
            
            default:
                alert(`Opción no válida.`);
                break;
        }
    }
}

Menu();
