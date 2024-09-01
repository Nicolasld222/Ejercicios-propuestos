let Articulos = [
    { nombre: 'Gaseosas', precio: 3000, cantidad: 5 },
    { nombre: 'Papitas', precio: 2500, cantidad: 5 },
    { nombre: 'Chocolatina', precio: 1500, cantidad: 5}
];

let ArticulosComprados = []

function Menu(){
    
    let check = true
        
        while(check){

            const opcion = Number(prompt(`¿Que productis deseas llevar?
                1. Gaseosa $3000
                2. Papitas $2500
                3. Chocolatina $1500
                4. Carrito
                5. No quiero agregar mas Articulos`));

                switch(opcion){
                    case 1:
                        alert(`Su articulo se agrego al carrito`)
                    case 2:
                    case 3:
                    case 4:
                }
        }
}
