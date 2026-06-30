const numeroReal: number = Number(prompt('Digite o valor em reais para transação'))

const numeroEmDolar: number = numeroReal /  4.95

alert(`R$${numeroReal} é igual à ${numeroEmDolar.toFixed(2)} dólares.`)