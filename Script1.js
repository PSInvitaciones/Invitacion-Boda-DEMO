// Selección del contenedor de la galería y del modal
const photoAlbum = document.querySelector('.photo-album');
const seccionFotos = document.getElementById('seccion-fotos');
let isAutoScrolling = true; // Controla si el scroll automático está activo
let isModalOpen = false;    // Controla si el modal está abierto
let autoScrollInterval;     // Intervalo del scroll automático

// Modal para maximizar imágenes
const modal = document.getElementById("modal");
const modalImg = document.getElementById("imgModal");
const captionText = document.getElementById("caption");
const closeModal = document.querySelector(".close");

// Cuadruplicar las imágenes para crear un desplazamiento más largo
photoAlbum.innerHTML += photoAlbum.innerHTML + photoAlbum.innerHTML + photoAlbum.innerHTML;

// Iniciar el scroll automático
function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
        photoAlbum.scrollLeft += 1; // Velocidad del scroll automático
        // Reiniciar el scroll al llegar a la mitad del contenedor cuadruplicado
        if (photoAlbum.scrollLeft >= photoAlbum.scrollWidth / 4) {
            photoAlbum.scrollLeft = 0;
        }
    }, 30);
}

// Pausar el scroll automático
function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

// Iniciar scroll automático al cargar la página
window.addEventListener('load', startAutoScroll);

// Detener el desplazamiento automático cuando el mouse está sobre la sección de fotos
seccionFotos.addEventListener('mouseenter', () => {
    if (!isModalOpen) {
        stopAutoScroll();
        isAutoScrolling = false;
    }
});

// Reanudar el desplazamiento automático cuando el mouse salga de la sección de fotos
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
        stopAutoScroll(); // Pausar el scroll automático cuando el modal esté abierto
        isModalOpen = true; // Marcar que el modal está abierto
    });
});

// Cerrar el modal y reanudar el scroll automático solo si el mouse no está sobre la sección de fotos
closeModal.addEventListener("click", function() {
    modal.style.display = "none";
    isModalOpen = false; // Marcar que el modal se ha cerrado
    if (!seccionFotos.matches(':hover')) {
        startAutoScroll(); // Reanudar el scroll si el mouse no está sobre la sección
        isAutoScrolling = true;
    }
});

// Efecto de confetti y mensaje en la confirmación de asistencia
const whatsappBtn = document.getElementById('whatsapp-btn');
whatsappBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Evita que abra el enlace de inmediato
    whatsappBtn.textContent = '¡Hay Bodón!'; // Cambia el texto del botón

    // Configurar el confetti para que aparezca desde los lados hacia el centro
    function launchSideConfetti() {
        confetti({
            particleCount: 100,
            angle: 60, // Confetti desde la izquierda
            spread: 55,
            origin: { x: 0, y: 0.5 }, // Lado izquierdo
            colors: ['#bb0000', '#ffffff', '#0000ff'] // Colores personalizados
        });

        confetti({
            particleCount: 100,
            angle: 120, // Confetti desde la derecha
            spread: 55,
            origin: { x: 1, y: 0.5 }, // Lado derecho
            colors: ['#ff718d', '#29cdff', '78ff44'] // Colores personalizados
        });
    }

    // Lanzar confetti desde los lados durante 1.5 segundos
    launchSideConfetti();
    setTimeout(function() {
        window.open(whatsappBtn.href, '_blank'); // Abre el enlace después del efecto
    }, 1500);
});
