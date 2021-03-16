// lancer le serveur : nodemon start
// + lancer MySQL en local

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const session = require('express-session')
const message_flash = require('./middlewares/flash')
const { response } = require('express')

// Définition de ejs comme moteur de template
app.set('view engine', 'ejs')


// -- MIDDLEWARE --
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())
    // Configuration de l'utilisation de session
app.use(session({
        secret: 'clefsecrete',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }
    }))
    // Flash des messages
app.use(message_flash)
    // Import du CSS
app.use(express.static(__dirname + '/public'))

// -- ROUTES --

// ACCUEIL
app.get('/', (request, response) => {

    const Projet = require('./models/projet')

    // La fonction interne est un callback
    Projet.getAll(function(projets) {
        response.render('index', { projets: projets })
    })

    //console.log(request.session)

    //response.render('index')

})

// CONCEPTION DEVIS PROJET
app.get('/conception_devis_projet', (request, response) => {

    const Gamme = require('./models/gamme')

    Gamme.getAll(function(gammes) {
        //console.log(gammes)
        response.render('conception_devis_projet', { gammes: gammes })
    })

})

// CONCEPTION DEVIS PRODUIT
app.get('/conception_devis_produit', (request, response) => {

    // Récupération des modules par rapport à la gamme sélectionnée
    const Gamme = require('./models/gamme')

    Gamme.getModulesFromGamme(request.session.gamme_id, function(modules) {

        // Message flash pour prévenir du bon déroulement
        request.flash('success', 'Projet initié')

        Gamme.getModulesDetailsFromGamme(request.session.gamme_id, function(modulesDetails) {

            response.render('conception_devis_produit', { modules: modules, modulesDetail: modulesDetails, projet_reference: request.session.projet_reference })

        })
    })
})

// ACCUEIL
app.post('/', (request, response) => {

})

// POST de CONCEPTION DEVIS PROJET vers CONCEPTION DEVIS PRODUIT
app.post('/conception_devis_projet', (request, response) => {

    // gestion si erreur ou si vide
    if (request.body.projet_name === undefined || request.body.projet_name === '') {

        // Gestion ERROR PROJET NAME
        request.flash('error', 'Nom du projet invalide')
            //La redirection est dans chaque parties du if sinon problème 
            // d'asynchrone et la redirection est faite avant les messages
            // flash donc nous n'avons pas de retour
        response.redirect('/conception_devis_projet')

    } else if (request.body.gamme === '') {

        // Gestion ERROR GAMME
        request.flash('error', 'Gamme non sélectionnée')
        response.redirect('/conception_devis_projet')

    } else if (request.body.client_name === undefined || request.body.client_name === '') {

        // Gestion ERROR CLIENT NAME
        request.flash('error', 'Nom du client invalide')
        response.redirect('/conception_devis_projet')

    } else {

        const Projet = require('./models/projet')
            // Function asynchrone
            /**
             * Params :
             *    projet_name
             *    gamme_id
             *    client_name
             * 
             *    function callback
             */
        Projet.create(request.body.projet_name, request.body.gamme, request.body.client_name, function() {

            request.flash('success', 'Projet initié')

            // On passe l'id de la gamme en SESSION pour la récupérer dans le get
            request.session.gamme_id = request.body.gamme

            Projet.getLastId(function(projet_reference) {

                request.session.projet_reference = projet_reference

                response.redirect('/conception_devis_produit')
            })
        })

    }
})

// POST de CONCEPTION DEVIS PRODUIT, envois des données en BDD et retour sur ACCUEIL
app.post('/conception_devis_produit', (request, response) => {

    console.dir(request.body)

    let projet_reference = request.body.projet_reference

    var produits = {}
    let index = 0
    for (var key in request.body) {
        //console.log(" key : " + key + "et sa valeur : " + request.body[key])

        if (index >= 3) {
            produits[key] = request.body[key]
        }

        index++
    }

    for (var key in produits) {
        console.log(key, produits[key])
    }

    //response.redirect('/')
})

app.listen(3000)