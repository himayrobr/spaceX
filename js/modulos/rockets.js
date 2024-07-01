export async function fetchData() {
    try {
        const response = await fetch('https://api.spacexdata.com/v4/rockets');
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        return data; 
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
                            <div class="velocimetro-background">
                            <h3>Atmospheric acceleration</h3>
                            <p>${rocket.first_stage.thrust_sea_level.kN} kn</p>
                             <p>${rocket.first_stage.thrust_sea_level.lbf} Lbf</p>                         
                            </div>                         
                        </div>
                        <div class="velocimetro-container">
                            <div class="velocimetro-background">
                            <h3>Atmospheric acceleration</h3>
                            <p>${rocket.first_stage.thrust_vacuum.kN} kn</p>
                             <p>${rocket.first_stage.thrust_vacuum.lbf} Lbf</p>
                            </div>
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
                   <div class="imagenes">
                        ${Array.isArray(rocket.flickr_images) ? rocket.flickr_images.map(img => `
                            <img class="ship" src="${img}" alt="">
                        `).join('') : `<img class="ship" src="${rocket.flickr_images}" alt="">`}
                    </div>
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
        <section class="valores">
            <h2>MASS</h2>
            <div class="Bar">
                <img src="storage/images/Bar.svg" alt="">
                <h3>${rocket.mass.kg}</h3>
            </div>
            <h2>DIAMETER</h2>
            <div class="Bar">
                <img src="storage/images/Bar.svg" alt="">
                <h3>${rocket.diameter.meters}</h3>
            </div>
            <h2>HEIGHT</h2>
            <div class="Bar">
                <img src="storage/images/Bar.svg" alt="">
                <h3>${rocket.height.meters}</h3>
            </div>
            <h2>FIRST STAGE THRUST</h2>
            <div class="Bar">
                <img src="storage/images/Bar.svg" alt="">
                <h3>${rocket.first_stage.thrust_sea_level.kN}</h3>
            </div>
            <h2>LBF</h2>
            <div class="Bar">
                <img src="storage/images/Bar.svg" alt="">
                <h3>${rocket.first_stage.thrust_sea_level.lbf}</h3>
            </div>
            <h2>REUSABILITY</h2>
            <div class="Bar">
                <img src="storage/images/Bar.svg" alt="">
                <h3>${rocket.reusable}</h3>
            </div>
        </section>
    `).join('');
}
