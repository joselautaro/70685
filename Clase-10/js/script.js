// FUNCIONES CONSTRUCTORAS Y HERENCIAS
// // Definir una función constructora para crear objetos de tipo persona
// function Persona(nombre, edad, curso) {
//     // Propiedades del objeto persona
//     this.nombre = nombre;
//     this.edad = edad;
//     this.curso = curso;

//     // Método para imprimir la información de la persona
//     this.mostrarInfo = function () {
//         console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Curso: ${this.curso}`);
//     }
// }

// // Definimos una función constructora del tipo estudiante
// function Estudiante(nombre, edad, curso) {
//     // Llamamos al constructor de Persona para heredar propiedades
//     Persona.call(this, nombre, edad, curso);

//     // Propiedad específica de estudiante
//     // this.curso = curso;
// }

// // Creamos una instancia de Persona
// let persona1 = new Persona("Juan", 25, "Psicología");

// // Llamamos al método para mostrar la información
// persona1.mostrarInfo();

// // Creamos una instancia de Estudiante
// let estudiante1 = new Estudiante("Ana", 20, "Informática");

// // Llamamos al método mostrarInfo de Estudiante
// estudiante1.mostrarInfo();

// _______________________________________________________________________________________________

// METODOS

// class Coche {
//     constructor(marca, modelo) {
//         this.marca = marca;
//         this.modelo = modelo;

//         // Método para obtener la información del coche
//         this.obtenerInfo = function () {
//             return `${this.marca} ${this.modelo}`;
//         };
//     }
// }

// let miCoche = new Coche("Toyota", "Corolla");

// console.log(miCoche.obtenerInfo());

// _____________________________________________________________________________________________

// ENCAPSULAMIENTO

// class CuentaBancaria {
//     constructor(titular, saldoInicial) {
//         let saldo = saldoInicial;

//         // Método para obtener el salgo actual
//         this.obtenerSaldo = function () {
//             return saldo;
//         };
//         // Método para realizar un depósito
//         this.depositar = function (cantidad) {
//             saldo += cantidad;
//             console.log(`Señor/a: ${titular} su depósito de $${cantidad} fue realizado con éxito. Su saldo actual es de: $${saldo}`);
//         };
//     }
// }

// // Creamos una instancia de CuentaBancaria
// let miCuenta = new CuentaBancaria("Juán Pérez", 1000);

// // Mostramos el saldo inicial
// console.log(`Saldo inicial: $${miCuenta.obtenerSaldo()}`);

// // Realizamos un depósito y mostramos el saldo actual
// miCuenta.depositar(550);

// _____________________________________________________________________________________________

// POLIMORFIRMO 

class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hacerSonido() {
        console.log("Haciendo sonido genérico");
    }
}

class Perro extends Animal{
    constructor(nombre, raza){
        super(nombre);

        // Método específico para hacer un ladrido
        this.hacerSonido = function(){
            console.log(`Nombre: ${nombre}, Raza: ${raza}`);
        }
    }
}
class Gato extends Animal{
    constructor(nombre, raza){
        super(nombre);

        // Método específico para hacer un ladrido
        this.hacerSonido = function(){
            console.log(`Nombre: ${nombre}, Raza: ${raza}`);
        }
    }
}

let miPerro = new Perro("Firulais", "Labrador");

let miGato = new Gato("Gato de Santa", "Gatito");

miPerro.hacerSonido();
miGato.hacerSonido();