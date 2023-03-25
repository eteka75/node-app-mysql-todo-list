const express = require("express");
const app = express();
const mysql = require("mysql");
const myConnexion = require("express-myconnection");
const morgan = require("morgan");
const optionDb = require("./config");
const system = require("os");

const router = require("./routes/todoRoutes");

//Middleware de connection à la base de données
app.use(myConnexion(mysql, optionDb, "pool"));

//Ajout du moteur de template
app.set("view engine", "ejs");
app.set("views", "views"); //affectation dossier des vues
//Info Système
console.log(system.userInfo(), system.version());
app.use("/", express.static(__dirname + "/public")); //rendre static le dossier des ressources
//Les Middlewares
app.use(express.urlencoded({ extended: false })); //gestion de l'encodage des données du formulaire
app.use(morgan("dev")); //morgan pour évaluer le temps des requêtes
//Importation des routes
app.use(router);
//Lancement de l'application
app.listen(3001, () => {
  console.log("En attente des requêtes sur le port 3001");
});
console.log("Erreur de création de serveur1");
