const totalConta: number = Number(prompt('Digite o valor total da conta'));
const totalPessoas: number = Number(prompt('Digite o total de pessoas pra pagar'));
const gorjeta: number = 0.1

const valorSeparado: number = (totalConta / totalPessoas)

alert(`Total para cada um pagar: R$${valorSeparado.toFixed(2)}.`)
