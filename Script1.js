// Selecci�n del contenedor de la galer�a y del modal
const photoAlbum = document.querySelector('.photo-album');
const seccionFotos = document.getElementById('seccion-fotos');
let isAutoScrolling = true; // Controla si el scroll autom�tico est� activo
let isModalOpen = false;    // Controla si el modal est� abierto
let autoScrollInterval;     // Intervalo del scroll autom�tico

// Modal para maximizar im�genes
const modal = document.getElementById("modal");
const modalImg = document.getElementById("imgModal");
const captionText = document.getElementById("caption");
const closeModal = document.querySelector(".close");

// Cuadruplicar las im�genes para crear un desplazamiento m�s largo
photoAlbum.innerHTML += photoAlbum.innerHTML + photoAlbum.innerHTML + photoAlbum.innerHTML;

// Iniciar el scroll autom�tico
function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
        photoAlbum.scrollLeft += 1; // Velocidad del scroll autom�tico

        // Reiniciar el scroll al llegar a la mitad del contenedor cuadruplicado
        if (photoAlbum.scrollLeft >= photoAlbum.scrollWidth / 4) {
            photoAlbum.scrollLeft = 0;
        }
    }, 30);
}

// Pausar el scroll autom�tico
function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

// Iniciar scroll autom�tico al cargar la p�gina
window.addEventListener('load', startAutoScroll);

// Detener el desplazamiento autom�tico cuando el mouse est� sobre la secci�n de fotos
seccionFotos.addEventListener('mouseenter', () => {
    if (!isModalOpen) {
        stopAutoScroll();
        isAutoScrolling = false;
    }
});

// Reanudar el desplazamiento autom�tico cuando el mouse salga de la secci�n de fotos
seccionFotos.addEventListener('mouseleave', () => {
    if (!isAutoScrolling && !isModalOpen) {
        startAutoScroll();
        isAutoScrolling = true;
    }
});

// Funcionalidad del modal para maximizar la imagen seleccionada
const images = document.querySelectorAll(".photo-album img");

images.forEach(image => {
    image.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        stopAutoScroll(); // Pausar el scroll autom�tico cuando el modal est� abierto
        isModalOpen = true; // Marcar que el modal est� abierto
    });
});

// Cerrar el modal y reanudar el scroll autom�tico solo si el mouse no est� sobre la secci�n de fotos
closeModal.addEventListener("click", function() {
    modal.style.display = "none";
    isModalOpen = false; // Marcar que el modal se ha cerrado
    if (!seccionFotos.matches(':hover')) {
        startAutoScroll(); // Reanudar el scroll si el mouse no est� sobre la secci�n
        isAutoScrolling = true;
    }
});
