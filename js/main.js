import { fetchData as fetchRocketData, createNameRocketHTML, createRocketHTML } from './modulos/rockets.js';
import { fetchData as fetchCapsuleData, createCapsuleHTML } from './modulos/capsules.js';

let contador = 0;
let contadorCapsule = 0; // Agrega esta línea para definir contadorCapsule
let rockets = [];
let capsules = [];

// Función para cargar y mostrar datos de cohetes
async function fetchRocket() {
    const rocket = rockets[contador];
    if (rocket) {
        const nameRocketHTML = createNameRocketHTML([rocket]);
        const rocketHTML = createRocketHTML([rocket]);
        document.querySelector('.Rockets').innerHTML = nameRocketHTML + rocketHTML;

        displayImages(rocket.flickr_images);
    }
}

// Función para cargar y mostrar datos de cápsulas
async function fetchCapsules() {
    const capsule = capsules[contadorCapsule]; // Corregido: Usar capsules en lugar de capsule
    if (capsule) {
        const capsuleHTML = createCapsuleHTML([capsule]); // Corregido: Usar capsule en lugar de capsules
        document.querySelector('.Capsules').innerHTML = capsuleHTML;
    }
}

// Función para cambiar el contador y actualizar la vista de cohetes
function cambiarContador(valor) {
    contador = valor;
    fetchRocket();
    cambiarBotones();
}

// Función para cambiar el contador y actualizar la vista de cápsulas
function cambiarContadorCapsule(valor) {
  const cantidadCapsules = capsules.length;
  contadorCapsule = (valor + cantidadCapsules) % cantidadCapsules; // Asegurar que el contador esté dentro del rango válido
  fetchCapsules();
  cambiarBotonesCapsule();
}

// Función para mostrar imágenes de cohetes
function displayImages(images) {
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = '';
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.classList.add('imagen1');
        imgElement.referrerPolicy = 'no-referrer';
        imageContainer.appendChild(imgElement);
    });
}

// Función para cambiar la visibilidad de los botones de cohetes
function cambiarBotones() {
    const rocketButtons = document.querySelectorAll('.boton__cohetes');
    rocketButtons.forEach((button, index) => {
        button.style.display = index >= contador * 2 && index < contador * 2 + 2 ? 'inline-block' : 'none';
    });
}

// Función para cambiar la visibilidad de los botones de cápsulas
// Función para cambiar la visibilidad de los botones de cápsulas
function cambiarBotonesCapsule() {
  const capsuleButtons = document.querySelectorAll('.boton__capsule');
  capsuleButtons.forEach((button, index) => {
      const isVisible = index >= contadorCapsule && index < contadorCapsule + 2;
      button.style.display = isVisible ? 'inline-block' : 'none';
  });
}

// Función para navegar hacia atrás en los botones de cápsulas
function retrocederCapsula() {
  contadorCapsule = (contadorCapsule - 1 + capsules.length) % capsules.length;
  fetchCapsules();
  cambiarBotonesCapsule();
}

// Función para avanzar en los botones de cápsulas
function avanzarCapsula() {
  contadorCapsule = (contadorCapsule + 1) % capsules.length;
  fetchCapsules();
  cambiarBotonesCapsule();
}

// Evento de clic para la flecha de retroceso
document.getElementById('prevButtonCapsule').addEventListener('click', retrocederCapsula);

// Evento de clic para la flecha de avance
document.getElementById('nextButtonCapsule').addEventListener('click', avanzarCapsula);


// Eventos de clic para botones de cohetes
document.querySelectorAll('.boton__cohetes').forEach((button, index) => {
    button.addEventListener('click', () => cambiarContador(index));
});

// Eventos de clic para botones de cápsulas
document.querySelectorAll('.boton__capsule').forEach((button, index) => {
    button.addEventListener('click', () => cambiarContadorCapsule(index));
});

// Evento de carga inicial del documento
document.addEventListener('DOMContentLoaded', async () => {
    try {
        rockets = await fetchRocketData();
        capsules = await fetchCapsuleData();
        fetchRocket(); // Inicializar con el primer cohete
        fetchCapsules(); // Inicializar con la primera cápsula
        cambiarBotones(); // Establecer la visibilidad inicial de los botones de cohetes
        cambiarBotonesCapsule(); // Establecer la visibilidad inicial de los botones de cápsulas
    } catch (error) {
        console.error('Error initializing application:', error);
    }
});

const showMoreButton = document.getElementById('showMoreButton');
const showMoreButtonCapsule = document.getElementById('showMoreButtonCapsule');

// Evento de clic para mostrar más botones de cohetes
showMoreButton.addEventListener('click', cambiarBotones);

// Evento de clic para mostrar más botones de cápsulas
showMoreButtonCapsule.addEventListener('click', cambiarBotonesCapsule);
