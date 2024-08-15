function exibirPaginaDeEventos(request, response){
    response.render('eventos');
}

function exibirPaginaDeCriarEvento(request, response){
    response.render('criareventos');
}


module.exports = {
    exibirPaginaDeEventos,
    exibirPaginaDeCriarEvento
}