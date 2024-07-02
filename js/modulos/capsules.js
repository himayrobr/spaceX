export async function fetchData() {
    try {
        const response = await fetch('https://api.spacexdata.com/v4/capsules');
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

export function createNameCapsulesHTML(capsules) {
    return capsules.map(capsule => `
        <div class="name__Rocket">
            <h1>${capsule.serial}</h1>
        </div>
    `).join('');
}

export function createRocketHTML(capsules) {
    return capsules.map(capsule => {
        // const massPercentage = (rocket.mass.kg / 100000) * 100;
        // const diameterPercentage = (rocket.diameter.meters / 10) * 100;
        // const heightPercentage = (rocket.height.meters / 100) * 100;
        // const thrustPercentage = (rocket.first_stage.thrust_sea_level.kN / 10000) * 100;
        // const lbfPercentage = (rocket.first_stage.thrust_sea_level.lbf / 2000000) * 100;
        // const reusabilityPercentage = rocket.reusable ? 100 : 0;
        return `
        <div class="vistas">
            <div class="rocket">
                <div class="rockets">
                    <h2>${capsule.reuse_count}</h2>
                    <p>${capsule.water_landings}</p>
                </div>
            </div>
            <div class="apilar">
                <div class="fila1">
                    <section class="velocimetro">
                        <div class="velocimetro-container">
                            <div class="velocimetro-background">
                            <h3>land_landings</h3>
                            <p>${capsule.land_landings} kn</p>                       
                            </div>                         
                        </div>
                        <div class="velocimetro-container">
                            <div class="velocimetro-background">
                            <h3>last_update</h3>
                            <p>${capsule.last_update}</p>
                             
                            </div>
                            <div class="aguja" id="aguja2"></div>
                        </div>
                    </section>
                </div>
                <div class="fila2">
                    <div class="informacion">
                        <h3>INFORMATION CAPSULE</h3>
                        <div>
                            <h3>Type:</h3>
                            <p>${capsule.launches}</p>
                        </div>
                        <div>
                            <h3>Rocket in service:</h3>
                            <p>${capsule.status}</p>
                        </div>
                    </div>
                   <div class="imagenes">
                            <img class="ship" src="${img}" alt="">
                        ``<img class="ship" src="../../storage/" alt="">}
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
                    <div class="bar-container">
                        <div class="bar green" style="width: ${massPercentage}%">${rocket.mass.kg} kg</div>
                    </div>
                    <h2>DIAMETER</h2>
                    <div class="bar-container">
                        <div class="bar blue" style="width: ${diameterPercentage}%">${rocket.diameter.meters} m</div>
                    </div>
                    <h2>HEIGHT</h2>
                    <div class="bar-container">
                        <div class="bar red" style="width: ${heightPercentage}%">${rocket.height.meters} m</div>
                    </div>
                    <h2>FIRST STAGE THRUST</h2>
                    <div class="bar-container">
                        <div class="bar orange" style="width: ${thrustPercentage}%">${rocket.first_stage.thrust_sea_level.kN} kN</div>
                    </div>
                    <h2>LBF</h2>
                    <div class="bar-container">
                        <div class="bar green" style="width: ${lbfPercentage}%">${rocket.first_stage.thrust_sea_level.lbf} Lbf</div>
                    </div>
                    <h2>REUSABILITY</h2>
                    <div class="bar-container">
                        <div class="bar blue" style="width: ${reusabilityPercentage}%">${rocket.reusable ? 'Yes' : 'No'}</div>
                    </div>
                </section>
    `;
}).join('');
}

