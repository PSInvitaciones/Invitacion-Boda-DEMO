body {
    background-image: url('https://drive.google.com/uc?export=view&id=1JOwXymr4oRjALLJvLPXV89CTejk4Yi-o');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    margin: 0;
}

/* Reset de márgenes y paddings para uniformidad */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Desplazamiento suave */
html {
    scroll-behavior: smooth;
}

/* Estilos generales para el cuerpo de la página */
body {
    font-family: 'Playfair Display', serif;
    background-color: #f9f9f9;
    color: #333;
    line-height: 1.6;
}

/* Header */
header {
    background-image: url('https://img.freepik.com/fotos-premium/hermosas-composiciones-florales-restaurante-ceremonia-boda_73989-22672.jpg');
    background-size: cover;
    background-position: center;
    text-align: center;
    color: #fff;
    padding: 40px 0;
    border-radius: 10px;
}

h1 {
    font-size: 4em;
    font-family: 'Georgia', serif;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    color: #fff;
}

/* Títulos de secciones */
h2 {
    color: #495057;
    font-size: 2em;
    text-align: center;
    margin-bottom: 20px;
}

/* Sección de fotos */
#seccion-fotos {
    padding: 20px;
    background-color: transparent;
}

/* Álbum de fotos con scroll horizontal */
.photo-album {
    display: flex;
    overflow-x: auto; /* Habilitar scroll manual */
    gap: 10px;
    padding: 10px;
    position: relative;
    scroll-behavior: smooth; /* Desplazamiento suave */
    cursor: grab; /* Indicar que es desplazable */
}

.photo-album::-webkit-scrollbar {
    display: none; /* Ocultar scrollbar en Chrome */
}

.photo-album img {
    width: 250px;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.3s ease;
    cursor: pointer;
}

.photo-album img:hover {
    transform: scale(1.1); /* Efecto de flotación */
}

.venue-photos img {
    width: 48%;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
}

/* Botón de Confirmar Asistencia */
#confirmar-asistencia {
    padding: 40px 0;
    text-align: center;
    border-radius: 10px;
}

#whatsapp-btn {
    display: inline-block;
    padding: 15px 30px;
    background-color: #495057;
    color: #fff;
    border-radius: 5px;
    font-size: 1.2em;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

#whatsapp-btn:hover {
    background-color: #343a40;
}

#whatsapp-btn:active {
    background-color: #007bff;
}

/* Footer */
footer {
    text-align: center;
    padding: 20px;
    color: #333;
    font-size: 0.9em;
    border-top: 1px solid #ccc;
    margin-top: 20px;
}

/* Adjust the layout for mobile screens */
@media screen and (max-width: 768px) {
    #opciones-alojamiento .venue-photos {
        flex-direction: column; /* Stack the items vertically */
        align-items: center; /* Center align items */
        gap: 20px; /* Space between items */
    }

    .venue-item {
        width: 90%; /* Use most of the screen width */
        max-width: 400px; /* Limit the maximum width */
        margin: 0 auto; /* Center it horizontally */
        padding: 15px; /* Add padding inside */
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Soft shadow for better separation */
        background-color: #f9f9f9; /* Light background for contrast */
    }

    .venue-item img {
        width: 100%; /* Make image take full width of container */
        border-radius: 10px; /* Round corners for a softer look */
        margin-bottom: 10px; /* Add space below the image */
    }

    .venue-address {
        font-size: 1em; /* Adjust text size for readability */
        color: #2c3e50;
        text-align: center; /* Center the address text */
    }
}

/* Modal para maximizar las imágenes */
.modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
}

.modal-content {
    margin: auto;
    display: block;
    max-width: 80%;
    height: auto;
    margin-top: 5%;
}

.close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #fff;
    font-size: 40px;
    cursor: pointer;
}

.close:hover,
.close:focus {
    color: #bbb;
}

#caption {
    text-align: center;
    color: #fff;
    padding: 10px 20px;
    font-size: 1.2em;
}

/* Estilo para la sección de mensaje */
#mensaje-invitado {
    padding: 10px;
    text-align: center;
    background-color: #f9f9f9;
    margin-bottom: 15px;
    border-radius: 5px;
    max-width: 600px;
    margin: 10px auto; /* Centrar la sección */
}

/* Estilo del mensaje */
.mensaje {
    font-style: normal;
    font-family: 'Playfair Display', serif;
    font-size: 1em;
    color: #495057;
    line-height: 1.4;
}

/* Nombre de los novios en cursiva */
.nombre-novios {
    font-style: italic;
    font-family: 'Great Vibes', cursive;
    font-size: 1.2em;
    color: #333;
}

/* Nueva sección de mensaje de los novios para la ceremonia */
#mensaje-ceremonia {
    padding: 15px;
    text-align: center;
    background-color: #f3f4f7;
    margin-bottom: 15px;
    border-radius: 5px;
    max-width: 600px;
    margin: 20px auto;
}

#mensaje-ceremonia .mensaje {
    font-style: normal;
    font-family: 'Playfair Display', serif;
    font-size: 1em;
    color: #495057;
    line-height: 1.5;
}

/* Nombre de los novios en cursiva */
#mensaje-ceremonia .nombre-novios {
    font-style: italic;
    font-family: 'Great Vibes', cursive;
    font-size: 1.2em;
    color: #333;
}

/* Ajustes para las fotos de la ceremonia */
.venue-photos {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px;
}

.venue-item {
    width: 45%;
    text-align: center;
}

.venue-item img {
    width: 100%;
    border-radius: 10px;
}

.venue-address {
    font-family: 'Playfair Display', serif;
    font-size: 1em;
    color: #495057;
    margin-top: 10px;
}

/* Estilo para la sección de la cuenta regresiva */
#cuenta-regresiva {
    text-align: center;
    padding: 20px 0;
    background-color: #fdfdfd;
    margin: 20px 0;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

#cuenta-regresiva h2 {
    font-family: 'Playfair Display', serif;
    color: #2c3e50;
    font-size: 1.8em;
    margin-bottom: 10px;
    font-style: italic;
    letter-spacing: 1px;
    font-weight: 500;
}

#contador {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 10px;
}

.tiempo {
    background: transparent;
    color: #2c3e50;
    padding: 10px 15px;
    border-radius: 5px;
    font-family: 'Playfair Display', serif;
}

.tiempo span {
    display: block;
    font-size: 2.5em;
    font-weight: bold;
    color: #e74c3c;
    position: relative;
    overflow: hidden;
}

.tiempo span::before {
    content: attr(data-number);
    position: absolute;
    top: -100%;
    left: 0;
    right: 0;
    text-align: center;
    color: #c0392b;
    animation: dropIn 0.5s ease-in-out forwards;
}

@keyframes dropIn {
    0% {
        top: -100%;
        opacity: 0;
    }
    100% {
        top: 0;
        opacity: 1;
    }
}

.tiempo p {
    margin: 0;
    font-size: 1em;
    color: #7f8c8d;
    text-transform: capitalize;
    margin-top: 5px;
    font-style: italic;
}

/* Estilo para la sección de la mesa de regalos */
#mesa-de-regalos {
    text-align: center; /* Center the entire section */
    padding: 20px;
    background-color: #f9f9f9;
    margin-bottom: 15px;
    border-radius: 5px;
    max-width: 600px;
    margin: 20px auto; /* Center the section horizontally */
}

.contenedor-mesa-de-regalos {
    display: flex;
    flex-direction: column;
    align-items: center; /* Center-align content inside the container */
}

.logotipo-tienda-departamental {
    width: 280px; /* Adjust the logo size as needed */
    height: auto;
    margin-bottom: 10px; /* Add space between the logo and the text */
}

.mesa-de-regalos-text {
    font-family: 'Playfair Display', serif;
    font-size: 1.2em;
    color: #495057;
    margin-top: 10px;
    text-align: center;
}

.link-mesa-de-regalos-text{
    font-size: 90%;
    color:#2c3e50;
    font-weight: bold;
}
/*.boton-mesa-de-regalos {
    background-color: #495057;
    color: #fff;
    padding: 1px 10px;
    border-radius: 5px;
    font-size: 1em;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    border-radius: 10px;
}*/

/*OPCIONES PARA EL BOTÓN DE CONFIRMAR ASISTENCIA*/
#pruebame {
    font-size: small;
    font-weight:bold;
    text-decoration: underline;
}

.boton-mesa-de-regalos:hover {
    background-color: #e5ebf1;
}

/* Estilo para la sección de opciones de alojamiento */
#opciones-alojamiento {
    text-align: center;
    padding: 20px 0;
    background-color: #fdfdfd;
    margin: 20px 0;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

#opciones-alojamiento h2 {
    font-family: 'Playfair Display', serif;
    color: #2c3e50;
    font-size: 1.8em;
    margin-bottom: 10px;
    font-style: italic;
    letter-spacing: 1px;
    font-weight: 500;
}

.venue-photos {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    margin-top: 10px;
}

.venue-item {
    width: 30%;
    text-align: center;
    background: #f3f4f7;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.venue-item:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
}

.venue-item img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    cursor: pointer;
    position: relative;
}

.venue-item .tooltip {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    font-family: 'Playfair Display', serif;
    font-size: 0.9em;
    white-space: nowrap;
    pointer-events: none;
    z-index: 10;
}

.venue-item:hover .tooltip {
    display: block;
    content: 'Reservar ahora';
}

.venue-address {
    font-family: 'Playfair Display', serif;
    font-size: 1em;
    color: #495057;
    margin-top: 10px;
    text-align: center;
}
