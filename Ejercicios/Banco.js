// Array of users
const usuarios = [
    {
        identificacion: 109022,
        informacion: {
            name: "Carlos",
            Pin: 1234,
            Saldo: 100000,
        },
    },
    {
        identificacion: 109021,
        informacion: {
            name: "Yarleno",
            Pin: 4321,
            Saldo: 100000,
        },
    },
    {
        identificacion: 109023,
        informacion: {
            name: "Camilo",
            Pin: 2345,
            Saldo: 100000,
        },
    },
];


const pinCarlos = usuarios[0].informacion.Pin;
const pinYarleno = usuarios[1].informacion.Pin;
const pinCamilo = usuarios[2].informacion.Pin;

const idCarlos = usuarios[0].identificacion;
const idYarleno = usuarios[1].identificacion;
const idCamilo = usuarios[2].identificacion;


//El usuario se identifica
function idIngresado(){
    return Number(prompt("Ponga su numero de identificacion"))
}
idIngresado();

//El usuario pone el pin
function PinIngresado(){
    return Number(prompt("Ingrese su pin"))
}
PinIngresado();


//Funcion Si es verdadera  la informacion

function validarIdentificacion(idIngresada) {

    for (let i = 0; i < usuarios.length; i++) {
       
        if (usuarios[i].identificacion === idIngresada) {
            return usuario[i] 
        }
    }
    return null
}
validarIdentificacion();

//Funcion Validar Pin

function ValidarPin(PinIngresado){

    for(let i = 0; i < usuarios.length; i++){
        
        if(usuarios[i].informacion.Pin === PinIngresado){
            return usuarios[i]
        }
    }
    return null
}
ValidarPin();

// Menu
function Menu(validarIdentificacion, ValidarPin){
    
    if(validarIdentificacion === )
}
