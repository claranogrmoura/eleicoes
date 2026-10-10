export const substituirCandidato = (req, res, next) => {
    const { nome, numero } = req.body;
    const eleicao = new Eleicao();
    eleicao.substituirCandidato(nome, numero);
    next();
};