let listaVotos = ["sim", "não", "sim", "sim", "não"]
let qtdVotos = 0;
for (let i = 0; i < listaVotos.length; i++) {
    if (listaVotos[i] === "sim") {
        qtdVotos = qtdVotos + 1
    }
}
alert(`${qtdVotos} votos "sim".`)