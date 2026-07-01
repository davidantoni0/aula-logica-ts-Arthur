let valorAPagar: number = Number(prompt("digite o valor da compra"))
const valorDesconto: number = 0.1
if(valorAPagar > 100){
    valorAPagar = valorAPagar - valorAPagar * valorDesconto
    alert(`O valor a pagar será de R$${valorAPagar}`)
} else{
    alert(`O valor a pagar será de R$${valorAPagar}`)
}