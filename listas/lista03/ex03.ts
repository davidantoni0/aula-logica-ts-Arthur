let nume = Number(prompt("Digite um número"))

let res = ""

for (let i= 0; i <= 10 ; i ++){
    res = res + nume + " x " + i + " = " + (nume * i) + "\n"
}
alert(res)