import { Router } from "express";
import { Eleicao } from "../dominio/Eleicao";
import { exigirLogin } from "../middlewares/exigirLogin.js";

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

export default painelRouter

//render = pasta views
//post = enviar dados
// get = receber dados
//req.body = corpo da requisição 

//exportação nomeada, exportar mais de um arquivo 
//export default = tudo que está naquele documento especifico 