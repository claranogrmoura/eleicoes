import {Eleicao} from '../src/dominio/Eleicao.js'
const eleicao = new Eleicao()
eleicao.cadastrar('Clara', 456)
eleicao.cadastrar('Joao', 123)
eleicao.cadastrar('Maria', 789)

console.log(eleicao.ListarCandidatos())
eleicao.votar(456)
eleicao.votar(123)
eleicao.votar(456)
eleicao.votar(789)
eleicao.votar(456)

console.log(eleicao.apurarVotos())