const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(302).redirect("/accueil");
});
router.get("/accueil", function (req, res) {
  const heureConnecte = Date().toString();
  req.getConnection((erreur, connection) => {
    if (erreur) {
      console.log(erreur);
      res.status(500).render("erreur", { erreur });
    } else {
      connection.query(
        "SELECT * FROM notes ORDER BY id desc LIMIT 10",
        [],
        (erreur, result) => {
          if (erreur) {
            console.log(erreur);
            res.status(500).render("erreur", { erreur });
          } else {
            const notes = result;
            res.status(200).render("index", { notes, heureConnecte });
          }
        }
      );
    }
  });
});

router.post("/notes", function (req, res) {
  let id = req.body.id === "" ? null : req.body.id;
  let titre = req.body.titre;
  let desc = req.body.description;

  let reqSql =
    id === null
      ? "INSERT INTO `notes` (`id`, `titre`, `description`) VALUES (?,?,?)"
      : "UPDATE `notes` SET titre=?, description=? WHERE id=?";

  let donnees = id === null ? [null, titre, desc] : [titre, desc, id];
  req.getConnection((erreur, connexion) => {
    if (erreur) {
      console.log(erreur);
      res.status(500).render("erreur", { erreur });
    } else {
      connexion.query(reqSql, donnees, (erreur, notes) => {
        if (erreur) {
          console.log(erreur);
          res.status(500).render("erreur", { erreur });
        } else {
          //res.end("Super !");
          res.status(300).redirect("/");
        }
      });
    }
  });
  //console.log(req.body);
  //res.end();
  // res.status(200).render("");
});

router.delete("/notes/:id", (req, res) => {
  let id = req.params.id;

  req.getConnection((erreur, con) => {
    if (erreur) {
      console.log(erreur);
      res.status(500).render("erreur", { erreur });
    } else {
      con.query("DELETE FROM notes WHERE id=?", [id], (erreur, data) => {
        if (erreur) {
          console.log(erreur);
          res.status(500).render("erreur", { erreur });
        } else {
          res.status(200).json({ routeRacine: "/" });
        }
      });
    }
  });
});
router.get("/a-propos", function (req, res) {
  res.status(200).render("apropos");
});

router.use((req, res) => {
  res.status(404).render("404");
});

module.exports = router;
