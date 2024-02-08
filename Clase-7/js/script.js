const productos = [
    {
        nombre: 'Mesa',
        destino: 'Comedor',
        imagen: 'https://picsum.photos/id/237/200/300',
        valor: 500
    },
    {
        nombre: 'Escritorio',
        destino: 'Oficina',
        imagen: 'https://picsum.photos/seed/picsum/200/300',
        valor: 300
    },
    {
        nombre: 'Lavarropas',
        destino: 'Lavadero',
        imagen: 'https://picsum.photos/200/300?grayscale',
        valor: 600
    },
    {
        nombre: 'Televisor',
        destino: 'Living',
        imagen: 'https://picsum.photos/200/300/?blur=2',
        valor: 150
    }
];

const contenedorProductos = document.getElementById("resultado");

const inputBusqueda = document.getElementById("inputBusqueda");

// Spread operator para recorrer todos los objetos del array
let productosFiltrados = [...productos]


const catalogo = (datos) => {

    // Limpiar el contenedor antes de renderizarlo

    contenedorProductos.innerHTML = '';
    //variable iteradora, valor a iterar
    for (let producto of datos) {
        // Creamos un elemento card dinámico
        const card = document.createElement("div");
        // Agregamos atributo de clase dinamico
        card.classList.add("card");
        // Agregamos el ancho dinámico
        card.style.width = "18rem";
        // Agregamos método de suma y asignación
        card.innerHTML += `
        
        <img src=${producto.imagen} alt=${producto.imagen} class="m-2">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <h5 class="card-title">${producto.destino}</h5>
            <p class="card-text">$${producto.valor}</p>
        </div>
        `;
        // A la constante de la linea 28, le pegamos el elemento card
        contenedorProductos.appendChild(card)
    }
}

const filtrarProductos = destino =>{
    console.log(destino);
    productosFiltrados = productos.filter(producto => producto.destino === destino);
    catalogo(productosFiltrados)
}

const resetearFiltros = () =>{
    catalogo(productos)
}

inputBusqueda.addEventListener('input', () =>{
    const textoBusqueda = inputBusqueda.value.toLowerCase();
    productosFiltrados = productos.filter(producto => producto.nombre.toLowerCase().includes(textoBusqueda))
    catalogo(productosFiltrados)
})


// Activamos la función
catalogo(productos);

