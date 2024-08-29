const md5 = require('md5');

// Importando conexão do banco de dados
const pool = require('../config/banco-de-dados')

const usuarios = [];

function adicionarUsuario(nome, email, senha) {
    // usuarios.push({
    //   Id: Date.now(),
    //   Nome: nome,
    //   Email: email,
    //   Senha: md5(senha),
    //   criadoEm: new Date()
    //});
    // console.log(usuarios);
    console.log('ENTRO NO MODEL');

    // Cripitografando as enha do usuário
    const senhaCripitografada = md5(senha);

    //Adiciona um novo usuário no banco de dados
    pool.query(`INSERT INTO usuarios (nome, email, senha, criadoEm) VALUES ('${nome}','${email}','${senhaCripitografada}', NOW())`
    ).then(() => {
        console.log('DEU CERTO');
    }).catch(error => console.log('erro aqui', error))
}

module.exports = {
    adicionarUsuario
}