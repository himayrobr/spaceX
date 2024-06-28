export const headers ={

    async function obtenerDatosAPI() {
        const url = 'https://api.spacexdata.com/v4/launches'; // Reemplaza con la URL de la API que estés usando
        
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Error al obtener los datos de la API');
            }
            const data = await response.json();
            return data; // Devuelve los datos obtenidos de la API
    } catch (error) {
        console.error('Error al obtener datos de la API:', error);
        return null;
    }
}
console.log(obtenerDatosAPI)
}