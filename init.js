const menu = document.querySelector('.menu');
const photo = document.getElementById('photo');
const typo = document.getElementById('typo');
const dev = document.getElementById('dev');


//Funcion para cambio de imagen de fondo de menu
function cambiarFondo(variable, imagen0, imagen1) {
    variable.addEventListener("mouseover", function () {
        menu.style.backgroundImage = `url('${imagen1}')`; // Cambia a la imagen nueva
        menu.style.opacity = "0.9"; // Cambia la opacidad para la transición
    });

    variable.addEventListener("mouseout", function () {
        menu.style.backgroundImage = `url('${imagen0}')`; // Vuelve a la imagen original
        menu.style.opacity = "1"; // Restaura la opacidad a su valor normal
    });
}

// Llamar a la función con los nombres de archivos de imágenes
cambiarFondo(photo, "imagen0.jpg", "imagen1.jpg");
cambiarFondo(typo, "imagen0.jpg", "imagen2.jpg");
cambiarFondo(dev, "imagen0.jpg", "imagen3.jpg");



