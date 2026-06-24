const baseTerreno: number = Number(prompt('Digite o valor em metros da base do terreno'))
const larguraTerreno: number = Number(prompt('Digite o valor em metros da largura do terreno'))
const valorMetroTerreno: number = Number(prompt('Digite o valor em metros da altura do retângulo'))
const areaTerreno: number = baseTerreno * larguraTerreno
alert(`a área do terreno é de ${areaTerreno}m², o valor total do terreno é de R$${areaTerreno * valorMetroTerreno}.`)