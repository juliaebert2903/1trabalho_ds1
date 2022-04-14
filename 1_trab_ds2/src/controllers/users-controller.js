const users = [];


class UsersController {
    async cadastrar(req, res) {
        console.log('UsersController/cadastro');

        const user = req.body;
        users.push(user);  

        console.log({ users });
        res.redirect('/personagem');
    }

    async login(req, res) {
       
        const { email, senha } = req.body;
        const usuarioEcontrado = users.find(u => u.email == email);

        if (!usuarioEcontrado) return res.send('User nao encontrado');

        
        if (usuarioEcontrado.senha == senha) {
            req.session.user = usuarioEcontrado;
            return res.send('Usuario e senha confirmados, vc fez o login');
        } else {
            return res.send('Senha nao confere...');
        }
        
    }
    async perfil(req, res){
        console.log("Estou aqui..")
        const { email } = req.params;
        console.log(email);
        const usuarioFiltrado = users.filter(f => f.email == email);
        console.log(usuarioFiltrado);
        if (usuarioFiltrado.length > 0) {
            return res.render('perfil', { users: usuarioFiltrado[0] });
        } else {
            return res.send('PERFIL NAO ENCONTRADO');
        }
    }
}

module.exports = UsersController;
