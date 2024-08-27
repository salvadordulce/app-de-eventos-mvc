const md5 = require('md5');

const usuarios = [];

function adicionarUsuario(nome, email, senha) {
    usuarios.push({
        Id: Date.now(),
        Nome: nome,
        Email: email,
        Senha: md5(senha),
        criadoEm: new Date()
    });

    console.log(usuarios);
}

module.exports = {
    adicionarUsuario
}