//El usuario se identifica
function identificacion(){
    return Number(prompt("Ponga su numero de identificacion"))
}
identificacion();

//El usuario pone el pin
function Pin(){
    return Number(prompt("Ingrese su pin"))
}
Pin();
//Funcion Si es verdadera  la informacion



//usuarios
const usuarios = [
    {
        identificacion: 109022,
        informacion:{
                name: "Carlos",
                Pin: 1234,
                Saldo:100000,
        },
    },

    {
        identificacion: 109021,
        informacion:{
                name:"Yarleno",
                Pin: 4321,
                Saldo: 100000,
        },
    },
    {
        identificacion: 109023,
        informacion:{
            name: "Camilo",
            Pin: 2345,
            Saldo: 100000

        },
    },
];


function ingresaMenu(){
    let menu = Number(prompt("Bienvenido a nuestro Banco 1)Transacines 2)Consulta tu saldo 3) Salir del menu"))

    switch (menu){
        case 1
    }
}
ingresaMenu()
