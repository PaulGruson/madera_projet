const db = require('../data/data_config')

class Gamme {

    // Constructor
    constructor (row) {
        this.row = row
    }

    get gamme_id () {
        return this.row.gamme_id
    }
    get gamme_nature () {
        return this.row.gamme_nature
    }

    static getAll (callback) {
        db.query('SELECT * FROM Gamme', (err, rows) => {
            if (err) throw err

            //console.log(rows)

            callback(rows.map((row) => new Gamme(row)))
            //callback(rows)
        })
    }

    // Récupérer les modules en lien avec l'id de la gamme en param
    static getModulesFromGamme (gamme_id, callback) {

        //console.log("getModulesFromGamme -> gamme_id : " + gamme_id)

        /** 
         * On récupère les modules_id et les module_nature des modules de la gamme_id
         * 
         * SELECT GM.module_id, M.module_nature
         * FROM Module M
         * LEFT JOIN Gamme_Module GM ON M.module_id = GM.module_id
         * WHERE GM.gamme_id = ?
         * 
         */

        db.query('SELECT GM.module_id, M.module_nature FROM Module M LEFT JOIN Gamme_Module GM ON M.module_id = GM.module_id WHERE GM.gamme_id = ?', 
        [gamme_id],
        (err, rows) => {
            if (err) throw err

            callback(rows.map((row) => new Gamme(row)))
            //console.log("getModulesDetailsFromGamme" + rows)
        })

    }

    // Récupérer les modules avec leurs composants en lien avec l'id de la gamme en param
    static getModulesDetailsFromGamme (gamme_id, callback) {

        //console.log("getModulesDetailsFromGamme -> gamme_id : " + gamme_id)

        /** 
         * On récupère les modules_id et les module_nature des modules de la gamme_id
         * Ainsi que les composant_id et composant_nature des modules en question
         * 
         * SELECT GM.module_id, M.module_nature, C.composant_id, C.composant_nature
         * FROM Module M
         * LEFT JOIN Gamme_Module GM ON M.module_id = GM.module_id 
         * INNER JOIN Module_Composant MC ON M.module_id = MC.module_id
         * INNER JOIN Composant C ON C.composant_id = MC.composant_id
         * WHERE GM.gamme_id = ?
         * 
         */
        db.query('SELECT GM.module_id, M.module_nature, C.composant_id, C.composant_nature FROM Module M LEFT JOIN Gamme_Module GM ON M.module_id = GM.module_id INNER JOIN Module_Composant MC ON M.module_id = MC.module_id INNER JOIN Composant C ON C.composant_id = MC.composant_id WHERE GM.gamme_id = ?', 
        [gamme_id],
        (err, rows) => {
            if (err) throw err

            callback(rows.map((row) => new Gamme(row)))
            //console.log("getModulesDetailsFromGamme" + rows)
        })
    }

}

module.exports = Gamme