let valorSaque: number = Number(prompt("Digite o valor para saque"))

const notas100 = Math.floor(valorSaque / 100)
valorSaque = valorSaque % 100
const notas50 = Math.floor(valorSaque / 50)
valorSaque = valorSaque % 50
const notas20 = Math.floor(valorSaque / 20)
valorSaque = valorSaque % 20
const notas10 = Math.floor(valorSaque / 10)

alert(`${notas100} notas de 100, ${notas50} notas de 50, ${notas20} notas de 20 e ${notas10} notas de 10`)