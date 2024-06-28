export async function fetchData(page = 1) {
    try {
        const response = await fetch('https://api.spacexdata.com/v4/rockets/query', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: {},
                options: {
                    page,
                    limit: 1,
                },
            }),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        return data.docs; // Asumiendo que los datos están en la propiedad 'docs' de la respuesta
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

export function createRocketHTML(rockets) {
    let template = "";

    rockets.forEach(rocket => {
        template += `
        
            <div class="rocket">
                <div class="rockets">
                    <h2>${rocket.country}</h2>
                    <p>${rocket.description}</p>
                    <p>The estimated cost per rocket launch ${rocket.cost_per_launch}</p>
                    <p>The date of the first flight of the rocket ${rocket.first_flight}</p>
                    <p> Read more about the rocket ${rocket.wikipedia}
                </div>
            </div>
        `;
    });

    return template;
}
