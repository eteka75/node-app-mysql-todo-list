## TP Node.js + Express + MySQL
Cette application est réalisée à titre d'exercice afin de realiser une révision sur l'usage des notions de
NODE.js pour communiquer avec une base de donées MySQL en utilisation Express.
Il s'agit d'un CRUD portant sur des Tâches, suivi de leur description dans une table nommée "notes".

> **CRUD** désigne les quatre (04) opérations de base pour **la persistance** des données, en particulier le **stockage** d'informations en base de données. 

Soit : 
- **C**reate : créer 
- **R**ead : lire 
- **U**pdate : mettre à jour 
- **D**elete : supprimer.
### Module Node

Modules production:
- ejs
- express
- express-myconnection
- morgan
- mysql 
- uuid

Modules dev :
- jest
- nodemon
- prettier

### Structure de la table
Stutre de la base de données :
`notes.sql`
```bash
    notes  : table
        - id : integer (10, unsigned, Auto incrémente)
        - titre : varchar(250)
        - description : text(null) 
```
### Paramètres DB

Les paramètres de ma basse de données sont dans le fichier config.js :
`config.js`
```bash
    host: "localhost",
    user: "root",
    password: "@Votre_Mot_dePass",
    port: 3306,
    database: "node_db",
```
### Paramètre de port d'écoute pour Node
`app.js`
Le port utilisé est "3001". L'application est donc accessible au lancement sur le lien : [http://localhost:3001](http://localhost:3001).
Vous pouvez modifier le post et l'adapter à vos besoins (3000 par exemple).

### Lancer en mode dévelopment

Pour démarrer l'application, il faut lancer la commande suivante :

```bash
    node app.js
```
ou en hot reload (charement à chaud) en utilisant la commande : 
```bash
    nodemon app.js 
```
### LICENSE

MIT

![Page accueil](https://github.com/eteka75/node-app-mysql-todo-list/blob/main/public/TodoApp1.png?raw=true)

![Page A propos](https://github.com/eteka75/node-app-mysql-todo-list/blob/main/public/TodoApp2.png?raw=true)
