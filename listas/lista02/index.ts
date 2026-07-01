const TOTAL_EXERCICIOSL2 = 20;

const listaL2 = document.getElementById("lista");

if (!listaL2) {
  throw new Error('Elemento com id "lista" não encontrado.');
}

for (let i = 1; i <= TOTAL_EXERCICIOSL2; i++) {
  const numero = i.toString().padStart(2, "0");

  const link = document.createElement("a");
  link.className = "botao";
  link.href = `exercicio.html?ex=${numero}`;
  link.textContent = `Exercício ${numero}`;

  listaL2.appendChild(link);
}