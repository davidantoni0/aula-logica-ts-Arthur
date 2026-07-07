let notas = [8,6,10,7,9]
let somad = 0

for(let i = 0; i < notas.length; i++ ){
    somad = somad + notas[i]
}
let resulta = somad / notas.length

alert(resulta.toFixed(1))