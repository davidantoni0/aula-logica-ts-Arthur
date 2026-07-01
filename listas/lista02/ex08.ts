const numeroParImpar2: number = Number(prompt("digite um número"))

if(isNaN(numeroParImpar2)){
    alert("valor invalido.")
    throw new Error("O valor digitado nao foi reconhecido como numero.")
}

if(numeroParImpar2 === 0){
    alert("O número é zero .")
}

if(numeroParImpar2 % 2 === 0){
    alert("Número par.")
} else{
    alert("Número ímpar.")
}
