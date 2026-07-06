let qtdes = Number(prompt("Quantos números?"))
let maior = 0
for (let i = 1; i <= qtdes; i++) {
  let x = Number(prompt("Número " + i + ":"))
  if (i === 1 || x > maior) {
    maior = x
  }
}
alert("O maior é " + maior)