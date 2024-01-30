//Callback con funcion anónima
/*
const cargarDatosDesdeApi = (callback) =>{
    fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(data =>{
            //Llamada al callback con los datos cargados
            callback(data)
        })
        .catch(error => console.error("Error al cargar los datos: " + error))
}

//Llamamos a la funcion principal con una función anómina
cargarDatosDesdeApi(function(datos){
    console.log("Datos cargados con exito: ", datos);
})
*/
/*
//Callback Hell (Evitado con promesas)

const tareaCompleja = (callback) =>{
    setTimeout(function(){
        console.log("Paso 1 completado")
        setTimeout(function(){
            console.log("Paso 2 completado");
            setTimeout(function(){
                console.log("Paso 3 completado");
                callback();
            }, 2000);
        }, 2000);
    }, 2000);
}
tareaCompleja(function(){
    console.log("Tarea completa");
})*/
/*
const tareaComplejaConPromesas = () =>{
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log("Paso 1 completado");
            resolve()
        }, 1000)
    })
    .then(function(){
        return new Promise(function(resolve){
            setTimeout(function(){
                console.log("Paso 2 completado");
                resolve();
            }, 1000)
        })
    })
    .then(function(){
        return new Promise(function(resolve){
            setTimeout(function(){
                console.log("Paso 3 completado");
                resolve();
            }, 1000)
        })
    })
}

tareaComplejaConPromesas().then(function(){
    console.log("Tarea con promesas");
})
*/
/*
//Callback Hell (Evitado con promesas) con arrow function

const tareaCompleja = callback => {
    setTimeout(() => {
        console.log("Paso 1 completado")
        setTimeout(() => {
            console.log("Paso 2 completado");
            setTimeout(() => {
                console.log("Paso 3 completado");
                callback();
            }, 2000);
        }, 2000);
    }, 2000);
}
tareaCompleja(() => {
    console.log("Tarea completa");
})
*/
/*
//Promesas con arrow function
const tareaComplejaConPromesas = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 1 completado");
            resolve()
        }, 1000)
    })
        .then(function () {
            return new Promise(resolve => {
                setTimeout(() => {
                    console.log("Paso 2 completado");
                    resolve();
                }, 1000)
            })
        })
        .then(function () {
            return new Promise(resolve => {
                setTimeout(() => {
                    console.log("Paso 3 completado");
                    resolve();
                }, 1000)
            })
        })
}

tareaComplejaConPromesas().then(() => {
    console.log("Tarea con promesas");
})

*/
/*
//Uso de promesas con Async/Await

//Function que simula una tarea asincrónica

const obtenerDatosRemotos = () =>{
    return new Promise(resolve =>{
        setTimeout(() =>{
            const datos = {nombre: 'Goku', edad: 30};
            resolve(datos)
        }, 5000)
    })
}

//Función que utiliza async/awai para manejar la promesa

const procesarDatos = async () =>{
    try{
        console.log("Iniciando proceso");
        const datosRemotos = await obtenerDatosRemotos()
        console.log("Datos obtenidos: ", datosRemotos)
    }catch (e){
        console.error("Error al procesar datos: ", e)
    }
}

procesarDatos();

*/

//funciones de orden superior

/*
const crearIncrementador = incremento =>{
    //Closure: la funcion interna "incrementa" tiene acceso al argumento
    return numero => numero + incremento
}

//Creamos una funcion de incremento con un incrementp de 5
const incrementarEn5 = crearIncrementador(5);

//Probamos la funcion incrementador
console.log(incrementarEn5(10)) 

const incrementarEn10 = crearIncrementador(10);

console.log(incrementarEn10(8)) 
*/


document.addEventListener('DOMContentLoaded', function(){
    
     //Acceder al formulario
     const formulario = document.getElementById('formulario');

     //Manejar el evento de submiot del formulario
     formulario.addEventListener('submit', function (e) {
         //Detener el envío del formulario para realizar validación
         e.preventDefault();
 
         if(validarFormulario()){
            Swal.fire("Datos enviados correctamente");
         }
     })

    const validarFormulario = () =>{
        //Obtener el valor de los campos de formulario
        const nombre = document.getElementById('nombre').value;

        const email = document.getElementById('email').value;

        const password = document.getElementById('password').value;

        const coment = document.getElementById('comentario').value;
        

        //Validar nombre (solo letras y espacios permitidos)

        if(!/^[A-Za-z\s]+$/.test(nombre)){
            document.getElementById('errorNombre').innerHTML = 'Nombre inválido'
            return false;
        }else{
            document.getElementById('errorNombre').innerHTML = '';
        }

        //Validar el email con formato básico

        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            document.getElementById('errorEmail').innerHTML = 'Correo electrónico invalido';
            return false;
        }else{
            document.getElementById('errorEmail').innerHTML = '';
        }

        //Validar contraseña (al menos 6 caracteres)
        
        if(password.length < 6){
            document.getElementById('errorPass').innerHTML = 'Contraseña debe tener cómo mínimo 6 caracteres';
            return false;
        }else{
            document.getElementById('errorPass').innerHTML = '';
        }

        if (!/^[\w\s.,!?¡¿áéíóúÁÉÍÓÚüÜñÑ]*$/.test(coment)) {
            document.getElementById('errorC').innerHTML = 'El comentario tiene caracteres no permitidos';
            return false;
        } else {
            document.getElementById('errorC').innerHTML = '';
        }

        //La valicación está bien, lo que no permite son por ejemplo símbolos matemáticos, emojis, o caracteres de control.
        

        //Si todas las validaciones pasan, el formulario es enviado
        return true;
    }
   
})