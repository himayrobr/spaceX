import { fetchData as fetchRocketData, createNameRocketHTML, createRocketHTML } from './modulos/rockets.js';
import { fetchData as fetchCapsulesData, createCapsuleHTML } from './modulos/capsules.js';

let contador = 0;
let rockets = [];
let capsules = [];

async function fetchRocket() {
    const rocket = rockets[contador];
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
      rockets = await fetchRocketData();
      capsules = await fetchCapsulesData();
      fetchRocket(); // Inicializar con el primer cohete
      fetchCapsules();  
      cambiarBotones(); // Establecer la visibilidad inicial de los botones
    } catch (error) {
        console.error('Error initializing application:', error);
    }
});

const rocketButtons = document.querySelectorAll('.boton__cohetes');
const showMoreButton = document.getElementById('showMoreButton');

// Función para cambiar la visibilidad de los botones de cohetes
function cambiarBotones() {
  rocketButtons.forEach((button, index) => {
    if (contador === 0) {
      // Mostrar los primeros dos botones
      if (index < 2) {
        button.style.display = 'inline-block';
      } else {
        button.style.display = 'none';
      }
    } else {
      // Mostrar los siguientes dos botones
      if (index >= 2 && index < 4) {
        button.style.display = 'inline-block';
      } else {
        button.style.display = 'none';
      }
    }
  });

  contador = (contador + 1) % 2; // Alternar entre 0 y 1
}

// Agregar evento de clic al botón de la flecha
showMoreButton.addEventListener('click', cambiarBotones);
