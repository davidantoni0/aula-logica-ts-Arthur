const valorPeso: number = Number(prompt('Digite o peso em Kg'));
const vallorAltura: number = Number(prompt('Digite a altura'));

const imc: number = valorPeso / (vallorAltura * vallorAltura)

alert(`IMC = ${imc.toFixed(2)}.`)
