//exemplo com if else
var peso = 90.7
var altura = 1.60

var imc = peso / (altura*altura)



if (imc < 19.1) {
    console.log("abaixo do peso")
} else if (imc > 19.1 && imc <25.8) {
    console.log("peso normal")
} else if (imc > 25.8 && imc < 27.3) {
    console.log("um pouco acima do peso")
} else if (imc > 27.3 && imc < 32.3 ) {
    console.log("acima do peso")
} else {
    console.log("Obeso")
}