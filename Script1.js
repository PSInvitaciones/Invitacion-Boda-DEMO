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
    let scrollSpeed = window.innerWidth < 768 ? 0.5 : 1; // Velocidad más lenta en móviles
    autoScrollInterval = setInterval(() => {
        photoAlbum.scrollLeft += scrollSpeed; // Velocidad del scroll automático
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
        stopAutoScroll(); // Pausar el scroll automático cuando el modal está abierto
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
            colors: ['#ff718d', '#29cdff', '78ff44'] // Colores personalizados
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
        location.href = whatsappBtn.href; // Abre el enlace después del efecto
    }, 1500);
});

// **Agregar funcionalidad de pop-up y tooltip a las fotos de la ceremonia**
const venueImages = document.querySelectorAll('.venue-item img');

venueImages.forEach(image => {
    // Crear y agregar un tooltip para cada imagen
    const tooltip = document.createElement('span');
    tooltip.classList.add('tooltip');
    tooltip.textContent = 'Ir a ubicación';
    image.parentNode.appendChild(tooltip);

    // Mostrar el mensaje al pasar el mouse
    image.addEventListener('mouseenter', () => {
        tooltip.style.display = 'block';
    });

    // Ocultar el mensaje cuando se aleje el mouse
    image.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
    });

    // Mostrar mensaje de confirmación al hacer clic
    image.addEventListener('click', () => {
        alert('Esta acción te llevaría a la ubicación del lugar en Google Maps.');
    });
});

// **Cuenta regresiva**
const fechaEvento = new Date("2024-12-31T00:00:00").getTime(); // Cambia la fecha al día del evento

// Actualización del contador cada segundo
const actualizarCuentaRegresiva = setInterval(() => {
    const ahora = new Date().getTime();
    const diferencia = fechaEvento - ahora;

    // Cálculo del tiempo restante
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Actualización de los valores en la página con animación
    document.getElementById("dias").setAttribute("data-number", dias);
    document.getElementById("horas").setAttribute("data-number", horas);
    document.getElementById("minutos").setAttribute("data-number", minutos);
    document.getElementById("segundos").setAttribute("data-number", segundos);

    document.getElementById("dias").innerText = dias;
    document.getElementById("horas").innerText = horas;
    document.getElementById("minutos").innerText = minutos;
    document.getElementById("segundos").innerText = segundos;

    // Mostrar un mensaje cuando el evento haya comenzado
    if (diferencia < 0) {
        clearInterval(actualizarCuentaRegresiva);
        document.getElementById("contador").innerHTML = "<h3>¡El gran día ha llegado!</h3>";
    }
}, 1000);

// Funcionalidad de clic en las imágenes de alojamiento
const alojamientoImages = document.querySelectorAll('#opciones-alojamiento .venue-item img');

alojamientoImages.forEach(image => {
    image.addEventListener('click', () => {
        alert('Esta acción te llevará al sitio de reserva del hotel.');
    });
});

// **Lógica para las fotos de la ceremonia**
const ceremonyImages = document.querySelectorAll('#ceremonia .venue-item img');

ceremonyImages.forEach(image => {
    // Crear y agregar un tooltip para cada imagen de la ceremonia
    const tooltip = document.createElement('span');
    tooltip.classList.add('tooltip');
    tooltip.textContent = 'Ir a ubicación';
    image.parentNode.appendChild(tooltip);

    // Mostrar el tooltip al pasar el mouse
    image.addEventListener('mouseenter', () => {
        tooltip.style.display = 'block';
    });

    // Ocultar el tooltip al retirar el mouse
    image.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
    });

    // Mostrar mensaje al hacer clic
    image.addEventListener('click', () => {
   
    });
});

// **Lógica para las fotos de hoteles**
const hotelImages = document.querySelectorAll('#opciones-alojamiento .venue-item img');

hotelImages.forEach(image => {
    // Crear y agregar un tooltip para cada imagen de hotel
    const tooltip = document.createElement('span');
    tooltip.classList.add('tooltip');
    tooltip.textContent = 'Reservar ahora';
    image.parentNode.appendChild(tooltip);

    // Mostrar el tooltip al pasar el mouse
    image.addEventListener('mouseenter', () => {
        tooltip.style.display = 'block';
    });

    // Ocultar el tooltip al retirar el mouse
    image.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
    });

    // Redirigir al sitio del hotel al hacer clic en la imagen
    image.addEventListener('click', () => {
        const hotelUrl = image.parentNode.href; // Usar el enlace del <a> como destino
        window.open(hotelUrl, '_blank');
    });
});
