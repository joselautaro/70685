// El POO o también conocido como programación orientada a objetos, es un paradigma de programación para organizar y estructurar el código. Un objeto es una instancia de una clase, que define un connjunto de propiedades y métodos

// Objeto Auto 

// Propiedades (características) del objeto auto: Rojo, Cuadrado, rápido, chico

// Métodos (funcionalidades) del objeto auto: Acelerar, frenar, estacionar, girar, etc:

// Definición de una clase Persona

// class Persona {
//     // Constructor que initializa propiedades
//     constructor(nombre, edad){
//         this.nombre = nombre;
//         this.edad = edad;
//     }

//     // Método para obtener información de la persona
//     obtenerInformacion(){
//         return `Nombre: ${this.nombre}, Edad: ${this.edad}`;
//     }
// } 

// // Creación de una instancia de la clase 'Persona'

// const persona1 = new Persona('Juan', 25);

// // Uso del método y acceso a la propiedad
// console.log(persona1.obtenerInformacion())



// Herencia

// Definición de una clase base 'Animal

class Animal{
    constructor(nombre){
        this.nombre = nombre;
    }

    sonido(){
        return 'Hace algún sonido';
    }
} 
// Con la palabra extends, podemos derivar un método de la clase principal
class Perro extends Animal{
    sonido(){
        return 'guau guau';
    }
}

const animalGenerico = new Animal('Criatura');
const perro = new Perro('Bobby');

// uso de los métodos de ambas clases

console.log(animalGenerico.sonido());
console.log(perro.sonido());

//_____________________________________________________________________

class Vehiculo{
    constructor(marca){
        this.marca = marca;
    }
    mostrarMarca(){
        console.log(`Marca: ${this.marca}`);
    }
}

class Coche extends Vehiculo{
    constructor(marca, modelo){
        // Llamada al constructor de la clase base
        super(marca);
        this.modelo = modelo;
    }
    mostrarModelo(){
        console.log(`Modelo: ${this.modelo}`);
    }
}

// Uso de clases
const miVehiculo = new Vehiculo('Toyota');

const miCoche = new Coche('Ford', 'Mustang');

miVehiculo.mostrarMarca()
miCoche.mostrarMarca()
miCoche.mostrarModelo()

//_____________________________________________________________________________________

//Implementando algún método adicional

class Fruta{
    constructor(nombre){
        this.nombre = nombre;
    }
    describir(){
        console.log(`Es una fruta llamada ${this.nombre}`);
    }
}

// Clase derivada con método adicional
class Manzana extends Fruta{
    constructor(nombre, color){
        super(nombre);
        this.color = color;
    }
    describirColor(){
        console.log(`El color de la manzana es: ${this.color}`);
    }
}

// Uso de las clases
const frutaGenerica = new Fruta('Fruta Genérica');
const manzanaRoja = new Manzana('Manzana', 'roja');

frutaGenerica.describir();
manzanaRoja.describir();
manzanaRoja.describirColor();

// __________________________________________________________________________________________

// Herencia múltiple

// Clase 1
// class Persona{
//     constructor(nombre){
//         this.nombre = nombre;
//     }
//     saludar(){
//         console.log(`Hola, soy ${this.nombre}`);
//     }
// }

// // Clase 2
// class Empleado{
//     constructor(nombre, cargo){
//         this.nombre = nombre;
//         this.cargo = cargo;
//     }
//     mostrarCargo(){
//         console.log(`Cargo: ${this.cargo}`);
//     }
// }

// // Clase derivada que hereda de ambas clases base
// class Trabajador{
//     constructor(nombre, cargo, salario){
//        this.persona = new Persona(nombre);
//        this.empleado = new Empleado(nombre, cargo)
//        this.salario = salario;
//     }
//     mostrarSalario(){
//         console.log(`Salario: $${this.salario}`);
//     }
//     saludar(){
//         this.persona.saludar();
//     }
//     mostrarCargo(){
//         this.empleado.mostrarCargo();
//     }
// }

// // Uso de la clase derivada
// const trabajador = new Trabajador('Juan', 'Desarrollador', 50000);

// trabajador.saludar()
// trabajador.mostrarCargo()
// trabajador.mostrarSalario()


//__________________________________________________________________________________________________________________

//Mezclando todos los conceptos

// Mixins para agregar funcionalidades del Animal

const AnimalMixin = {
    emitirSonido(){
        console.log('Hace algún sonido');
    }
}

const MascotaMixin = {
    mostrarTipo(){
        console.log(`Tipo de mascota: ${this.tipo}`);
    }
}

class PerroMascota {
    constructor(nombre, tipo, raza){
        this.nombre = nombre;
        this.tipo = tipo;
        this.raza = raza;
        // Agregar funcionalidades mediante composición y mixins
        Object.assign(this, AnimalMixin, MascotaMixin);
    }
    mostrarRaza(){
        console.log(`Raza del perro: ${this.raza}`);
    }
}

const perroMascota = new PerroMascota('Max', 'Canino', 'Labrador');

perroMascota.emitirSonido();
perroMascota.mostrarTipo();
perroMascota.mostrarRaza();


//_________________________________________________________________

const PersonaMixin = {
    saludar(){
        console.log(`Hola soy ${this.nombre}`);
    }
}

const EmpleadoMixin = {
    mostrarCargo(){
        console.log(`Cargo: ${this.cargo}`);
    }
}

class Trabajador {
    constructor(nombre, cargo, salario) {
        this.nombre = nombre,
        this.cargo = cargo;
        this.salario = salario;
        Object.assign(this, PersonaMixin, EmpleadoMixin);
    }
    mostrarSalario(){
        console.log(`Salario: ${this.salario}`);
    }
}

const trabajador = new Trabajador('Pepito', 'Developer', 150000);

trabajador.saludar();
trabajador.mostrarCargo();
trabajador.mostrarSalario();




