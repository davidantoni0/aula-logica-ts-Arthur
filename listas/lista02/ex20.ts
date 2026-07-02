let pesoPessoa = Number(prompt("Peso (kg)"))
if(isNaN(segundoNumero)){
    alert("valor invalido.")
    throw new Error("O valor digitado nao foi reconhecido como numero.")
}
if(pesoPessoa === 0){
    alert("valor invalido.")
    throw new Error("O peso digitado deve ser maior que zero.")
}
let alturaPessoa = Number(prompt("Altura (m)"))
if(alturaPessoa === 0){
    alert("valor invalido.")
    throw new Error("O valor digitado nao foi reconhecido como numero.")
}
if(alturaPessoa === 0){
    alert("valor invalido.")
    throw new Error("A altura digitada deve ser maior que zero.")
}
let imcPessoa = pesoPessoa / (alturaPessoa * alturaPessoa)

let txt = "IMC " + imcPessoa.toFixed(1) + ": "
if (imcPessoa < 18.5) {
    alert(txt + "Abaixo do peso")
} else if (imcPessoa < 25) {
    alert(txt + "Normal")
} else if (imcPessoa < 30) {
    alert(txt + "Sobrepeso")
} else {
    alert(txt + "Obesidade")
}