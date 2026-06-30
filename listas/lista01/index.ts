const TOTAL_EXERCICIOS = 20;

const lista = document.getElementById("lista");

if (!lista) {
  throw new Error('Elemento com id "lista" não encontrado.');
}

for (let i = 1; i <= TOTAL_EXERCICIOS; i++) {
  const numero = i.toString().padStart(2, "0");

  const link = document.createElement("a");
  link.className = "botao";
  link.href = `exercicio.html?ex=${numero}`;
  link.textContent = `Exercício ${numero}`;

  lista.appendChild(link);
}