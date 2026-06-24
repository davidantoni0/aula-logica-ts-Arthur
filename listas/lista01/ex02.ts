const nome: string | null = prompt("Digite o seu nome:");
const sobrenome: string | null = prompt("Digite o seu sobrenome:");
if(nome === null || nome.trim() === ""){
    alert('Digita um nome ae zé.')
}
else if (sobrenome === null || sobrenome.trim() === ""){
    alert('Digita um nome ae zé.')
} else{
    alert(`Olá, ${nome} ${sobrenome}.`)
}