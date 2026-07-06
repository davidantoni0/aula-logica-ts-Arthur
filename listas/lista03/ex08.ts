const qtd = Number(prompt("Quantos números?"))
let somar = 0
for (let i = 1; i <= qtd; i++) {
  let x = Number(prompt("Número " + i + ":"))
  somar = somar + x
}
alert("Soma total = " + somar)