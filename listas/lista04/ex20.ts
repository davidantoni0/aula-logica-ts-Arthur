let listaAlunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Bruno", nota: 5 },
    { nome: "Caio", nota: 9 },
    { nome: "Duda", nota: 7 }
]
let melhor = listaAlunos[0]
for (let i = 1; i < listaAlunos.length; i++) {
    if (listaAlunos[i].nota > melhor.nota) {
        melhor = listaAlunos[i]
    }
}
alert(`${melhor.nome}, ${melhor.nota}.`)