import { fetchData, createNameRocketHTML, createRocketHTML } from './modulos/rockets.js';

let contador = 0;
let rockets = [];

async function fetchRocket() {
    const rocket = rockets[contador];
    if (rocket) {
        const nameRocketHTML = createNameRocketHTML([rocket]);
        document.querySelector('.Rockets').innerHTML = nameRocketHTML;

        const rocketHTML = createRocketHTML([rocket]);
        document.querySelector('.Rockets').innerHTML += rocketHTML;

        displayImages(rocket.flickr_images);
    }
}

function cambiarContador(valor) {
    contador = valor;
    fetchRocket(); 
}

document.getElementById('button1').addEventListener('click', function() {
    cambiarContador(0);
});

document.getElementById('button2').addEventListener('click', function() {
    cambiarContador(1);
});

document.getElementById('button3').addEventListener('click', function() {
    cambiarContador(2);
});

document.getElementById('button4').addEventListener('click', function() {
    cambiarContador(3);
});

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

document.addEventListener('DOMContentLoaded', async () => {
    try {
        rockets = await fetchData();
        fetchRocket(); // Inicializar con el primer cohete
    } catch (error) {
        console.error('Error initializing application:', error);
    }
});

const showMoreButton = document.getElementById('showMoreButton');
const hiddenButtons = document.querySelectorAll('.transparent-button.hidden');

let areButtonsVisible = false;

showMoreButton.addEventListener('click', function() {
    if (areButtonsVisible) {
        // Ocultar los botones adicionales
        hiddenButtons.forEach(button => {
            button.classList.add('hidden');
        });
        showMoreButton.innerHTML = '&#10148;'; // Cambiar flecha a derecha
    } else {
        // Mostrar los botones adicionales
        hiddenButtons.forEach(button => {
            button.classList.remove('hidden');
        });
        showMoreButton.innerHTML = '&#10149;'; // Cambiar flecha a abajo
    }
    areButtonsVisible = !areButtonsVisible; // Alternar estado de visibilidad
});
