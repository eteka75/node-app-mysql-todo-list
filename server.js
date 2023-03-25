const http = require("http");
const fs = require("fs");
const uuid = require("uuid");

const serveur = http.createServer((req, res) => {
  console.log(uuid.v4());
  let fichier = "";
  res.write('<head><meta charset="utf-8"/></head>');
  if (req.url === "/") {
    fichier = "./NODE_FICHIERS/html/accueil.html";
  } else if (req.url === "/profil") {
    fichier = "./NODE_FICHIERS/html/profil.html";
  } else {
    fichier = "./NODE_FICHIERS/html/erreur.html";
  }
  //lecture du fichier HTML et envoie de la réponse
  if (fs.existsSync(fichier)) {
    const html = "";
    fs.readFile(fichier, (erreur, data) => {
      if (erreur) {
        console.log(erreur);
        res.end("Erreur");
      } else {
        res.write(data);
        res.end();
      }
    });
  }
  //console.log(req);
});

serveur.listen(3001, "localhost", () => {
  console.log("Prêt à effectuer des requêtes aux port 3001");
});
