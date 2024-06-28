const rocket = document.querySelector(".info")
console.log(rocket)


const info=async()=>{
let plantilla = ""
plantilla=/*html*/`
<p class="info__detail">dffds</p>
<p class="info__detail">fddsdfs</p>
<p class="info__detail">fdfdfsa</p>
<p class="info__detail">ffdsfdsaad</p> 
`
return plantilla
} 

rocket.innerHTML=await info()

const obtenerDatosAPI = async ()=>{
    const url = 'https://api.spacexdata.com/v4/launches'; // Reemplaza con la URL de la API que estés usando
    let config = {
        method:'GET',
        headers:{'content-type':'application/json'}
    }
    let res = await fetch(url,config);
    let data = res.json();
    return data;
}

console.log(await obtenerDatosAPI())