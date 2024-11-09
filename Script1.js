// Selección del contenedor de la galer�a y del modal
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
    let scrollSpeed = window.innerWidth < 768 ? 0.5 : 1; // Velocidad m�s lenta en m�viles
    autoScrollInterval = setInterval(() => {
        photoAlbum.scrollLeft += scrollSpeed; // Velocidad del scroll autom�tico
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

// Cerrar el modal y reanudar el scroll automático solo si el mouse no est� sobre la secci�n de fotos
closeModal.addEventListener("click", function() {
    modal.style.display = "none";
    isModalOpen = false; // Marcar que el modal se ha cerrado
    if (!seccionFotos.matches(':hover')) {
        startAutoScroll(); // Reanudar el scroll si el mouse no est� sobre la secci�n
        isAutoScrolling = true;
    }
});

// Efecto de confetti y mensaje en la confirmación de asistencia
const whatsappBtn = document.getElementById('whatsapp-btn');
whatsappBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Evita que abra el enlace de inmediato
    whatsappBtn.textContent = '\u00A1Hay Bod\u00F3n!'; // Cambia el texto del boton

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
    tooltip.textContent = 'Ir a ubicacion';
    image.parentNode.appendChild(tooltip);

    // Mostrar el mensaje al pasar el mouse
    image.addEventListener('mouseenter', () => {
        tooltip.style.display = 'block';
    });

    // Ocultar el mensaje cuando se aleje el mouse
    image.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
    });

    // Mostrar mensaje de confirmaci�n al hacer clic
    image.addEventListener('click', () => {
        alert('Esta acci\u00F3n te llevar\u00EDa a la ubicac\u00F3n del lugar en Google Maps.');
    });
});

// **Cuenta regresiva**
const fechaEvento = new Date("2024-12-31T00:00:00").getTime(); // Cambia la fecha al día del evento

// Actualizaci�n del contador cada segundo
const actualizarCuentaRegresiva = setInterval(() => {
    const ahora = new Date().getTime();
    const diferencia = fechaEvento - ahora;

    // C�lculo del tiempo restante
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Actualizaci�n de los valores en la p�gina con animaci�n
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
        document.getElementById("contador").innerHTML = "<h3>¡El gran d\u00EDa ha llegado!</h3>";
    }
}, 1000);

// Funcionalidad de clic en las im�genes de alojamiento
const alojamientoImages = document.querySelectorAll('#opciones-alojamiento .venue-item img');

alojamientoImages.forEach(image => {
    image.addEventListener('click', () => {
        alert('Esta acci\u00F3n te llevar\u00E1 al sitio de reserva del hotel.');
    });
});

// **L�gica para las fotos de la ceremonia**
const ceremonyImages = document.querySelectorAll('#ceremonia .venue-item img');

ceremonyImages.forEach(image => {
    // Crear y agregar un tooltip para cada imagen de la ceremonia
    const tooltip = document.createElement('span');
    tooltip.classList.add('tooltip');
    tooltip.textContent = 'Ir a ubicaci\u00F3n';
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

// **L�gica para las fotos de hoteles**
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


