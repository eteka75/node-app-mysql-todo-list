const fs = require("fs");
/*
if (fs.existsSync("./NODE_FICHIERS")) {
  /*fs.rmdir("./NODE_FICHIERS", (erreur) => {
    if (erreur) {
      console.log(erreur);
    } else {
      console.log("Dossier supprimé avec succès !");
    }
  });*/
/*console.log("Le dossier existe déjà !");
} else {
  fs.mkdir("./NODE_FICHIERS", function (erreur) {
    if (erreur) {
      console.log(erreur);
    } else {
      console.log("Dossier créé avec succès !");
    }
  });
}*/

// Création d'un fichier NodeJS

/*fs.writeFile(
  "./NODE_FICHIERS/fichier1.txt",
  "Bonjoure ! \nJe développe en Node.js",
  () => {
    console.log("Fichier crée avec succès");
  }
);*/

/*fs.readFile("./NODE_FICHIERS/fichier1.txt", (erreur, donnee) => {
  if (erreur) {
    console.log(erreur);
  } else {
    console.log("DONNE : " + donnee);
  }
});
*/
// Suppression de fichier
if (fs.existsSync("./NODE_FICHIERS/fichier1.txt")) {
  fs.unlink("./NODE_FICHIERS/fichier1.txt", (erreur) => {
    if (erreur) {
      console.log(erreur);
    } else {
      console.log("Fichier supprimé avec succès !");
    }
  });
} else {
  console.log("Impossible de supprimer un fichier qui n'existe pas");
}
