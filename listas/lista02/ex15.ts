const idade4: number = Number(prompt("Digite a idade"))

if(isNaN(idade4)){
    alert("valor invalido.")
    throw new Error("O valor digitado nao foi reconhecido como numero.")
}

if(idade4 > 65){
    alert(` Entrada preferencial.`)
} else{
    let gestante : string | null = prompt("Você é gestante?")
    if(gestante === null || gestante.trim() === ""){
        alert("valor invalido.")
        throw new Error("O valor digitado nao pode ser vazio.")
    }
    gestante = gestante.toLowerCase()
    if(gestante == "sim" || gestante == "s"){
        alert(`Entrada preferencial.`)
    } else{
        let deficiente : string | null = prompt("Você é deficiente?")
        if(deficiente == null || deficiente.trim() === ""){
            alert("valor invalido.")
            throw new Error("O valor digitado nao pode ser vazio.")
        }
        deficiente = deficiente.toLowerCase()
        if(deficiente == "sim" || deficiente == "s"){
            alert(`Entrada preferencial.`)
        } else{
        alert(`Entrada comum.`)
        }
    }
}