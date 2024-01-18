// console.log(nombre);

// function ejemploScope(){
//     //Scope local
//     let nombre = "Goku";
//     console.log(nombre);

//     if(true){
//         let otraVariableLocal = "Otra local";
//         console.log(otraVariableLocal);
//     }
    
// }
// ejemploScope();

function ejemploScopeConst (){
    const variableConstante = "Soy constante";
    console.log(variableConstante);
//    const variableConstante = "Soy otra";


    if(true){
        const otraVariableConstante = "Otra constante";
        console.log(otraVariableConstante);
    }
}
ejemploScopeConst();

const persona = {
    nombre: "Octavio",
    edad: 30,
};

console.log(persona.nombre);

persona.nombre = "Maria";
console.log(persona.nombre)