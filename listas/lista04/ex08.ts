let listaMaior = [12,5,27,8,19]
let maiorNumero = listaMaior[0]

for( let numero of listaMaior){
    if (maiorNumero < numero){
        maiorNumero = numero
    }
}

alert(maiorNumero)