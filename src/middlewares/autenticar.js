function protegerRotaUsuario(request, response, next) {
    if (request.session.usuario) {
        next();
    } else {
        response.redirect("/");
    }
}

function protegerRotaAdministrador(request, response, next) {
    if (request.session.usuario && request.session.usuario.cargo == "admin") {
        next();
    } else {
        response.redirect("/");
    }
}

module.exports = {
    protegerRotaUsuario,
    protegerRotaAdministrador
}
