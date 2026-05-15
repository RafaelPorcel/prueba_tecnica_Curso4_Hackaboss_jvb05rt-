const listaTareas = document.getElementById("lista-tareas");
const tareaNueva = document.getElementById("nueva-tarea");
const botonAgregarTarea = document.getElementById("boton-agregar");
const botonEliminarTareasCompletadas = document.getElementById("boton-eliminar-terminadas")
const botonEliminarTodasTareas = document.getElementById("boton-eliminar-todas");

function agregarTArea() {
    const textoDeInput = tareaNueva.value;

    if (textoDeInput.trim() === "") {
        alert("Debes introducir una tarea, no un campo vacío");
        return;
    }
    
    const liNuevo = document.createElement("li");
    liNuevo.innerHTML = `
        <label class="ancho-tarea">
            <input class="tarea-completa" type="checkbox"> ${textoDeInput}
        </label>
    `
    listaTareas.appendChild(liNuevo);
    tareaNueva.value = "";
}

botonAgregarTarea.addEventListener("click", agregarTArea);

tareaNueva.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        //cuando pulso la tecla enter dentro del input ocurre el mismo evento que cuando hago click en el boton agregar tarea
        agregarTArea();
    }
})

botonEliminarTareasCompletadas.addEventListener("click", () => {
    //me crea un Array con las tareas marcadas en el chekbox
    const tareasCompletadasCheckbox = document.querySelectorAll('.tarea-completa');

    tareasCompletadasCheckbox.forEach(t => {
        if(t.checked) {
            t.parentElement.parentElement.remove();
        }
    });
});

botonEliminarTodasTareas.addEventListener("click", () => {
    const todasLasTareas = document.querySelectorAll("#lista-tareas li");

    todasLasTareas.forEach(t => {
        t.remove();
    });

});

