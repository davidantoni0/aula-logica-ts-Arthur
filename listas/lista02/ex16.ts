const ano: number = Number(prompt("Digite o ano"))

if(isNaN(ano)){
    alert("valor invalido.")
    throw new Error("O valor digitado nao foi reconhecido como numero.")
}

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    alert(ano + " é bissexto")
} else {
    alert(ano + " não é bissexto")
}