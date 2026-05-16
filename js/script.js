const listaTareas = document.getElementById("lista-tareas");
const tareaNueva = document.getElementById("nueva-tarea");
const botonAgregarTarea = document.getElementById("boton-agregar");
const botonEliminarCompletadas = document.getElementById("boton-eliminar-terminadas");
const botonEliminarTodas = document.getElementById("boton-eliminar-todas");


let toDos = [];//Array para guardar las tareas

function agregarTarea() {

    const texto = tareaNueva.value;//Guardar el valor de lo que se escriba en el input 

    if (texto.trim() === "") {
        alert("Debes escribir una tarea");
        return;
    }

    toDos.push({//Añadir al Array de toDos, un ojeto con el texto de la tarea y un atributo completes, siempre en false
        text: texto,
        completed: false
    });

    tareaNueva.value = "";//Limpiar el input
    renderTodos();
}

function renderTodos() {//Para borrar la lista y volver a escribir lo que tenga el Array en ese momento

    listaTareas.innerHTML = "";//Limpiar la lista para no duplicar 

    toDos.forEach((todo) => {//Recorrer el array toDos

        const lineaTarea = document.createElement("li");//Se crea el elemento de etiqueta li con esa estructura
        //si está completed el checkbox se le añade el atributo checked, asi sabemos si está marcado
        lineaTarea.innerHTML = `
            <label class="ancho-tarea">
                <input type="checkbox" ${todo.completed ? "checked" : ""}>
                ${todo.text}
            </label>
        `;

        //Cuando cambias checkbox
        const checkbox = lineaTarea.querySelector("input");

        checkbox.addEventListener("change", (e) => {
            actualizarTarea(todo, e.target.checked);//Si se cambia el estado del chekbox 
        });

        function actualizarTarea(todo, estado) {//Le llega cada elemento del array y el estado
            todo.completed = estado;//guarda el estado en el bojeto del array
        }

        listaTareas.appendChild(lineaTarea);//Crear los elementos del DOM
    });
}

botonAgregarTarea.addEventListener("click", agregarTarea);

tareaNueva.addEventListener("keydown", (e) => {//tambien que funcione con la tecla Enter
    if (e.key === "Enter") {
        agregarTarea();
    }
});

//Esto filtra los completados, y vuelve a renderizarlos solo esos, no borra, deja las tareas "incompletas"
function eliminarCompletadas() {
    toDos = toDos.filter(tarea => tarea.completed === false);
    renderTodos();
}

//Renderiza un array vacío nuevo
function eliminarTodas() {
    toDos = [];
    renderTodos();
}

botonEliminarCompletadas.addEventListener("click", eliminarCompletadas);
botonEliminarTodas.addEventListener("click", eliminarTodas);