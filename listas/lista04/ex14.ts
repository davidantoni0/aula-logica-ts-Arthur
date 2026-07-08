let listaPessoas = ["Ana", "Bruno", "Caio"]
alert(listaPessoas)
for(let i = 0; i < listaPessoas.length ; i++ ){
    listaPessoas[i] = listaPessoas[i].toLowerCase()
}
alert(listaPessoas)
let pessoaEncontrada = prompt("qual o nome da pessoa?")
if (pessoaEncontrada === null){
    alert("Valor inválido.")
    throw new Error("Valor Inválido.")
}
pessoaEncontrada = pessoaEncontrada.toLowerCase()
let posPessoa = listaPessoas.indexOf(pessoaEncontrada)
if(posPessoa === -1){
    alert("pessoa não encontrada.")
} else{
    alert(`Pessoa encontrada na posição ${posPessoa + 1}`)
}