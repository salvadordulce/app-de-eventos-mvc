const express = require("express");
const path = require("path");
const enableHotReload = require("./hot-reload");
const app = express();
const bodyParser = require('body-parser');

const loginController = require("./controllers/loginController")

// Configuração do body-parser
app.use(bodyParser.urlencoded({extended: true}));

// Configurando o body - parser
app.use(bodyParser.urlencoded({extended: false}))


// Configurações do seu app Express

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
console.log("Views path set to:", path.join(__dirname, "views"));

// Configuração de pasta pública

app.use(express.static(path.join(__dirname, "public")));
console.log("Static files path set to:", path.join(__dirname, "public"));

// Habilitar hot-reload

enableHotReload(app);

// Rotas
app.get("/" , loginController.exibirPaginaDeLogin);

// Inicie o servidor
const port = 3000;
app.listen(port, () => { console.log(`Servidor rodando em http://localhost:${port}`);});