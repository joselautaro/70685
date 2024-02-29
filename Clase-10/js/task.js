class Task{
    constructor(description){
        this.description = description;
        this.completed = false;
    }
    // Método para marcar la tarea como completada
    completeTask(){
        this.completed = true;
    }
}

// Definimos una clase ToDoList (lista de tareas) que hereda de Task
class ToDoList{
    constructor(){
        this.tasks = [];
    }

    // Método para agregar una nueva tarea a la lista addTask
    addTask(description){
        const task = new Task(description)
        this.tasks.push(task)
    }
    // Método para obtener las tareas completadas getCompletedTasks
}


// Creamos una instancia del ToDoList

const todoList = new ToDoList();

// Función para agregar una tarea al hacer click en el botón

const addTask = () => {
    const taskInput = document.getElementById('taskInput');
    todoList.addTask(taskInput.value);
    taskInput.value = ''; //Limpiamos el campo de entrada

    updateTaskList();
}


// Funcion para actualizar la lista de tareas

const updateTaskList = () => {
    const pendingTaskElement = document.getElementById('pendingTasks');

    const completedTasksElement = document.getElementById('completedTasks');

    // Limpiamos las tareas antes de actualizarlas
    pendingTaskElement.innerHTML = '';
    completedTasksElement.innerHTML = '';

    // Iteramos sobre las tareas en la lista
    todoList.tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.textContent = task.description;
    
    // Si la tarea está completada, la agregamos a la lista de completadas; de lo contrario, a la lista de pendientes
    if (task.completed) {
        completedTasksElement.appendChild(listItem);
    } else {
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Completar';

        completeButton.classList.add('btn', 'btn-success', 'm-3')
        completeButton.onclick = () => {
            task.completeTask();
            updateTaskList();
        };

        // Agregamos el botón "Completar" junto con la tarea a la lista de pendientes
        listItem.appendChild(completeButton);
        pendingTaskElement.appendChild(listItem);
    }
})
}
// // Actualizamos la lista de tareas al cargar la página
// window.onload = updateTaskList;
// Actualizamos la lista de tareas al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('addButton');
    addButton.addEventListener('click', addTask);

    updateTaskList();
});