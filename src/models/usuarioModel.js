const usuarios = [];

function adicionarUsuario(nome, email, senha) {
    usuarios.push({
        Id: Date.now(),
        Nome: nome,
        Email: email,
        Senha: senha,
        criadoEm: new Date()
    })

    console.log(usuarios);
}

module.exports = {
    adicionarUsuario
}