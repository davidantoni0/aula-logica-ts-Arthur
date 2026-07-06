let numeroF = Number(prompt("Fatorial de:"))
let fat = 1
for (let i = 1; i <= numeroF; i++) {
  fat = fat * i
}
alert(numeroF + "! = " + fat)