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

export function createNameRocketHTML(rockets) {
    return rockets.map(rocket => `
        <div class="name__Rocket">
            <h1>${rocket.name}</h1>
        </div>
    `).join('');
}

export function createRocketHTML(rockets) {
    return rockets.map(rocket => `
        <div class="vistas">
            <div class="rocket">
                <div class="rockets">
                    <h2>${rocket.country}</h2>
                    <p>${rocket.description}</p>
                    <p>The estimated cost per rocket launch:<br> ${rocket.cost_per_launch}</p>
                    <p>The date of the first flight of the rocket:<br> ${rocket.first_flight}</p>
                    <p>Read more about the rocket: <a href="${rocket.wikipedia}" target="_blank">${rocket.wikipedia}</a></p>
                </div>
            </div>
            <div class="apilar">
                <div class="fila1">
                    <section class="velocimetro">
                        <div class="velocimetro-container">
                            <div class="velocimetro-background"></div>
                            <div class="aguja" id="aguja1"></div>
                        </div>
                        <div class="velocimetro-container">
                            <div class="velocimetro-background"></div>
                            <div class="aguja" id="aguja2"></div>
                        </div>
                    </section>
                </div>
                <div class="fila2">
                    <div class="informacion">
                        <h3>INFORMATION ROCKET</h3>
                        <div>
                            <h3>Type:</h3>
                            <p>${rocket.type}</p>
                        </div>
                        <div>
                            <h3>Rocket in service:</h3>
                            <p>${rocket.active}</p>
                        </div>
                        <div>
                            <h3>Number of stages:</h3>
                            <p>${rocket.stages}</p>
                        </div>
                        <div>
                            <h3>Number of propellants:</h3>
                            <p>${rocket.boosters}</p>
                        </div>
                        <div>
                            <h3>Landing legs:</h3>
                            <p>${rocket.landing_legs.number}</p>
                        </div>
                        <div>
                            <h3>Leg material:</h3>
                            <p>${rocket.landing_legs.material}</p>
                        </div>
                        </div>
                        <img class="ship" src="storage/images/ship.png" alt="">
                    <div class="informacion2">
                        <h3>ENGINE INFORMATION</h3>
                        <div>
                            <h3>Type:</h3>
                            <p>${rocket.engines.type}</p>
                        </div>
                        <div>
                            <h3>Maximum power loss:</h3>
                            <p>${rocket.engines.engine_loss_max}</p>
                        </div>
                        <div>
                            <h3>Engine availability:</h3>
                            <p>${rocket.engines.layout}</p>
                        </div>
                        <div>
                            <h3>Number of engines:</h3>
                            <p>${rocket.engines.number}</p>
                        </div>
                        <div>
                            <h3>Stage 1 fuel:</h3>
                            <p>${rocket.engines.propellant_1}</p>
                        </div>
                        <div>
                            <h3>Stage 2 fuel:</h3>
                            <p>${rocket.engines.propellant_2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section class="valores">
            <h2>Inertial velocity</h2>
            <div class="Bar">
                <img src="storage/images/Bar.svg" alt="">
                <h3>7.68 km/s</h3>
            </div>
            <h2>Altitude</h2>
            <div class="Bar">
                <img src="storage/images/Bar.svg" alt="">
                <h3>390.0 km</h3>
            </div>
            <h2>Apogee</h2>
            <div class="Bar">
                <img src="storage/images/Bar.svg" alt="">
                <h3>404.4 km</h3>
            </div>
            <h2>Perigee</h2>
            <div class="Bar">
                <img src="storage/images/Bar.svg" alt="">
                <h3>389.4 km</h3>
            </div>
            <h2>Inclination</h2>
            <div class="Bar">
                <img src="storage/images/Bar.svg" alt="">
                <h3>51.67º</h3>
            </div>
            <h2>Range to ISS</h2>
            <div class="Bar">
                <img src="storage/images/Bar.svg" alt="">
                <h3>0.02</h3>
            </div>
        </section>
    `).join('');
}
