const valorSegundos: number = Number(prompt('Digite o valor em segundos'));

const valorMinutos: number = Math.floor(valorSegundos / 60)
const restoSegundos: number = valorMinutos % 60

alert(`${valorMinutos} minutos, ${restoSegundos} segundos.`)
