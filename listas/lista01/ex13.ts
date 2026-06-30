const salarioAtual: number = Number(prompt('Digite o valor do salário'));
const valorReajuste: number = Number(prompt('Digite o valor da porcentagem para reajuste'));

alert(`O novo salário de R$${salarioAtual} recebendo um reajuste de %${valorReajuste} terá o total de R$${salarioAtual + salarioAtual * valorReajuste / 100}`)