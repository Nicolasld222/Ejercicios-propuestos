let Articulos = [
    { nombre: 'Gaseosas', precio: 3000, cantidad: 5 },
    { nombre: 'Papitas', precio: 2500, cantidad: 5 },
    { nombre: 'Chocolatina', precio: 1500, cantidad: 5}
];

let ArticulosComprados = []





function Menu() {
    let check = true;
    
    while (check) {
        const opcion = Number(prompt(`¿Qué producto deseas llevar?
            1. Gaseosa $3000
            2. Papitas $2500
            3. Chocolatina $1500
            4. Ver carrito
            5. Comprar
            6. Salir`));

        switch (opcion) {
            case 1:
                agregarArticulo('Gaseosas');
                break;
            case 2:
                agregarArticulo('Papitas');
                break;
            case 3:
                agregarArticulo('Chocolatina');
                break;
            case 4:
                verCarrito();
                break;
            case 5:
                comprar();
                break;
            case 6:
                check = false;
                alert('Gracias por su compra. ¡Hasta luego!');
                break;
            default:
                alert('Por favor, selecciona una opción válida.');
        }
    }
}

function agregarArticulo(nombre) {
    const articulo = Articulos.find(a => a.nombre === nombre);
    
    if (articulo && articulo.cantidad > 0) {
        ArticulosComprados.push(articulo);
        articulo.cantidad--;
        alert(`Se ha agregado ${articulo.nombre} al carrito.`);
    } else {
        alert(`El artículo ${nombre} no está disponible o está agotado.`);
    }
}

function verCarrito() {
    if (ArticulosComprados.length === 0) {
        alert('Tu carrito está vacío.');
    } else {
        let resumen = 'Carrito de compras:\n';
        ArticulosComprados.forEach((articulo, index) => {
            resumen += `${index + 1}. ${articulo.nombre} - $${articulo.precio}\n`;
        });
        alert(resumen);
    }
}

function comprar() {
    if (ArticulosComprados.length === 0) {
        alert('Tu carrito está vacío. No puedes realizar la compra.');
    } else {
        let total = ArticulosComprados.reduce((sum, articulo) => sum + articulo.precio, 0);
        alert(`El total de tu compra es: $${total}`);
        ArticulosComprados = []; 
    }
}

Menu();

