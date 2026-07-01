const idade4: number = Number(prompt("Digite a idade"))

if(isNaN(idade4)){
    alert("valor invalido.")
    throw new Error("O valor digitado nao foi reconhecido como numero.")
}

if(idade4 > 65){
    alert(` Entrada preferencial. idade: ${idade2}`)
} else{
    let gestante : string | null = prompt("Você é gestante?")
    if(gestante == null){
        alert("valor invalido.")
        throw new Error("O valor digitado nao pode ser vazio.")
    }
    gestante = gestante.toLowerCase()
    if(gestante == "sim" || gestante == "s"){
        alert(``)
    }
}