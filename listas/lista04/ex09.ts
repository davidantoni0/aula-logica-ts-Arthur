let listaMenor = [12,5,27,8,19]
let menorNumero = listaMenor[0]

for( let numero of listaMenor){
    if (menorNumero > numero){
        menorNumero = numero
    }
}

alert(menorNumero)