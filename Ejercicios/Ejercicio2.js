let habitaciones = [
    { habitacion: 1, tipo: 'individual', capacidadPer: 2, mascotas: false, fumador: true, disponibilidad: true },
    { habitacion: 2, tipo: 'individual', capacidadPer: 2, mascotas: false, fumador: false, disponibilidad: true },
    { habitacion: 3, tipo: 'individual', capacidadPer: 2, mascotas: false, fumador: false, disponibilidad: true },
    { habitacion: 4, tipo: 'doble', capacidadPer: 4, mascotas: false, fumador: true, disponibilidad: true },
    { habitacion: 5, tipo: 'doble', capacidadPer: 4, mascotas: false, fumador: false, disponibilidad: true },
    { habitacion: 6, tipo: 'doble', capacidadPer: 4, mascotas: false, fumador: false, disponibilidad: true },
    { habitacion: 7, tipo: 'familiar', capacidadPer: 6, mascotas: true, fumador: true, disponibilidad: true },
    { habitacion: 8, tipo: 'familiar', capacidadPer: 6, mascotas: true, fumador: false, disponibilidad: true },
    { habitacion: 9, tipo: 'familiar', capacidadPer: 6, mascotas: true, fumador: false, disponibilidad: true }
];

let reservas = [];

// Función para filtrar habitaciones según las respuestas de la encuesta
function encuesta() {
    let mascota = prompt("¿Se va a hospedar alguna mascota? (si/no)").trim().toLowerCase();
    let fuma = prompt("¿Alguna de las personas que se va a hospedar fuma? (si/no)").trim().toLowerCase();

    if (mascota === 'si' && fuma === 'si') {
        return 'fumamascota';
    } else if (mascota === 'si' && fuma === 'no') {
        return 'mascota';
    } else if (mascota === 'no' && fuma === 'si') {
        return 'fumador';
    } else if (mascota === 'no' && fuma === 'no') {
        return 'normal';
    } else {
        alert(`Llena la encuesta correctamente`);
        return null;
    }
}

// Función para mostrar habitaciones disponibles según la encuesta
function habitacion(tipoCliente, habitaciones, tipoHabitacion, numPersonas) {
    if (!tipoCliente || !tipoHabitacion) return;

    const habitacionesDisponibles = habitaciones.filter(h => {
        if (!h.disponibilidad || h.tipo !== tipoHabitacion || numPersonas > h.capacidadPer) return false;
        
        if (tipoCliente === 'fumamascota') {
            return h.mascotas && h.fumador;
        } else if (tipoCliente === 'mascota') {
            return h.mascotas && !h.fumador;
        } else if (tipoCliente === 'fumador') {
            return !h.mascotas && h.fumador;
        } else {
            return !h.mascotas && !h.fumador;
        }
    });

    if (habitacionesDisponibles.length === 0) {
        alert("No hay habitaciones disponibles para esta opción.");
    } else {
        alert("Habitaciones disponibles:", habitacionesDisponibles);
    }

    return habitacionesDisponibles;
}

// Función para reservar una habitación
function reservarHabitacion(nombre, pais, tipoHabitacion, numPersonas, periodo, mascotas, fumador) {
    let tipoCliente = mascotas && fumador ? 'fumamascota' : mascotas ? 'mascota' : fumador ? 'fumador' : 'normal';
    let habitacionesDisponibles = habitacion(tipoCliente, habitaciones, tipoHabitacion, numPersonas);

    if (habitacionesDisponibles && habitacionesDisponibles.length > 0) {
        let habitacionSeleccionada = habitacionesDisponibles[0];
        habitacionSeleccionada.disponibilidad = false;
        reservas.push({
            nombre,
            pais,
            habitacion: habitacionSeleccionada.habitacion,
            tipoHabitacion,
            numPersonas,
            periodo,
            mascotas,
            fumador
        });
        alert("Reserva realizada con éxito para " + nombre + " en la habitación " + habitacionSeleccionada.habitacion);
    } else {
        alert("No se pudo realizar la reserva. No hay habitaciones disponibles.");
    }
}

// Función para obtener el número total de reservas
function obtenerTotalReservas() {
    return reservas.length;
}

// Función principal de menú
function Menu() {
    let check = true;
    while (check) {
        let opcion = Number(prompt(`Seleccione una opción:
            1. Ver habitaciones disponibles
            2. Reservar una habitación
            3. Salir`));

        switch (opcion) {
            case 1:
                let tipoHabitacion = prompt("¿Qué tipo de habitación desea? (individual/doble/familiar)").trim().toLowerCase();
                let numPersonas = Number(prompt("¿Cuántas personas se van a hospedar?"));
                let tipoCliente = encuesta();
                habitacion(tipoCliente, habitaciones, tipoHabitacion, numPersonas);
                break;
            case 2:
                let nombre = prompt("Ingrese su nombre:").trim();
                let pais = prompt("Ingrese su país de origen:").trim();
                tipoHabitacion = prompt("¿Qué tipo de habitación desea? (individual/doble/familiar)").trim().toLowerCase();
                numPersonas = Number(prompt("¿Cuántas personas se van a hospedar?"));
                let periodo = prompt("Ingrese el periodo de su estadía (ej. 2024-09-01 a 2024-09-10):").trim();
                let mascota = prompt("¿Se va a hospedar alguna mascota? (si/no)").trim().toLowerCase() === 'si';
                let fuma = prompt("¿Alguna de las personas que se va a hospedar fuma? (si/no)").trim().toLowerCase() === 'si';

                if (tipoHabitacion === 'familiar' || !mascota) {
                    reservarHabitacion(nombre, pais, tipoHabitacion, numPersonas, periodo, mascota, fuma);
                } else {
                    alert("No se pueden hospedar mascotas en habitaciones que no sean familiares.");
                }
                break;
            case 3:
                check = false;
                break;
            default:
                alert("Opción no válida. Inténtalo de nuevo.");
        }
    }

    alert("Total de habitaciones reservadas:", obtenerTotalReservas());
}

Menu();
