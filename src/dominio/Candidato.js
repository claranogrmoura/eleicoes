export class Candidato {
    constructor(id, nome, numeroUrna) {
       if(nome.length < 3) {
        throw new Error ("O nome de um candidato deve conter pelo menos 3 caracteres")
       }
       this.id = id
       this.nome = nome
       this.numeroUrna = numeroUrna
    }
}

//this =esta classe/contexto
//length - tamanho
// Exceção de erro - throw new Error
/*
variaveis fora de classe - let, const, var
Ex:
const nome = "Rick Sanchez"
let idade = 70

Variáveis dentro de classe são atributos da classe - 
Ex: 
this.nome = "rick Sanchez"
this.idade = 70
*/