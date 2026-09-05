# Eleições
Simulação de urna eleição | Curso Node/Backend
pesquisar ejs
 O sinal <% sem = significa que o código será executado, mas não será exibido no servidor
 o sinal <%= significa que o valor da expressão será avaliado e exibido no HTML
 Roteamento
 renderização de html


<!---- import { Router } from "express";

import { votos } from "../dados/votos.js";

const votosRouter = Router();
votosRouter.get('/votos', (req, res) => {
  
  
    res.json(votos);
});
votosRouter.get('/votos/:numero', (req, res) => {
    const numero = parseInt(req.params.id)
    const candidato = votos.find(voto => voto.numeroUrna === numero)
    if(votos){
        res.status(200)
        res.json(votos)
}else{
    res.status(404).json({error: "Candidato não encontrado"})
}
})


export default votosRouter ---!> 

<!---- const votos = [
    {
        id: 1,
        candidatoId: 1,
        votos: 1000
    },

    {
        id: 2,
        candidatoId: 2,
        votos: 500

    },
    {
        id: 3,
        candidatoId: 3,
        votos: 200
    }

]

export { votos }  --------->
