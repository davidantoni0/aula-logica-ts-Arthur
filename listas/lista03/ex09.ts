let qtde = Number(prompt("Quantas notas?"));
let somas = 0
for (let i = 1; i <= qtde; i++) {
  let nota = Number(prompt("Nota " + i + ":"))
  somas = somas + nota
}
let medias = somas / qtde
alert("Média = " + medias.toFixed(1))