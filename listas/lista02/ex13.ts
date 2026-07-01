const valor1: number = Number(prompt("Digite o primeiro valor"))
const valor2: number = Number(prompt("Digite o segundo valor"))
const valor3: number = Number(prompt("Digite o terceiro valor"))

if(isNaN(valor1) || isNaN(valor2) || isNaN(valor3)){
    alert("valor invalido.")
    throw new Error("O valor digitado nao foi reconhecido como numero.")
}

if(valor1 > valor2 && valor1 > valor3){
    alert(` O maior é ${valor1}`)
}
if(valor2 > valor1 && valor2 > valor3){
    alert(` O maior é ${valor2}`)
}
if(valor3 > valor1 && valor3 > valor2){
    alert(` O maior é ${valor3}`)
}

