const TOTAL_EXERCICIOSL5 = 20;

const listaL5 = document.getElementById("lista");

if (!listaL5) {
  throw new Error('Elemento com id "lista" não encontrado.');
}

for (let i = 1; i <= TOTAL_EXERCICIOSL5; i++) {
  const numero = i.toString().padStart(2, "0");

  const link = document.createElement("a");
  link.className = "botao";
  link.href = `exercicio.html?ex=${numero}`;
  link.textContent = `Exercício ${numero}`;

  listaL5.appendChild(link);
}