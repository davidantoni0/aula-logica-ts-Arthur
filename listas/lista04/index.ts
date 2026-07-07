const TOTAL_EXERCICIOSL4 = 20;

const listaL4 = document.getElementById("lista");

if (!listaL4) {
  throw new Error('Elemento com id "lista" não encontrado.');
}

for (let i = 1; i <= TOTAL_EXERCICIOSL4; i++) {
  const numero = i.toString().padStart(2, "0");

  const link = document.createElement("a");
  link.className = "botao";
  link.href = `exercicio.html?ex=${numero}`;
  link.textContent = `Exercício ${numero}`;

  listaL4.appendChild(link);
}