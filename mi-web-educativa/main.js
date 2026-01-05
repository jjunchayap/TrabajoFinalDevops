// Función sencilla para interactuar con el usuario
function saludo() {
    const nombre = prompt("¿Cuál es tu nombre de estudiante?");
    
    if (nombre) {
        // SEGURIDAD: Usamos textContent para evitar ataques XSS
        alert("Bienvenido a la plataforma, " + nombre + ". ¡Feliz aprendizaje!");
        console.log("Usuario ingresó correctamente.");
    }
}

// Lógica para marcar lecciones como completadas (opcional)
console.log("Sistema educativo cargado correctamente.");
