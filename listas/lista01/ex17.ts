const total: number = Number(prompt("Digite o preço total em R$"))
const valorPago: number = Number(prompt("digite o valor pago"))

const troco = valorPago - total
const notasDivididas = Math.floor(troco/10)
const valorSobra = troco % 10

alert(`O valor a ser retornado será de RS${troco.toFixed(2)}, ${notasDivididas} notas de 10 + ${valorSobra.toFixed(2)}`)