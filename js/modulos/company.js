export async function fetchData() {
    try {
        const response = await fetch('https://api.spacexdata.com/v4/company');
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
        return ``;
    }).join('');
    }
    