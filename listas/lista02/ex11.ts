const numeroNota: number = Number(prompt("digite o valor da nota"))

if(isNaN(numeroNota)){
    alert("valor invalido.")
    throw new Error("O valor digitado nao foi reconhecido como numero.")
}

if(numeroNota >= 9){
    alert(` Nota A.`)
}
if(numeroNota < 9 && numeroNota >= 7){
    alert(` Nota B.`)
}
if(numeroNota < 7 && numeroNota >= 6){
    alert(` Nota C.`)
}
if(numeroNota < 6 && numeroNota >= 4){
    alert(` Nota D.`)
}
if(numeroNota < 4){
    alert(` Nota F.`)
}