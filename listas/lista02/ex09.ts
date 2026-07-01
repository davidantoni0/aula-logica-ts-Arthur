const numeroPositivoNegativo2: number = Number(prompt("digite um número"))

if(isNaN(numeroPositivoNegativo2)){
    alert("valor invalido.")
    throw new Error("O valor digitado nao foi reconhecido como numero.")
}

if(numeroPositivoNegativo2 === 0){
    alert("O número é zero .")
}

if(numeroPositivoNegativo2 > 0){
    alert("Número positivo.")
} else{
    alert("Número negativo.")
}
