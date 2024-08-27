const eventos = [];

function adicionarEvento(nome, data, local) {
    usuarios.push({
        Id: Date.now(),
        Nome: nome,
        Data: data,
        local: local,
        criadoEm: new Date()
    });

    console.log(eventos);
}

module.exports = {
    adicionarEvento
}