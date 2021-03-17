const db = require('../data/data_config')
const moment = require('../config/moment')

class Projet {

    // Constructor
    constructor (row) {
        this.row = row
    }

    get projet_reference () {
        return this.row.projet_reference
    }
    get projet_name () {
        return this.row.projet_name
    }
    get gamme_id () {
        return this.row.gamme_id
    }
    get projet_date () {
        return moment(this.row.projet_date).format('L')
    }
    get projet_client () {
        return this.row.projet_client
    }
    get nom_module () {
        return this.row.nom_module
    }
    get module_nature () {
        return this.row.module_nature
    }

    // Création du projet et retourne l'id du projet
    /**
     * Params :
     *      projet_name
     *      gamme_id
     *      client_name
     */
    static create (projet_name, gamme_id, client_name, callback) {
        db.query('INSERT INTO Projet (projet_name, gamme_id, projet_date, projet_client) VALUES(?, ?, NOW(), ?)',
        [projet_name, gamme_id, client_name],
        function (err, result) {
            if (err) throw err

            // Appelle le callback qui retourne le resultat de MySQL
            callback(result)
        })
    }

    // INSERT des produits lié au projet
    static addProductToProjet (module_id, projet_reference, nom_module, callback) {
        db.query('INSERT INTO Projet_Module (nom_module, module_id, projet_reference) VALUES (?,?,?)',
        [nom_module, module_id, projet_reference],
        function (err, result) {
            if (err) throw err

            // Appelle le callback qui retourne le resultat de MySQL
            callback(result)
        })
    }

    // Récupération de tous les projets
    static getAll (callback) {
        db.query('SELECT * FROM Projet', (err, rows) => {
            if (err) throw err

            //console.log(rows)

            callback(rows.map((row) => new Projet(row)))
            //callback(rows)
        })
    }

    // Retourne le dernier ID projet
    static getLastId (callback) {
        db.query('SELECT MAX(projet_reference) as last_projet_reference FROM Projet', (err, rows) => {
            if (err) throw err

            //console.log(rows)

            callback(rows.map((row) => new Projet(row)))
            //callback(rows)
        })
    }

    /**
     * 
     * SELECT p.projet_name, p.projet_date, p.projet_client, pm.nom_module ,m.module_nature FROM Projet p
INNER JOIN Projet_Module pm ON p.projet_reference = pm.projet_reference
INNER JOIN Module m ON pm.module_id = m.module_id
WHERE p.projet_reference = 137
     */

    // Retourne les infos du projet avec l'id en paramètre
    static getProjetDetail (projet_reference, callback) {
        db.query('SELECT p.projet_name, p.projet_date, p.projet_client FROM Projet p WHERE p.projet_reference = ?',
        [projet_reference], 
        (err, rows) => {
            if (err) throw err

            console.log(rows)

            callback(rows.map((row) => new Projet(row)))
            //callback(rows)
        })
    }

    // Retourne les produits du projet avec l'id en paramètre
    static getProduitsToProjet (projet_reference, callback) {
        db.query('SELECT pm.nom_module ,m.module_nature FROM Projet p INNER JOIN Projet_Module pm ON p.projet_reference = pm.projet_reference INNER JOIN Module m ON pm.module_id = m.module_id WHERE p.projet_reference = ?',
        [projet_reference],
        (err, rows) => {
            if (err) throw err

            //console.log(rows)

            callback(rows.map((row) => new Projet(row)))
        })
    }

}

module.exports = Projet