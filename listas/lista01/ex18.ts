const tempoEmSegundos: number = Number(prompt("Digite o tempo em segundos"))

const horas = Math.floor(tempoEmSegundos / 3600)
const sobraDasHoras = tempoEmSegundos % 3600
const minutos = Math.floor(sobraDasHoras / 60)
const segundos = sobraDasHoras % 60

alert(`${tempoEmSegundos}equivalem à ${horas} horas, ${minutos} minutos e ${segundos} segundos`)