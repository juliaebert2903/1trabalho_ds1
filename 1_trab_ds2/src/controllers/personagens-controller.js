let personagens = [];


const { nanoid } = require('nanoid');

class PersoController {

    async mostraCadastro(req, res) {
        return res.render('cadastrar');
    }

    async listar(req, res) {
        console.log('PAGINA INICIAL');
        console.log({ session: req.session });
        console.log({ personagens })
        return res.render('listagem', { user: req.session.user, personagens: personagens });
    }
    async deletar(req, res) {
        const { id } = req.params;
        const persoIdx = personagens.findIndex(f => f.id == id);
        personagens.splice(persoIdx, 1);

        return res.redirect('/personagem')
    }

    async detalhar(req, res) {
        const { id } = req.params;

        const persoFiltrado = personagens.filter(f => f.id == id);
        if (persoFiltrado.length > 0) {
            
            return res.render('detalhar', { personagens: persoFiltrado[0] });
        } else {
            return res.send('PERSONAGEM NAO ENCONTRADO');
        }

        
    }

    async cadastrar(req, res) {
        
        console.log(`Cadastrando um personagem`);
        console.log({ body: req.body });
        personagens.push({
            id: nanoid(8),
            ...req.body
        });
        console.log(personagens)
        return res.redirect('/personagem');
        
    }
}

module.exports = { PersoController }


