const valor01: number = Number(prompt('Digite o primeiro valor:'));
const valor02: number = Number(prompt('Digite o segundo valor:'));

const adicao: number = valor01 + valor02;
const subtracao: number = valor01 - valor02;
const multiplicacao: number = valor01 * valor02;
const divisao: number = valor01 / valor02;
const resto: number = valor01 % valor02;

alert(`${valor01} + ${valor02} = ${adicao}\n
    ${valor01} - ${valor02} = ${subtracao}\n
    ${valor01} x ${valor02} = ${multiplicacao}\n
    ${valor01} ÷ ${valor02} = ${divisao}, resto = ${resto}\n
    `);
