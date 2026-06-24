const primeiroNúmero: number | null = Number(prompt(`digite um número: `));
const segundoNúmero: number | null = Number(prompt(`digite outro número: `));

if(primeiroNúmero === null || segundoNúmero === null || primeiroNúmero === undefined || segundoNúmero === undefined ){
    alert(` Um ou ambos os números são inválidos. `)
}
if (primeiroNúmero === segundoNúmero){
    alert(` Os dois numeros possuem o mesmo valor. `)
}
if (primeiroNúmero > segundoNúmero){
    alert(` O numero ${primeiroNúmero} é sucessor do número ${segundoNúmero}`)
} else if(primeiroNúmero < segundoNúmero){
    alert(` O numero ${primeiroNúmero} é antecessor do número ${segundoNúmero}`)
}