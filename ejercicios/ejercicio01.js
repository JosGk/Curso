// calcular el indice de masa corporal
// formula peso / altura elevado 2 


function calcularmasacorporal(peso, altura){
let division    = peso / altura
let masacorporal = Math.pow(division, 2)
return masacorporal
}
console.log("El indice de masa corporal es: ", calcularmasacorporal(70,1.80))

// contar las vocales de un string

function contarVocales(cadenaC){
    let acumulativo = 0
    for (const letras of cadenaC){
if (letras === "a" || letras === "e" || letras === "i" || letras === "o" || letras === "u" ) {
    acumulativo++
}
    }
    return acumulativo
}

console.log("La cantidad de vocales es: ", contarVocales("Abecedario"))

// Un array de numeros encontrar el numero mas alto sin usar math.max

const matrizNumeros = [12,24,50,25,18,12]
let numeromax = 24

for (let i=0; i < matrizNumeros.length; i++) {
if (matrizNumeros[i] < numeromax) {
    numeromax= matrizNumeros[i]
}
}

console.log("El numero menor es: ", numeromax)