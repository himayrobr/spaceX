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
export function createCapsuleHTML(capsules) {
    return capsules.map(capsule => {
        return `
          <div class="titulo">
        <h1>${capsule.serial}</h1>
    </div>
    <main class="contenedores">
        <section class="info1">
            <div class="status">
                <h2>status</h2>
                <h3>${capsule.status}</h3>
            </div>
            <div class="type">
                <h2>type</h2>
                <h3>${capsule.type}</h3>
            </div>
            <div class="id">
                <h2>id</h2>
            <h3>${capsule.id}</h3>
        </div>
    </section>

<section class="info3">
<div class="land_landings">
    <h2>Land_landings</h2>
    <h3>${capsule.land_landings}</h3>
</div>
    <div>
        <h2>Last_update</h2>
        <h3>${capsule.last_update}</h3>
    </div>
    <div class="launches">
        <h2>Launches</h2>
        <h3>${capsule.launches}</h3>
    </div>
</section>
</main>
<section class="info2">
    <div class="reuse__count">
        <h2>reuse__coun</h2>
        <h3>${capsule.reuse_count}</h3>
    </div>
</div>
<div><img src="../storage/images/capsule.png" alt=""></div>
    <div class="last_update">
<div class="water_landings">
<h2>Water_landings</h2>
<h3>${capsule.water_landings}</h3>
</div>
</section>
  
    `;
}).join('');
}

