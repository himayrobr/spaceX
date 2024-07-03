import { fetchData as fetchRocketData, createNameRocketHTML, createRocketHTML } from './modulos/rockets.js';
import { fetchData as fetchCapsulesData, createCapsuleHTML } from './modulos/capsules.js';

let contador = 0;
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
    const capsulesHTML = createCapsuleHTML(capsules);
    document.querySelector('.Capsules').innerHTML = capsulesHTML;
}

// Función para cambiar el contador y actualizar la vista de cohetes
function cambiarContador(valor) {
    contador = valor;
    fetchRocket();
}

// Función para cambiar el contador y actualizar la vista de cápsulas
function cambiarContadorCapsules(valor) {
    contador = valor;
    fetchCapsules();
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
function cambiarBotonesCapsules() {
    const capsuleButtons = document.querySelectorAll('.boton__capsule');
    capsuleButtons.forEach((button, index) => {
        const shouldDisplay = contador === 0 ? index < 2 : index >= 2 && index < 4;
        button.style.display = shouldDisplay ? 'inline-block' : 'none';
    });
}

// Eventos de clic para botones de cohetes
document.querySelectorAll('.boton__cohetes').forEach((button, index) => {
    button.addEventListener('click', () => cambiarContador(index));
});

// Eventos de clic para botones de cápsulas
document.querySelectorAll('.boton__capsule').forEach((button, index) => {
    button.addEventListener('click', () => cambiarContadorCapsules(index));
});

// Evento de carga inicial del documento
document.addEventListener('DOMContentLoaded', async () => {
    try {
        rockets = await fetchRocketData();
        capsules = await fetchCapsulesData();
        fetchRocket(); // Inicializar con el primer cohete
        fetchCapsules(); // Inicializar con la primera cápsula
        cambiarBotones(); // Establecer la visibilidad inicial de los botones de cohetes
        cambiarBotonesCapsules(); // Establecer la visibilidad inicial de los botones de cápsulas
    } catch (error) {
        console.error('Error initializing application:', error);
    }
});

const showMoreButton = document.getElementById('showMoreButton');
const showMoreButtonCapsules = document.getElementById('showMoreButtonCapsules');

// Evento de clic para mostrar más botones de cohetes
showMoreButton.addEventListener('click', cambiarBotones);

// Evento de clic para mostrar más botones de cápsulas
showMoreButtonCapsules.addEventListener('click', cambiarBotonesCapsules);
