function CedulaUsuaro(){
    const Cedula = Number(prompt(`Ingrese su cedula`))
    
}
CedulaUsuaroUsuaro();

function tipoAtencion(){

    const tipoAtencion = Number(prompt("QUe tipo de aencio desea 1. llamada telefonica 2. Asesoria"))

    if(tipoAtencion === 1){
        return true
    }else if(tipoAtencion === 2){
        return false 
    }else{
        alert("Ingrese un tipo de atencion")
    }
}
tipoAtencion();

function asesoria(tipoAtencion){  
    let asesoria = tipoAtencion();

    if(asesoria === true){
        let tipoAsesoria = Number(prompt(`Que tipo de asesoria deseas 1. Estudiante 2. Directivo`))
    }
}
