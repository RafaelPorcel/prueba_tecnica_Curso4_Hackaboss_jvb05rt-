# 📝 Mi Lista de Tareas - Hackaboss

Este proyecto es una aplicación web de tipo **To-Do List (Lista de Tareas)** desarrollada como parte del Bootcamp FullStack de Hackaboss.

Permite al usuario gestionar tareas de forma sencilla e intuitiva, aplicando **JavaScript para manipulación del DOM**, junto con HTML y CSS para la interfaz y el diseño responsive.

---

## 🚀 Funcionalidades

### ➕ Añadir tareas
- Permite crear nuevas tareas dinámicamente.
- Inserción de elementos `<li>` en el DOM.
- Limpieza automática del input tras añadir una tarea.
- Validación para evitar tareas vacías o con solo espacios (`trim()`).

---

### ⌨️ Añadir tareas con Enter
- Permite añadir tareas pulsando la tecla **Enter**.
- Mejora la experiencia de usuario evitando depender solo del botón.

---

### ☑️ Marcar tareas como completadas
- Cada tarea incluye un checkbox interactivo.
- Uso de la propiedad `checked` para detectar tareas completadas.
- Preparado para gestión de estado de cada tarea.

---

### 🗑️ Eliminar tareas completadas
- Permite eliminar únicamente las tareas marcadas.
- Selección de checkboxes con `querySelectorAll`.
- Eliminación del elemento padre (`<li>`) con `.parentElement.remove()`.

---

### 💣 Eliminar todas las tareas
- Limpia completamente la lista de tareas.
- Selección de todos los `<li>` del contenedor.
- Eliminación masiva del contenido del DOM.

---

### ⚠️ Validación de input
- Bloqueo de tareas vacías.
- Uso de `trim()` para evitar entradas inválidas.
- Mensaje de alerta informativo al usuario.

---

## 🎨 Diseño y experiencia de usuario

- Estética retro estilo **pixel art**.
- Tipografías personalizadas con Google Fonts:
  - Press Start 2P
  - Oswald
- Diseño responsive adaptado a dispositivos móviles (< 800px).
- Efectos visuales con sombras, hover y estructura tipo “card”.

---

## ⚙️ Tecnologías utilizadas

- **HTML5** → estructura semántica del proyecto.
- **CSS3** → diseño, flexbox y responsive design.
- **JavaScript (ES6)** → lógica e interactividad.
- **Google Fonts** → tipografía personalizada.

---

## 📂 Estructura del proyecto

PRUEBA_TECNICA_CURSO_4
├── index.html
├── css/
│   └── styles.css
└── js/
    └── script.js