/*
//Paso 1: Obtener la referencia al botón por su id
const boton = document.getElementById('miBoton');

//Paso 2: Agregar un evento de clic al botón
boton.addEventListener('click', function(){
    //Paso 3: Funcion que se ejecutará cuando se haga clic en boton
    alert('Haz hecho click en el boton')
})
//_________________________________________
const input = document.getElementById('miInput');

input.addEventListener('change', function(){
    console.log('Texto cambiado: ', input.value);
})
//_____________________________________

const miInputDos = document.getElementById('miInputDos');

miInputDos.addEventListener('keydown', function(e){
    console.log('Tecla presionada', e.key);
})
//___________________________________________

const elemento = document.getElementById('miElemento');

elemento.addEventListener('mouseover', function(){
    elemento.style.backgroundColor = 'red';
})

elemento.addEventListener('mouseout', function(){
    elemento.style.backgroundColor = 'blue';
})
//__________________________________________________
window.addEventListener('load', function(){
    alert('¡La página se cargó!');
})
*/
/*
//Funcon que se va a ejecutar cuando se hace clic en el boton

function handleClick(e){
    console.log('Se hizo click en el botón')
    console.log(e)
}

//Seleccionar el boton mediante su id
const boton = document.getElementById('boton');

boton.addEventListener('click', handleClick);

//_________________________________________________

const handleDivClick = e =>{
    alert('Se hizo click en el div')
    console.log(e)
}

//Seleccionar el div mediante su id

const myDiv = document.getElementById('miDiv');

//Usar ApiEventTarget para cargar un escuchar de eventos en el div

const eventTarget = new EventTarget();

eventTarget.addEventListener('click', handleClick);

//Asignar el objeto EventTarget al div

myDiv.eventTarget = eventTarget;

//______________________________________________________

const handleButtonClick = () =>{

    const miParrafo = document.getElementById('miParrafo');

    miParrafo.textContent = 'Se hizo clic en el botón';
}

const btnP = document.getElementById('btnP');

btnP.addEventListener('click', handleButtonClick);
*/

//_______________________________________________

// let keyCounter = 0;

// const handleKeyPress = () =>{

//     //Incrementar el contador
//     keyCounter ++

//     //Seleccionar el elemento por su id
//     const keyCountElement = document.getElementById('keyCount');

//     //Actualizar el contenido del elemento con el nuevo valor del contador

//     keyCountElement.textContent = 'Contador de teclas: ' + keyCounter;

//     showModal();
// }

// document.addEventListener('keypress', handleKeyPress);

// const showModal = () =>{
//     //Mostrar el modal y el fondo oscuro
//     document.getElementById('myModal').style.display = 'block';
//     document.getElementById('modalBackDrop').style.display = 'block';
// }

// //Función para cerrar el navegador
// const closeModal = () =>{

//     //Ocultar el modal y el fondo oscuro
//     document.getElementById('myModal').style.display = 'none'
//     document.getElementById('modalBackDrop').style.display = 'none'
// }

// document.addEventListener('keypress', handleKeyPress);

//__________________________________________

const handleListItemClick = e =>{
    console.log('Click en el elemento de la lista: ', e.target.textContent);

    e.target.style.color = 'red'
}

var list = document.getElementById('myList');

list.addEventListener('click', handleListItemClick);
//__________________________________________
const handleListClick = e =>{
    if(e.target.tagName === "LI"){
        console.log('Click en el elemento de la lista: ', e.target.textContent)
        e.target.style.color = 'green';
    }
}

var listTwo = document.getElementById('otherList');
listTwo = addEventListener('click', handleListClick)

//_________________________________________
const handleKeyDown = e =>{
    console.log('Tecla presionada: ', e.key)
    e.target.style.backgroundColor = 'grey';
}

let input = document.getElementById('inputProp');

input.addEventListener('keydown', handleKeyDown);

//_________________________________________

const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('Formulario enviado')
    // alert('Inicio de sesión exitoso');
}

let form = document.getElementById('form');

form.addEventListener('submit', handleSubmit);

//______________________________________

const operationAsync = (x, y, callback) =>{
    //Simulamos una tarea asincrónica
    setTimeout(function(){
        const resultado = x + y;
        callback(resultado)
    }, 5000)
}

//Crear un callback que simplemente loguea un resultado
const result = resultado =>{
    console.log("El resultado es: ", resultado)
}

operationAsync(5, 10, result);