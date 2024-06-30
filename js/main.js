import { fetchData, createNameRocketHTML, createRocketHTML} from './modulos/rockets.js';

document.addEventListener('DOMContentLoaded', async () => {
    try {
        console.log('DOM fully loaded and parsed');

        const rockets = await fetchData();
        console.log('Fetched Rockets:', rockets); // Verifica que los datos se están obteniendo
        
        const nameRocketHTML = createNameRocketHTML(rockets);
        console.log('Generated HTML:', nameRocketHTML); // Verifica que el HTML se está generando
        document.querySelector('.Rockets').innerHTML = nameRocketHTML;
        console.log('HTML inserted into DOM');

        const rocketHTML = createRocketHTML(rockets);
        console.log('Generated Rocket HTML:', rocketHTML);
        document.querySelector('.Rockets').innerHTML +=rocketHTML;
        console.log('Rocket HTML inserted into DOM');
    } catch (error) {
        console.error('Error initializing application:', error);
    }
});
