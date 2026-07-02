let a = Number(prompt("Digite o valor do lado a"))
let b = Number(prompt("Digite o valor do lado b"))
let c = Number(prompt("Digite o valor do lado c"))

if(isNaN(a) || isNaN(b) || isNaN(c)){
    alert("valor invalido.")
    throw new Error("Um dos valores digitados nao foram reconhecidos como numero.")
}
if (a < b + c && b < a + c && c < a + b) {
  if (a === b && b === c) {
    alert("Equilátero")
  } else if (a === b || b === c || a === c) {
    alert("Isósceles")
  } else {
    alert("Escaleno")
  }
} else {
  alert("Não formam triângulo")
}