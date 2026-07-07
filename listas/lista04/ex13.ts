let listaConvidados = ["Ana", "Bruno", "Caio"]
let nomeProcurado: string | null = prompt("Quem você procura?")

if (nomeProcurado === null){
    alert("Valor inválido.")
    throw new Error("Valor Inválido.")
}
if (listaConvidados.includes(nomeProcurado)) {
  alert(nomeProcurado + " está na lista ✅")
} else {
  alert(nomeProcurado + " não está 🚫")
}