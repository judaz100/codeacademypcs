const kelvin=0;
//se crea variable kelvin
let celsius = kelvin-273;
//se conviertene unos grados kelvin a celsius
let fahrenheit = celsius * (9/5) + 32;
//se calcula de celsius a fahrenheit
fahrenheit = Math.floor(fahrenheit);
//se redondea la variable
let newton= celsius * (33/100);
//se calcula de celsius a newton.
newton=Math.floor(newton);

console.log (`The temperature is ${celsius} degrees Celsius.`)
console.log(`The temperature is ${fahrenheit} degrees Farenheit.`)
console.log(`The temperature is ${newton} Newton`)
