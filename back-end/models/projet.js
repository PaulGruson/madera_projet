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
    get gamme_id () {
        return this.row.gamme_id
    }
    get projet_date () {
        return moment(this.row.projet_date).format('L')
    }
    get projet_client () {
        return this.row.projet_client
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

}

module.exports = Projet