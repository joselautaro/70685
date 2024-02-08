
//Variables para manejar el estado de la calculadora
let currentInput = '';
let currentResult = '';

const resultElement = document.getElementById('result');

//Función para limpiar el resultado y la entrada actual
const clearResult = () =>{
    currentInput = '';
    currentResult = '';
    updateResult()
}

//Función para agregar caracteres a la entrada actual
const appendCharacter = ( character ) =>{
    currentInput += character;
    updateResult();
} 

//función para calcular el resultado y manejar errores

const calculateResult = () =>{
    try{
        currentResult = eval(currentInput)
        updateResult()
    }catch(error){
        currentResult = 'Error'
        updateResult()
    }
}

//Función para actuializar el resultado en la interfaz

const updateResult = () =>{
    resultElement.innenText = currentInput + ' = ' + currentResult;
}