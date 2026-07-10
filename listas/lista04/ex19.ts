let alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Bruno", nota: 5 },
    { nome: "Caio", nota: 9 },
    { nome: "Duda", nota: 4 }
]
let aprovados = alunos.filter(a => a.nota >= 6)
let noms = aprovados.map(a => a.nome)
alert(`Aprovados: ${noms}`)