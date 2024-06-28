
export function fetchData(page){
    return fetch('https://api.spacexdata.com/v4/Rockets/query',{
        method: 'post',
        headers: {
            'content-Type':'application/json',
        },
    body: JSON.stringify({
        query: {},
        options:{
            page,
            limit: 1,
        },
    }),
})
 .then(response => response.json())
 .catch(error => console.error(error));
}
const info = async (datosAPI)=>{
    let plantilla = "";
    
    for (const Rockets of datosAPI) {
    
        plantilla +=/*html*/`
        <h1 class="name__Rocket">${rocket.name}</h1>
         <div class="rockets">
            <h2>${rocket.name}</h2>
            <p>Fecha: ${rocket.first_flight}</p>
            <p>Detalles: ${rocket.description}</p>
          </div>
        `;
      }
      return plantilla;
    };
    

    const obtenerDatosAPI = async () => {
        let page = 1; // Puedes ajustar el número de página según lo necesario
        try {
            const data = await fetchData(page);
            return data.docs; // Asumiendo que los datos están en la propiedad 'docs' de la respuesta
        } catch (error) {
            console.error("Error al obtener los datos de la API:", error);
            return [];
        }
    };
    
    const main = async () => {
        const datosAPI = await obtenerDatosAPI();
        const contenidoHTML = info(datosAPI);
        const rocket = document.getElementById("rocket"); // Asegúrate de que haya un elemento con el id 'rocket' en tu HTML
        rocket.innerHTML = contenidoHTML;
    };
    
    main();