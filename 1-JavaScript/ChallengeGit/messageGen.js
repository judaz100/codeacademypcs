const astrology = ["planeta", "signo", "aspecto", "tránsito"]
const adjAstrolgy = ["retrógrado", "armónico", "desafiante", "poderoso", "influyente"]
const verbsAstrolgy = ["entra", "conecta", "forma", "activa", "impacta"]

const inspiracion = ["sueño", "camino", "desafío"]
const adjInspiracion = ["grande", "alcanzable", "único", "increíble", "valioso"]
const verbsInspiracion = ["persigue", "visualiza", "abraza", "crea", "supera"]


const aleatory = (array) => {
    return array[Math.floor(Math.random() * array.length)]
}

const messageAstrology = () => {
    return ("El" +" "+ aleatory(astrology) + " " + aleatory(adjAstrolgy)+ " " + aleatory(verbsAstrolgy) +" "+ "positivamente");
}

const messageInspiracion = () => {
    return ("Un" +" "+ aleatory(inspiracion) + " " + aleatory(adjInspiracion)+ " " + aleatory(verbsInspiracion) +" "+ "positivamente");
}






console.log(messageAstrology());
console.log(messageInspiracion());
console.log(messageAbsurdos());