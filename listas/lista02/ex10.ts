const numeroMaiorMenor2: number = Number(prompt("digite um número"))
const numeroMenorMaior2: number = Number(prompt("digite outro número"))

if(isNaN(numeroMaiorMenor2) || isNaN(numeroMenorMaior2)){
    alert("valor invalido.")
    throw new Error("Um dos valores digitados nao foram reconhecidos como numero.")
}

if(numeroMaiorMenor2 > numeroMenorMaior2){
    alert(`O numero ${numeroMaiorMenor2} é maior que o numero ${numeroMenorMaior2}`)
} else{
    alert(`O numero ${numeroMenorMaior2} é maior que o numero ${numeroMaiorMenor2}`)
}