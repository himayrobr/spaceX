import { fetchData, createRocketHTML } from './modulos/rockets.js';

const main = async () => {
    const rockets = await fetchData();
    const contenidoHTML = createRocketHTML(rockets);
    const rocketContainer = document.querySelector('.Rockets'); // Asegúrate de que haya un elemento con la clase 'Rockets' en tu HTML
    rocketContainer.innerHTML = contenidoHTML;
};

main();
