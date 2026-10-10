export const deletarCandidato = (req, res, next) => {
    const { nome, numero } = req.body;
    const eleicao = new Eleicao();
    eleicao.deletarCandidato(nome, numero);
    next();
}