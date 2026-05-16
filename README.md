# 📝 Mi Lista de Tareas - Hackaboss

## 📖 Descripción General del Proyecto

Este proyecto consiste en una aplicación web interactiva de tipo **To-Do List (Lista de Tareas)** desarrollada desde cero como parte fundamental de las prácticas del **Bootcamp FullStack de Hackaboss**. La aplicación cuenta con una interfaz visual estilizada bajo una estética retro inspirada en el pixel-art y las interfaces de videojuegos *arcade* clásicos de 8 bits.

Su objetivo de desarrollo central es dominar la arquitectura frontend moderna con JavaScript puro (Vanilla), aplicando de forma estricta un ciclo de persistencia y actualización basado en datos:

> 🧠 **Estado (JavaScript) → Renderizado (DOM)**

En este enfoque arquitectónico, el DOM pierde por completo el rol tradicional de almacenamiento o lectura de datos. La interfaz de usuario es tratada exclusivamente como un espejo temporal que refleja lo que se encuentra guardado en la memoria activa del script. Toda la lógica del programa se gobierna bajo un único principio inmutable: **el array global `toDos` es la única fuente de verdad**.

---

## 🚀 Funcionalidades Detalladas

La aplicación proporciona un abanico completo de interacciones que automatizan y controlan el flujo de las tareas del usuario:

* ➕ **Añadir tareas de forma dinámica:** Permite introducir de forma limpia nuevas filas de actividades tanto en el array interno (`toDos`) como en la lista visual del navegador.
* ⌨️ **Doble método de inserción (Botón / Tecla Enter):** Para maximizar la usabilidad, el usuario puede confirmar la adición de una tarea haciendo clic en el botón de acción **"Agregar tarea"** o pulsando directamente la tecla **Enter** de su teclado mientras escribe en el cuadro de texto.
* ⚠️ **Validación integrada de entradas vacías:** La aplicación limpia el texto recibido con el método `.trim()` para eliminar espacios sobrantes al inicio y al final. Si el campo de texto está vacío o solo contiene espacios, el script bloquea la operación y lanza una alerta informativa al usuario.
* ☑️ **Interactividad y Conmutación de Estado (Completado):** Cada elemento de la lista cuenta con un checkbox dedicado. Al interactuar con él, se conmuta de manera inmediata la propiedad booleana `completed` dentro de su objeto correspondiente en el array.
* 🗑️ **Eliminación selectiva de tareas finalizadas:** El sistema evalúa el estado del array y purga de forma masiva únicamente las tareas que tengan su marcador de completado en `true`, respetando las tareas pendientes.
* 🧹 **Vaciado completo del tablero de control:** Mediante una acción destructiva limpia, un botón permite resetear el array a un estado inicial vacío (`[]`), borrando instantáneamente todo el contenido del DOM.
* 🔄 **Re-renderizado automático global:** Cualquier operación que mute los datos (crear, completar o eliminar) invoca de inmediato un refresco integral de la interfaz para mantener una fidelidad absoluta entre el estado de memoria y la pantalla.

---

## 🧠 Arquitectura y Flujo de Datos Unidireccional

El diseño del software rompe con las metodologías obsoletas de extraer información inspeccionando nodos HTML (como leer textos o clases del DOM). El ciclo de vida de la aplicación sigue un recorrido lineal y predecible:

[ Acción del Usuario ] ➔ [ Captura del Evento ] ➔ [ Mutación del Array toDos ] ➔ [ Función render() ]