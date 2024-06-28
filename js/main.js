import { obtenerDatosAPI, info } from './modulos/rockets';

const main = async () => {
    const datosAPI = await obtenerDatosAPI();
    const contenidoHTML = info(datosAPI);
    const rocket = document.getElementById("rocket"); // Asegúrate de que haya un elemento con el id 'rocket' en tu HTML
    rocket.innerHTML = contenidoHTML;
};

main();