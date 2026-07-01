const TOTAL_EXERCICIOSL3 = 20;

const listaL3 = document.getElementById("lista");

if (!listaL3) {
  throw new Error('Elemento com id "lista" não encontrado.');
}

for (let i = 1; i <= TOTAL_EXERCICIOSL3; i++) {
  const numero = i.toString().padStart(2, "0");

  const link = document.createElement("a");
  link.className = "botao";
  link.href = `exercicio.html?ex=${numero}`;
  link.textContent = `Exercício ${numero}`;

  listaL3.appendChild(link);
}