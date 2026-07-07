let listaValores = [50,120,30,200,90]
let valoresCaros = ""

for( let numero of listaValores){
    if (numero > 100){
        valoresCaros = valoresCaros + numero + " "
    }
}

alert(valoresCaros)