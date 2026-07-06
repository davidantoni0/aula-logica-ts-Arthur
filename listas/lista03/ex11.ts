let primNum = Number(prompt("De:"))
let segunNum = Number(prompt("Até:"))
let mensg = ""
for (let i = primNum; i <= segunNum; i++) {
  if (i % 2 === 0) {
    mensg = mensg + i + " "
  }
}
alert("Pares: " + mensg)