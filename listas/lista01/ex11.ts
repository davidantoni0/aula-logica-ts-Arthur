const notaAluno01: number = Number(prompt('Digite o valor da primeira nota'));
const notaAluno02: number = Number(prompt('Digite o valor da segunda nota'));
const notaAluno03: number = Number(prompt('Digite o valor da terceira nota'));
const notaAluno04: number = Number(prompt('Digite o valor da quarta nota'));

const mediaNota: number = (notaAluno01 + notaAluno02 + notaAluno03 + notaAluno04) / 4;

alert(`A média final é de ${mediaNota} pontos.`)