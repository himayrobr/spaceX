import { headers} from "components/env.js";
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

