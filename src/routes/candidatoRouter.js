import { Router } from "express";

import { candidatos } from "../dados/candidatos.js";

const candidatoRouter = Router();
candidatoRouter.get('/candidatos', (req, res) => {
  
  
    res.json(candidatos);
});
candidatoRouter.get('/candidatos/:numero', (req, res) => {
    const numero = parseInt(req.params.id)
    const candidato = candidatos.find(cand => cand.numeroUrna === numero)
    if(candidato){
        res.status(200)
        res.json(candidatos)
}else{
    res.status(404).json({error: "Candidato não encontrado"})
}
});

 candidatoRouter.patch('/candidatos/:numero', (req, res) => {
    const numero = parseInt(req.params.numero)
    const candidato = candidatos.find(cand => cand.numeroUrna === numero)
    if(candidato){ 
        const { nome, numeroUrna } = req.body
        if(nome) candidato.nome = nome 
        if (numeroUrna) candidato.numeroUrna = numeroUrna
        res.status(200).json(candidato)
    } else {
        res.status(404).json({error: "Candidato não encontrado"})
    } 
})

export default candidatoRouter