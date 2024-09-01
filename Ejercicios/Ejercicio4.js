let ColaEspera = [];

function tomaTurno() {
    let confirmar = confirm("¿Llegaste al banco?");
    
    if (confirmar) {
        ColaEspera.push(ColaEspera.length + 1); 
        alert(`Tu turno es ${ColaEspera.length}`);
    } else {
        alert("No has tomado un turno.");
    }
}

function llamarcli() {
    let esEmpleado = Empleado();
    if (esEmpleado) {
        let llamarsigcliente = confirm("¿Llamar al siguiente cliente?");
        if (llamarsigcliente && ColaEspera.length > 0) {
            alert(`El siguiente turno es ${ColaEspera[0]}`);
            eliminarcola();
        } else if (ColaEspera.length === 0) {
            alert("No hay clientes en espera.");
        }
    }
}

function eliminarcola() {
    ColaEspera.shift(); 
}

function mostrarcola() {
    alert(`El número de personas que están antes de usted es ${ColaEspera.length - 1}`);
}

function Empleado() {
    let usuario = Number(prompt("Ingrese el usuario"));
    return usuario === 123;
}

function clienteEmpleado() {
    let clienteEmpleado = Number(prompt("¿Qué cargo tienes? 1. Cliente 2. Empleado"));
    
    if (clienteEmpleado === 1) {
        tomaTurno();
        mostrarcola();
    } else if (clienteEmpleado === 2) {
        llamarcli();
    }
}


clienteEmpleado();
