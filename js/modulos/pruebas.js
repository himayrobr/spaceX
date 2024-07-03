import { fetchData as fetchRocketData, createNameRocketHTML, createRocketHTML } from './modulos/rockets.js';
import { fetchData as fetchCapsulesData, createCapsuleHTML } from './modulos/capsules.js';

let contadorCohetes = 0;
let contadorCapsulas = 0;
let rockets = [];
let capsules = [];

async function fetchRocket() {
    const rocket = rockets[contadorCohetes];
    if (rocket) {
        const nameRocketHTML = createNameRocketHTML([rocket]);
        const rocketHTML = createRocketHTML([rocket]);
        document.querySelector('.Rockets').innerHTML = nameRocketHTML + rocketHTML;

        displayImages(rocket.flickr_images);
    }
}

async function fetchCapsules() {
    const capsulesHTML = createCapsuleHTML(capsules);
    document.querySelector('.Capsules').innerHTML = capsulesHTML;
}

function cambiarContadorCohetes(valor) {
    contadorCohetes = valor;
    fetchRocket(); 
}

function cambiarContadorCapsulas(valor) {
    contadorCapsulas = valor;
    fetchCapsules();
}

document.getElementById('button1').addEventListener('click', function() {
    cambiarContadorCohetes(0);
});

document.getElementById('button2').addEventListener('click', function() {
    cambiarContadorCohetes(1);
});

document.getElementById('button3').addEventListener('click', function() {
    cambiarContadorCohetes(2);
});

document.getElementById('button4').addEventListener('click', function() {
    cambiarContadorCohetes(3);
});

document.getElementById('button1').addEventListener('click', function() {
    cambiarContadorCapsulas(0);
});

document.getElementById('button2').addEventListener('click', function() {
    cambiarContadorCapsulas(1);
});

document.getElementById('button3').addEventListener('click', function() {
    cambiarContadorCapsulas(2);
});

document.getElementById('button4').addEventListener('click', function() {
    cambiarContadorCapsulas(3);
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
        rockets = await fetchRocketData();
        capsules = await fetchCapsulesData();
        fetchRocket(); // Inicializar con el primer cohete
        fetchCapsules();  
        cambiarBotonesCohetes(); // Establecer la visibilidad inicial de los botones
        cambiarBotonesCapsulas(); // Establecer la visibilidad inicial de los botones de cápsulas
    } catch (error) {
        console.error('Error initializing application:', error);
    }
});

const rocketButtons = document.querySelectorAll('.boton__cohetes');
const capsuleButtons = document.querySelectorAll('.boton__capsule');
const showMoreButtonCohetes = document.getElementById('showMoreButtonCohetes');
const showMoreButtonCapsules = document.getElementById('showMoreButtonCapsules');

function cambiarBotonesCohetes() {
    rocketButtons.forEach((button, index) => {
        button.style.display = 'none';
    });

    const startIndex = (contadorCohetes % 2) * 2;
    for (let i = startIndex; i < startIndex + 2; i++) {
        rocketButtons[i].style.display = 'inline-block';
    }
    contadorCohetes = (contadorCohetes + 1) % Math.ceil(rocketButtons.length / 2);
}

function cambiarBotonesCapsulas() {
    capsuleButtons.forEach((button, index) => {
        button.style.display = 'none';
    });

    const startIndex = (contadorCapsulas % 2) * 2;
    for (let i = startIndex; i < startIndex + 2; i++) {
        capsuleButtons[i].style.display = 'inline-block';
    }
    contadorCapsulas = (contadorCapsulas + 1) % Math.ceil(capsuleButtons.length / 2);
}

showMoreButtonCohetes.addEventListener('click', cambiarBotonesCohetes);
showMoreButtonCapsules.addEventListener('click', cambiarBotonesCapsulas);
