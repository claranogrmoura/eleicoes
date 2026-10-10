export const atualizarCandidatos = (req, res, next) => {
    const { nome, numero } = req.body;
    const eleicao = new Eleicao();
    eleicao.atualizarCandidatos(nome, numero);
    next();
};