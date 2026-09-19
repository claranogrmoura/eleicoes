export function exigirLogin(req, resp,next){
    if(!req.session.login){ // ! = negar/ não está, está vazio
         resp.status(401).json({ error: "Acesso não autorizado" });
            return
    }
    next()
}