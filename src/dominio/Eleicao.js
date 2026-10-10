import { candidatos } from "../dados/candidatos.js";
import { Candidato } from "./Candidato.js";

export class Eleicao {
    constructor(){
        this.candidatos = [];
        this.votos = [];    
    }
    //metodo para adicionar candidato

    cadastrar(nome,numero){
        let numeroUrnaNovo = Number(numero)
        const candidatoExistente = this.candidatos.find(candidato => candidato.numero === numeroUrnaNovo    ) 
    if(candidatoExistente){
    throw new Error("Candidato já existe")
    }
    const id = this.candidatos.length + 1
    const candidato = new Candidato(id,nome,numeroUrnaNovo)
    this.candidatos.push(candidato)

    atualizarCandidatos
    

}
  
ListarCandidatos (){ //metodo listar candidatos
    return this.candidatos
}
votar(numeroUrnaNovo){
    this.votos.push({ numeroUrnaNovo })
}
 apurarVotos(){
return this.candidatos.map((candidato) => { /// lista de candidatos, map para percorrer a lista de candidatos, para cada candidato, contar quantos votos ele recebeu
    const recebidos = this.votos.filter((voto) => voto.numeroUrnaNovo=== candidato.numeroUrna)
   console .log(`Candidato ${candidato.nome} recebeu ${recebidos.length} votos.`)
    return{
        id: candidato.id,
        nome: candidato.nome,
        numeroUrna: candidato.numeroUrna,
        votos: recebidos.length
    }

    
})

}
}








/* Variaveis dentro de uma classe são atributos
função fora de classe é função
Ex: 
function somar(a,b){
    return a + b
}
função dentro de classe é método
Ex: 
class Eleicao { 
    constructor(){
        this.candidatos = [];
        this.votos = [];    
    }
}   
    cadastrar(nome,numero){
        const id = this.candidatos.length + 1
        const candidato = new Candidato(id,nome,numero)
        this.candidatos.push(candidato)
    }

    */