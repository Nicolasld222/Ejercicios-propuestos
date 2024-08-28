const usuarios = [
    { identificacion: 109487, nombre: "Yarleno", pin: 4545, Saldo: 100000},
    { identificacion: 100555, nombre: "Carlos", pin: 1234, Saldo: 100000},
    { identificacion: 119234, nombre: "Camilo", pin: 8778, Saldo: 100000 }
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
        return true
    } else {
        alert("PIN incorrecto. Inténtelo de nuevo.");
        return false
    }
}

// Función principal para validar al usuario
function validacionUsu() {
    const id = idIngresado(); 
    const usuario = usuarios.find(u => u.identificacion === id);
    
    if (usuario) {
        validarPin(usuario);
    } else {
        alert("Usuario no encontrado.");
        return false
    }
}

validacionUsu();

//Funcion menu
function Menu(validarPin, validacionUsu){
    let usuario = validacionUsu();
    let Pin = validarPin();

    while(Pin && usuario === true){
        let opcion = Number(prompt(`Selecione una opcion
            1. Consultar saldo
            2. Retirar
            3. Transferir
            4. salir`))
        switch(opcion){
            case 1: alert (`Su saldo es: ${usuario.Saldo}`)
            break;
            case 2:{
                let retiro = Number(prompt(`Ingrese el monto que desea retirar
                    1.$50000
                    2.$100000
                    3.$150000`))

                    if(retiro === 1){
                        
                    }
            }
            case 3: return 3
            case 4: return Pin = false
        }
    }
}
Menu();
