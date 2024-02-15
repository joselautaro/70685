//ejemplo 1: Crear una SPA

//Configurar un enrutador simple para cambiar el contenido dinámicamente

// const app = document.getElementById('app');

// const navigateTo = route =>{
//     app.innerHTML = `<p>Cargando ${route}...</p>`
// }

// //Ejemplo de uso
// navigateTo('/home')
// navigateTo('/about')

document.addEventListener('DOMContentLoaded', function(){
    //Inicializar la aplicación
    initApp();

    //Agregar eventos de clic para la navegación
    document.getElementById("linkHome").addEventListener("click", function(){
        navigateTo("home")
    })
    document.getElementById("linkAbout").addEventListener("click", function(){
        navigateTo("about")
    })
    document.getElementById("linkNotFound").addEventListener("click", function(){
        navigateTo("notFound")
    })
    document.getElementById("mostrarUsers").addEventListener("click", function(){
        navigateTo("users");
    })
    document.getElementById("toggleDarkMode").addEventListener("click", function (){
        toggleDarkMode();
    })
    document.getElementById("sumar").addEventListener("click", function(){
        increment();
    })
    document.getElementById("restar").addEventListener("click", function(){
        decrement();
    })
    
})

// Función que se ejecuta cuando carguemos el DOM
const initApp = () =>{
    //Definir las rutas para cargar el contenido inicial
    navigateTo("home")
}

const toggleDarkMode = () =>{
    const body = document.body;
    body.classList.toggle("dark-mode");
}



let counterValue = 0;

const increment = () =>{
    counterValue++;
    updateCounter();
}
const decrement = () => {
    if(counterValue > 0){

        counterValue--
    }
    updateCounter ()
}

const updateCounter = ( ) =>{
    document.getElementById("counter").innerText = counterValue
}



const navigateTo = route =>{
    //lógica para cargar contenido basado en la ruta
    switch (route){
        case "home":
            loadHome();
            break;
        case "users":
            loadUsers();
            break;
        case "about":
            loadAbout();
            break;
        //Agreguen más rutas según crean necesario
        default:
            loadNotFount();
    }
}

// Escribir las funciones que se encuentran dentro del switch
const loadHome = () =>{
    document.getElementById('app').innerHTML = `<h1>Bienvenido a la página de inicio</h1>`
}

const loadAbout = () =>{
    document.getElementById('app').innerHTML = `<h1>Bienvenidos a la pag. Acerca de nosotros</h1>`
}

const loadNotFount = () =>{
    document.getElementById('app').innerHTML = `<h1>Página no encontrada, lo sentimos vuelva cuando quiera</h1>`
}

const loadUsers = () => {
    //Simular carga de datos de usuarios desde el servidor
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(resp => resp.json())
        .then(data => {
            const userList = data.map(user => `<li>${user.name}</li>`).join("");
            document.getElementById("app").innerHTML = `<ul>${userList}</ul>`;
        })
        .catch(error => console.error("Error al cargar datos de usuarios", error));
}