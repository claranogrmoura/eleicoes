export class Usuario {
    constructor(login, senha) {   
    this.login = login
    this.senha = senha
    }

    autenticar(SenhaDigitada){
    return this.senha === SenhaDigitada
    }
}