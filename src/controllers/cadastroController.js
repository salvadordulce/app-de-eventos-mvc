const usuarioModel = require('../models/usuarioModel');

function exibirPaginaDeCadastro(request, response) {
    response.render('cadastro');
}

function adicionarUsuario(request, response) {
    console.log(request.body);

    const { nome, email, senha } = request.body;

    //Adicionar usuário
    usuarioModel.adicionarUsuario(nome, email, senha);

    //Redirecionar para a página de login
    // response.redirect('/');
}

module.exports = {
    exibirPaginaDeCadastro,
    adicionarUsuario
}