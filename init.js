const fondo = document.querySelector('.fondos');
const photo = document.getElementById('photo');
const typo = document.getElementById('typo');
const dev = document.getElementById('dev');
const nombre = document.getElementById('nombre');
const bienvenida = document.getElementById('bienvenida');
const dropDown = document.querySelector('.dropdown-menu');

let generoSeleccionado = "Bienvenido/a"; // Variable global para almacenar el género
let nombreUsuario = ""; // Variable para almacenar el nombre

// Función para cambiar imagen de fondo en el menú
function cambiarFondo(variable, imagen0, imagen1) {
    variable.addEventListener("mouseover", function () {
        fondo.style.backgroundImage = `linear-gradient(to bottom, rgba(255, 255, 255, 0) 80%, black 100%), 
        url('${imagen1}')`; 
        fondo.style.opacity = "0.9"; 
    });

    variable.addEventListener("mouseout", function () {
        fondo.style.backgroundImage = `linear-gradient(to bottom, rgba(255, 255, 255, 0) 80%, black 100%), 
        url('${imagen0}')`; 
        fondo.style.opacity = "1"; 
    });
}

// Llamar a la función con los nombres de archivos de imágenes
cambiarFondo(photo, "imagen0.jpg", "imagen1.jpg");
cambiarFondo(typo, "imagen0.jpg", "imagen2.jpg");
cambiarFondo(dev, "imagen0.jpg", "imagen3.jpg");

// Función para obtener el nombre y mostrarlo junto al género seleccionado
function obtenerNombre(dato) {
    bienvenida.innerHTML = `<h2>${generoSeleccionado}</h2>`;
    
    dato.addEventListener("keydown", function(event) {
        if(event.key === "Enter") {
            let valor = dato.value;
            nombreUsuario = valor; // Almacena el nombre ingresado
            bienvenida.innerHTML = `<h2>${generoSeleccionado}</br>${nombreUsuario}</h2>`;
            
        }
    });
}

// Función para seleccionar el género
function genero() {
    const opciones = document.querySelectorAll('.dropdown-menu a'); 

    opciones.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault(); // Evita que el enlace recargue la página
            
            let opcion = this.getAttribute('data-value');

            if (opcion === 'masculino') {
                generoSeleccionado = "Bienvenido";
                bienvenida.scrollIntoView({behavior: "smooth"});
            } else if (opcion === 'femenino') {
                generoSeleccionado = "Bienvenida";
                bienvenida.scrollIntoView({behavior: "smooth"});
            } else if (opcion === 'noBinario') {
                generoSeleccionado = "Bienvenide";
                bienvenida.scrollIntoView({behavior: "smooth"});
            } else {
                generoSeleccionado = "Bienvenido/a";
                bienvenida.scrollIntoView({behavior: "smooth"});
            }

            // No sobreescribir el nombre, solo actualizar el género
            if (nombreUsuario) {
                bienvenida.innerHTML = `<h2>${generoSeleccionado}</br>${nombreUsuario}</h2>`;
            } else {
                bienvenida.innerHTML = `<h2>${generoSeleccionado}</h2>`;
            }
        });
    });
   
}

// Llamar funciones
genero();
obtenerNombre(nombre);
