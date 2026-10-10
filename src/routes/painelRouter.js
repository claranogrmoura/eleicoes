import { Router } from "express";
import { Eleicao } from "../dominio/Eleicao";
import { exigirLogin } from "../middlewares/exigirLogin.js";
import { atualizarCandidatos } from "../middlewares/atualizarCandidatos.js";
import { deletarCandidato } from "../middlewares/deletarCandidato.js";
import { substituirCandidato } from "../middlewares/substituirCandidato.js";
const painelRouter = Router()
painelRouter.get('/', exigirLogin, (req, res) => {
    const eleicao = new Eleicao()
    res.render('painel', {
    
        titulo: "Painel de Controle",
        usuario: req.session.usuarioLogado,
        relatorio: eleicao.apurarVotos()
    })

})

painelRouter.post( '/cad-candidato', exigirLogin, (req, res) => {
    const nome = {nome, numeroUrna} = req.body 
    const eleicao = new Eleicao()
    
    //faça
    try{
    eleicao.cadastrar(nome, numeroUrna)

    //não conseguiu fazer
    }catch (e){
    console.error(e)
    }
    res.redirect('/painel')
})
painelRouter.patch(atualizarCandidatos, (req, res) => {
    const { nome, numero } = req.body
    const eleicao = new Eleicao()
    eleicao.atualizarCandidatos(nome, numero)
    res.redirect('/painel')
})

painelRouter.delete(deletarCandidato, (req, res) => {
    const { nome, numero } = req.body
    const eleicao = new Eleicao()
    eleicao.deletarCandidato(nome, numero)
    res.redirect('/painel')
})

painelRouter.put(substituirCandidato, (req, res) => {
    const { nome, numero } = req.body
    const eleicao = new Eleicao()
    eleicao.substituirCandidato(nome, numero)
    res.redirect('/painel')
})

painelRouter





export default painelRouter


// verificar depois se está rodando a parte patch, delete e put, se não estiver rodando, colocar o next() no middleware e colocar o res.redirect('/painel') no painelRouter
//render = pasta views
//post = enviar dados
// get = receber dados
//req.body = corpo da requisição 

//exportação nomeada, exportar mais de um arquivo 
//export default = tudo que está naquele documento especifico 