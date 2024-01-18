//Tipos de variables y principales palabras reservadas
//Forma n°1: 
var edad = 31;
var edad = 32;
console.log(edad);

//Forma n°2: 
let apellido = "Montaña";
// let apellido = "Goku";

//Forma n°3:
const nombre = "Lautaro";
// const nombre = "Miel";


//Tipo de datos primitivos: 6  tipos diferentes

/*
undefined
null
boolean
number
string
symbol
*/

let variableUndefined;
console.log(variableUndefined);

let variableNull = null;
console.log(variableNull);

let esVerdadero = true;
let esFalso = false;

console.log(esFalso);
console.log(esVerdadero);

let numeroEntero = 42;
console.log(numeroEntero);

let numeroDecimal = 3.14;
console.log(numeroDecimal);

let resultado = numeroEntero * numeroDecimal;
console.log(resultado);

let cadenaDeTexto = "Hola, Mundo!"
console.log(cadenaDeTexto)

let simbolo1 = Symbol("descripcion");
let simbolo2 = Symbol("descripcion");
console.log(simbolo1 === simbolo2);