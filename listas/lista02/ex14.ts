const idade3: number = Number(prompt("Digite a idade"))

if(isNaN(idade3)){
    alert("valor invalido.")
    throw new Error("O valor digitado nao foi reconhecido como numero.")
}

if(idade3 >= 60){
    alert(` Idoso. idade: ${idade3}`)
}
if(idade3 <=59 && idade3 >= 18){
    alert(` Adulto. idade: ${idade3}`)
}
if(idade3 <=17 && idade3 >= 12){
    alert(` Adolescente. idade: ${idade3}`)
}
if(idade3 <=11 && idade3 >= 0){
    alert(` Criança. idade: ${idade3}`)
}