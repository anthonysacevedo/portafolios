const fondo = document.querySelector('.fondos');
const photo = document.getElementById('photo');
const typo = document.getElementById('typo');
const dev = document.getElementById('dev');
const nombre = document.getElementById('nombre');
const bienvenida = document.getElementById('bienvenida');
const dropDown = document.querySelector('.dropdown-menu');


let generoSeleccionado = "Bienvenido/a"; // Variable global para almacenar el género
let nombreUsuario = ""; // Variable para almacenar el nombre

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".galery-item img"); // Selecciona todas las imágenes dentro de .galery
    const modal = new bootstrap.Modal(document.getElementById("exampleModal")); // Inicializa el modal de Bootstrap
    const modalImgContainer = document.getElementById("modalContent"); // Contenedor del modal
    const modalTitle = document.getElementById("exampleModalLabel"); // Título del modal

    images.forEach((img) => {
        img.addEventListener("click", function () {
            // Limpiar contenido anterior del modal
            modalImgContainer.innerHTML = "";

            // Crear la imagen ampliada dentro del modal
            const modalImg = document.createElement("img");
            modalImg.src = this.src;
            modalImg.alt = "Imagen ampliada";
            modalImg.classList.add("img-fluid", "w-100"); // Hace que la imagen sea responsiva
            
            // Crear el botón de descarga
            const downloadBtn = document.createElement("a");
            downloadBtn.href = this.src;
            downloadBtn.download = this.src.split("/").pop(); // Nombre del archivo
            downloadBtn.classList.add("btn", "btn-primary", "mt-3");
            downloadBtn.textContent = "Descargar Imagen";

            // Agregar la imagen y el botón al modal
            modalImgContainer.appendChild(modalImg);
            modalImgContainer.appendChild(downloadBtn);

            // Asignar título al modal (puedes cambiarlo dinámicamente)
            modalTitle.textContent = "Vista previa de la imagen";

            // Mostrar el modal
            modal.show();
        });
    });
});

   
    
   
 


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
            bienvenida.innerHTML = `<h2><b>${generoSeleccionado}<br>${nombreUsuario}</b><br><br>¡Un placer <br>saludarte!</h2>`;
            
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
            let valor=""

            if (opcion === 'masculino') {
                generoSeleccionado = "Bienvenido";
                valor = nombre.value;
                nombreUsuario = valor; // Almacena el nombre ingresado
                bienvenida.innerHTML = `<h2><b>${generoSeleccionado}<br>${nombreUsuario}</b><br><br>¡Un placer <br>saludarte!</h2>`;
            
                bienvenida.scrollIntoView({behavior: "smooth"});
            } else if (opcion === 'femenino') {
                generoSeleccionado = "Bienvenida";
                valor = nombre.value;
                nombreUsuario = valor; // Almacena el nombre ingresado
                bienvenida.innerHTML = `<h2><b>${generoSeleccionado}<br>${nombreUsuario}</b><br><br>¡Un placer <br>saludarte!</h2>`;
                bienvenida.scrollIntoView({behavior: "smooth"});
            } else if (opcion === 'noBinario') {
                generoSeleccionado = "Bienvenide";
                valor = nombre.value;
                nombreUsuario = valor; // Almacena el nombre ingresado
                bienvenida.innerHTML = `<h2><b>${generoSeleccionado}<br>${nombreUsuario}</b><br><br>¡Un placer <br>saludarte!</h2>`;
                bienvenida.scrollIntoView({behavior: "smooth"});
            } else {
                generoSeleccionado = "Bienvenido/a";
                valor = nombre.value;
                nombreUsuario = valor; // Almacena el nombre ingresado
                bienvenida.innerHTML = `<h2><b>${generoSeleccionado}<br>${nombreUsuario}</b><br><br>¡Un placer <br>saludarte!</h2>`;
                bienvenida.scrollIntoView({behavior: "smooth"});
            }

            // No sobreescribir el nombre, solo actualizar el género
            if (nombreUsuario) {
                bienvenida.innerHTML = `<h2><b>${generoSeleccionado}<br>${nombreUsuario}</b><br><br>¡Un placer <br>saludarte!</h2>`;
                
            } else {
                bienvenida.innerHTML = `<h2><b>${generoSeleccionado}<br>${nombreUsuario}</b><br><br>¡Un placer<br> saludarte!</h2>`;
            }
        });
    });
   
}

// Llamar funciones
genero();
obtenerNombre(nombre);
