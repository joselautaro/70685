//Funciones Lambda

//Diferencias entre sintaxos de funciones tradicionales y funciones flecha - Arrow Function

//Sintaxis más concisa

//Función tradicional

/*
function suma (a, b, c, d){
    return a + b + c +d;
}
*/

//Función flecha con return explícito
// const suma = (a, b) =>{
//     return a  b
// }

//Función flecha con return implícito: Función de una sola linea 
// const suma = (a, b) => a +b;

//Función flecha con parámetro implícito
// const unNumero = a => a;

//________________________________________________________________________

//No tienen su propio argumento/parámetro

// function ejemplo(){
//     const funcionFlecha = () =>{
//         console.log(arguments)
//     }
//     funcionFlecha(1, 2, 3);
// }

// const numeros = [1, 2, 3, 4];

/*
Utilizando funcion tradicional
const cuadradosTradicionales = numeros.map(function(x){
    return cuadradosTradicionales(x)
})
*/

// const cuadradosTradicionalesLambda = numeros.map((x) => (x)); 

// console.log("Cuadrados (Función Lambda):", cuadradosTradicionalesLambda)

//___________________________________________________________________________

//Acceder a las variables
/*
var variableG = "Hola, desde el objeto window";

console.log(window.variableG);
*/
/*
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;

console.log("Altura de la ventana: " + windowHeight + " px");
console.log("Anchura de la ventana: " + windowWidth + " px");
*/

/*
Aparece después de 5 segundos
const saludarDespuesDelDelay = () =>{
    console.log("Hola despues de los cinco segundos")
}

window.setTimeout(saludarDespuesDelDelay, 5000);
*/
/*
const redirect = () =>{
    window.location.href = "https://www.educacionit.com/";
}
setTimeout(redirect, 5000)
*/
/*
window.localStorage.setItem("usuario", "ejemploUsuario")

var usuarioAlmacenado = window.localStorage.getItem("usuario");
console.log("Usuario almacenado: " + usuarioAlmacenado);
*/

/*
API Web DOM: Document Object Model
*/
/*
//Paso 1: Obtener referencia al elemento por su id

const tituloElemento = document.getElementById('miTitulo');

//Paso 2: Manipular contenido

tituloElemento.textContent = 'Dom modificado';

//Paso 3: Manipular estilos

tituloElemento.style.backgroundColor = 'blue';

//Paso 4: Crear un nuevo elemento y agregarlo al DOM

const nuevoParrafo = document.createElement('p');

//Paso 5: Agregarle texto de manera dinámica

nuevoParrafo.textContent = 'Este es un nuevo párrafo'

//Paso 6: Pegar nuevo nuevo parrafo a nuestro body

document.body.appendChild(nuevoParrafo)

*/








