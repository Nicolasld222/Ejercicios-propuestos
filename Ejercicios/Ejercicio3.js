// Datos para almacenar las estadísticas
let totalAtendidos = 0;
let atencionLlamada = 0;
let atencionAsesoria = 0;
let atencionEstudiante = 0;
let atencionDirectivo = 0;
let atencionTransferencia = 0;

function registrarAtencion() {
    let cedula = prompt("Ingrese el número de cédula:").trim();
    let tipoAtencion = prompt("Seleccione el tipo de atención: \n1. Llamada telefónica\n2. Asesoría").trim();

    if (tipoAtencion === '1') {
        atencionLlamada++;
        alert(`Usuario con cédula ${cedula} atendido por llamada telefónica.`);
    } else if (tipoAtencion === '2') {
        let tipoAsesoria = prompt("Seleccione el tipo de asesoría: \n1. Estudiante\n2. Directivo").trim();

        if (tipoAsesoria === '1') {
            atencionEstudiante++;
            alert(`Usuario con cédula ${cedula} atendido en asesoría para estudiantes.`);
        } else if (tipoAsesoria === '2') {
            atencionDirectivo++;
            alert(`Usuario con cédula ${cedula} atendido en asesoría para directivos.`);
        }

        atencionAsesoria++;

        let transferir = prompt("¿Desea transferir a llamada telefónica? (si/no)").trim().toLowerCase();
        if (transferir === 'si') {
            atencionLlamada++;
            atencionTransferencia++;
            alert(`Usuario con cédula ${cedula} transferido a llamada telefónica.`);
        }
    } else {
        alert("Tipo de atención no válido.");
        return;
    }

    totalAtendidos++;
}

function mostrarEstadisticas() {
    alert(`Estadísticas de atención:
    - Total de usuarios atendidos: ${totalAtendidos}
    - Usuarios atendidos por llamada telefónica: ${atencionLlamada}
    - Usuarios atendidos por asesoría: ${atencionAsesoria}
        - Asesoría para estudiantes: ${atencionEstudiante}
        - Asesoría para directivos: ${atencionDirectivo}
    - Transferencias de asesoría a llamada telefónica: ${atencionTransferencia}`);
}

function Menu() {
    let continuar = true;
    while (continuar) {
        let opcion = prompt(`Seleccione una opción:
            1. Registrar atención
            2. Mostrar estadísticas
            3. Salir`).trim();

        switch (opcion) {
            case '1':
                registrarAtencion();
                break;
            case '2':
                mostrarEstadisticas();
                break;
            case '3':
                continuar = false;
                break;
            default:
                alert("Opción no válida. Inténtalo de nuevo.");
        }
    }
}

Menu();
