const primeiroNumero = Number(prompt("1º número"))
if(isNaN(primeiroNumero)){
    alert("valor invalido.")
    throw new Error("O valor digitado nao foi reconhecido como numero.")
}
const segundoNumero = Number(prompt("2º número"))
if(isNaN(segundoNumero)){
    alert("valor invalido.")
    throw new Error("O valor digitado nao foi reconhecido como numero.")
}
let sinalOperacao: string | null = prompt("Operação (+ - * /)")

if(sinalOperacao === null){
    alert("valor invalido.")
        throw new Error("O valor digitado nao pode ser vazio.")
}
sinalOperacao = sinalOperacao.trim()
if(sinalOperacao !== "+" && sinalOperacao !== "-" && sinalOperacao !== "*" && sinalOperacao !== "/"){
        alert("valor invalido.")
        throw new Error("Sinal de operação inválido.")
    }
if (sinalOperacao === "+") {
    alert(primeiroNumero + segundoNumero)
} else if (sinalOperacao === "-") {
    alert(primeiroNumero - segundoNumero)
} else if (sinalOperacao === "*") {
    alert(primeiroNumero * segundoNumero)
} else if (sinalOperacao === "/" && segundoNumero !== 0) {
    alert(primeiroNumero / segundoNumero)
} else {
    alert("Não dá pra dividir por zero!")
}