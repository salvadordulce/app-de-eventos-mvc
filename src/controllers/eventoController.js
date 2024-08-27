const eventoModel = require('../models/eventomodel');

function exibirPaginaDeEventos(request, response){
    response.render('eventos');
}

function exibirPaginaDeCriarEvento(request, response){
    response.render('criareventos');
}
function adicionarEvento(request, response) {
    console.log(request.body);

    const { nome, data, local } = request.body;

    //Adicionar evento
    eventoModel.adicionarEvento(nome, data, local);

    //Redirecionar para a página de listagem dos eventos
    response.redirect('eventos');
}
module.exports = {
    exibirPaginaDeEventos,
    exibirPaginaDeCriarEvento,
    adicionarEvento
}