function saudacao(nome: string){
    if(nome === null || nome.trim() === ""){
        alert("valor invalido.")
        throw new Error(`O canpo 'Login' nao pode ser vazio.`)
    }
 alert(`Olá, ${nome}! Bem-vindo(a).`)
}

saudacao(prompt("Escreva o seu nome")?? "")