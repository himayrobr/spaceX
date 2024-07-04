export async function fetchData() {
    try {
        const response = await fetch('https://api.spacexdata.com/v4/crew');
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
        return `    <main class="contenedores">
        <section class="info1">
            <div>
                <h2>agency</h2>
                <h3>NASA</h3>
            </div>
        <div>
            <h2>wikipedia</h2>
            <a href="https://en.wikipedia.org/wiki/Robert_L._Behnken">https://en.wikipedia.org/wiki/Robert_L._Behnken</a>
        </div>

        </section>
        <section class="perfil">
            <img src="../storage/images/astronauta.jpg" alt="">
        </section>
        <section class="info2">
            <div>
                <h2>launches</h2>
                <h3>5eb87d46ffd86e000604b388</h3>
            </div>
            <div>
                <h2>status</h2>
                <h3>active</h3>
            </div>
            <div>
                <h2>id</h2>
                <h3>5ebf1a6e23a9a60006e03a7a</h3>
            </div>
        </section>
    </main>
    `;
}).join('');
}