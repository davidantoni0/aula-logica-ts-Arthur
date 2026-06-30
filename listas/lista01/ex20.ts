const salarioBruto = Number(prompt("Digite o valor do salario"))

const inss = salarioBruto * 11 / 100
const ir = salarioBruto * 7.5 / 100
const vt = salarioBruto * 6 / 100
const liquido = salarioBruto - inss - ir - vt

alert(`Valor do INSS: ${Math.floor(inss)}, valor do IR: ${Math.floor(ir)}, valor do VT: ${Math.floor(vt)}, salário líquido: ${Math.floor(liquido)}`)