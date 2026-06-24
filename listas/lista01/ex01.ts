// Lista 01 — Exercício 01
// Enunciado: leia dois números informados pelo usuário e mostre a soma deles.

// 1. Entrada: prompt devolve texto (string), por isso usamos Number(...).
const primeiro: number = Number(prompt("Digite o primeiro número:") ?? "0");
const segundo: number = Number(prompt("Digite o segundo número:") ?? "0");

// 2. Processamento: o cálculo.
const soma: number = primeiro + segundo;

// 3. Saída: mostra o resultado.
alert(`${primeiro} + ${segundo} = ${soma}`);
