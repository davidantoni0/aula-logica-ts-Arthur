const idade2: number = Number(prompt("Digite a idade"))

if(isNaN(idade2)){
    alert("valor invalido.")
    throw new Error("O valor digitado nao foi reconhecido como numero.")
}

if(idade2 >= 18){
    alert(` Entrada permitida. idade: ${idade2}`)
}
if(idade2 == 16 || idade2 == 17){
    alert(` Entrada apenas acompanhado. idade: ${idade2}`)
}
if(idade2 < 16){
    alert(` Entrada proibida. idade: ${idade2}`)
}
