// // Almacenar un valor en localStorage

// localStorage.setItem('nombre', 'Juan');

// // Como obtenemos el valor almacenado?

// const nombre = localStorage.getItem('nombre');

// console.log('Nombre:', nombre);

// //_____________________________________________________________________________

// // Almacenar y recuperar un objeto

// const usuario = {
//     nombre: 'Ana',
//     edad: 25
// };

// // Convertir el objeto a cadena de JSON y almacenar en localStorage
// localStorage.setItem('usuario', JSON.stringify(usuario));

// const usuarioRecuperado = JSON.parse(localStorage.getItem('usuario'));

// console.log('Usuario:', usuarioRecuperado);

// // ____________________________________________________________________________

// // Eliminar un dato de localStorage

// localStorage.setItem('Manzana', 'Banana');

// localStorage.removeItem('Manzana');

// localStorage.removeItem('Juan');

// const nombreEliminado = localStorage.getItem('Juan')

// const frutaEliminada = localStorage.getItem('Manzana');

// console.log("Fruta recuperada: ", frutaEliminada);
// console.log("Nombre eliminado: ", nombreEliminado);

// // _____________________________________________________________________________

// // Almacenar y recuperar un dato en sessionStorage

// sessionStorage.setItem('Ciudad', 'Buenos Aires')

// const ciudad = sessionStorage.getItem('Ciudad');

// console.log("Ciudad: ", ciudad);

// // ____________________________________________________________________________

// // localStorage.clear();
// // sessionStorage.clear();

// // ____________________________________________________________________________

// const arr = ['rojo', 'verde', 'azul'];

// localStorage.setItem('arr', JSON.stringify(arr))

// const arreglo = JSON.parse(localStorage.getItem('arr'))

// console.log("Array recuperado:", arreglo);

// _______________________________________________________________________________

document.addEventListener('DOMContentLoaded', () =>{
    const form = document.getElementById('myForm');
    const inputNombre = document.querySelector('#nombre');
    const inputEmail = document.querySelector('#email');
    const datosMostrados = document.querySelector('#datosMostrados');

    // Cargar datos del formulario desde si existen

    const datosGuardados = JSON.parse(localStorage.getItem('datosFormulario'));

    if(datosGuardados){
        inputNombre.value = datosGuardados.nombre;
        inputEmail.value = datosGuardados.email;
    }

    // Almacenar datos del formulario en localStorage y sessionStorage al enviar
    form.addEventListener('submit', (e) =>{
            e.preventDefault();
            const datosFormulario = {
                nombre: inputNombre.value,
                email: inputEmail.value
            }

            // Almacenar en localStorage
            localStorage.setItem('datosFormulario', JSON.stringify(datosFormulario))

            sessionStorage.setItem('datosFormulario', JSON.stringify(datosFormulario))

            // Mostramos los datos en el div que corresponde
            mostrarDatos(datosFormulario)
    })

    // Función para mostrar los datos
    const mostrarDatos = (datos) =>{
        datosMostrados.innerHTML = `
            <h2>Datos del formulario</h2>
            <h4>Nombre: ${datos.nombre}</h4>
            <h4>Email: ${datos.email}</h4>
        ` 
    } 
})