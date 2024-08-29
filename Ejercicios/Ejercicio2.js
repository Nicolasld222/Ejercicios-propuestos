let habitaciones = [
    {habitacion: 1, Tipo: individual, capacidadPer: 2, mascotas: false, fumador: true, disponiblidad: true},
    {habitacion: 2, Tipo: individual, capacidadPer: 2, mascotas: false, fumador: false, disponiblidad: true},
    {habitacion: 3, Tipo: individual, capacidadPer: 2, mascotas: false, fumador: false, disponiblidad: true},
    {habitacion: 4, Tipo: doble, capacidadPer: 4, mascotas: false, fumador: true, disponiblidad: true},
    {habitacion: 5, Tipo: doble, capacidadPer: 4, mascotas: false, fumador: false, disponiblidad: true},
    {habitacion: 6, Tipo: doble, capacidadPer: 4, mascotas: false, fumador: false, disponiblidad: true},
    {habitacion: 7, Tipo: familiar, capacidadPer: 6, mascotas: true, fumador: true, disponiblidad: true},
    {habitacion: 8, Tipo: familiar, capacidadPer: 6, mascotas: true, fumador: false, disponiblidad: true},
    {habitacion: 9, Tipo: familiar, capacidadPer: 6, mascotas: true, fumador: false, disponiblidad: true}
];

//Funcion Habitaciones disponibles 
function habitacionesdis(Habitaciones){
    const disponibles = habitaciones.habitacion
}


function Menu(){

    let check = true
    while(check === true){
        let opcion = Number(prompt(`Seleccione una opcion
            1.Habitaciones disponisponibles
            2.Separar una habitacion
            4.Salir`))
        
        switch(opcion){
            case 1:
            case 2:
            case 3: check = false
        }
    }
}
