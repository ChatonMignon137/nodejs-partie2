// Ce code crée une application Express simple qui utilise Mustache pour le rendu des vues et bodyParser pour lire les données POST des formulaires. La route GET pour la page d'accueil rend la vue 'mon-template' avec un objet contenant la propriété 'MyName' et la valeur "Maxime".

// Importation des modules nécessaires
const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
// Importation et configuration de Mustache pour le rendu des vues
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
// Configuration de l'application pour utiliser bodyParser (pour lire les données POST)
app.use(bodyParser.urlencoded({ extended: true }));


app.set('views', __dirname + '/views'); 
app.set('view engine', 'mustache');
app.engine('mustache', mustacheExpress()); 


// Route GET pour la page d'accueil
app.get('/', function(req, res) {
 
});

// Démarrage du serveur sur le port spécifié
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});