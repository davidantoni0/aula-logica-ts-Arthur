let listaNumeros = [4,7,2,9,10,3]
let result = 0
let resultItens = ""
for(let i = 0; i <= listaNumeros.length; i++ ){
    if (listaNumeros[i] % 2 == 0){
        resultItens = resultItens + listaNumeros[i] + " "
        result += 1
    }
}

alert (`${result} itens, (${resultItens})`)