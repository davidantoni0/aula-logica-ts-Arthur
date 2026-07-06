const nu = Number(prompt("Até:"))
let msg = ""
for (let i = 1; i <= nu; i++) {
  if (i % 2 === 0) {
    msg = msg + i + " "
  }
}
alert("Pares: " + msg)