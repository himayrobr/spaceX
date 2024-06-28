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

// Función para actualizar la posición de una aguja de velocímetro específica
function actualizarVelocimetro(idAguja, velocidad) {
    // Velocidad máxima que puede alcanzar la aguja (ajusta según tus necesidades)
    const velocidadMaxima = 200; 

    // Calcula el ángulo de rotación basado en la velocidad
    const angulo = velocidad / velocidadMaxima * 180 - 90;

    // Selecciona la aguja por su ID
    const aguja = document.getElementById(idAguja);

    // Aplica la rotación a la aguja
    aguja.style.transform = `translateX(-50%) rotate(${angulo}deg)`;
}

// Función para simular un cambio de velocidad en cada velocímetro (solo para prueba)
function simularCambioVelocidad() {
    // Genera una velocidad aleatoria entre 0 y la velocidad máxima
    const velocidad1 = Math.random() * 200;
    const velocidad2 = Math.random() * 200;
    const velocidad3 = Math.random() * 200;
    const velocidad4 = Math.random() * 200;
    const velocidad5 = Math.random() * 200;
    const velocidad6 = Math.random() * 200;
    const velocidad7 = Math.random() * 200;
    const velocidad8 = Math.random() * 200;

    // Actualiza cada aguja de velocímetro con la velocidad correspondiente
    actualizarVelocimetro('aguja1', velocidad1);
    actualizarVelocimetro('aguja2', velocidad2);
    actualizarVelocimetro('aguja3', velocidad3);
    actualizarVelocimetro('aguja4', velocidad4);
    actualizarVelocimetro('aguja5', velocidad5);
    actualizarVelocimetro('aguja6', velocidad6);
    actualizarVelocimetro('aguja7', velocidad7);
    actualizarVelocimetro('aguja8', velocidad8);
}

// Ejecuta la simulación de cambio de velocidad cada 2 segundos (para prueba)
setInterval(simularCambioVelocidad, 2000);
