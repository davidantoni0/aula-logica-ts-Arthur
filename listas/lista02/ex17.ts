const nomeAdmin: string = "Arthur"
const login: string | null = prompt("Login")
if(login === null || login.trim() === ""){
    alert("valor invalido.")
    throw new Error(`O canpo 'Login' nao pode ser vazio.`)
}

const senha: string | null = prompt("Senha")

if(senha === null || senha.trim() === ""){
    alert("valor invalido.")
        throw new Error(`O canpo 'Senha' nao pode ser vazio.`)
    }
if (login === "admin" && senha === "1234") {
    alert(`seja bem vindo, ${nomeAdmin}`)
} else{
    alert("Login e/ou senha incorretos")
}
    