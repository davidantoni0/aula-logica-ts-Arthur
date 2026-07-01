const num = Number(prompt("Digite um número"))

let contador = ""

for (let i= num; i >= 0 ; i--){
    contador = contador + i + " "
}
alert(contador)