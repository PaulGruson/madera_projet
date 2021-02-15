import React from 'react'
import { BarreNavigation } from '../../Components/BarreNavigation'

function ConceptionProjet(props) {

    const {
        history
    } = props

    return (
        <body>
            < BarreNavigation />
            <section id="conceptionProjet" className="conception">
                <h1>Conception de devis</h1>
                <div classname="conception-box">
                    <h2>Projet</h2>
                    <div>
                        <label for="nomDuProjet">Nom du projet</label>
                        <input id="nomDuProjet" type="text" name="nomDuProjet" />
                    </div>
                    <div>
                        <label for="nomDuProjet">Référence du projet</label>
                        <input id="nomDuProjet" type="text" name="nomDuProjet" />
                    </div>
                    <div>
                        <label for="nomDuProjet">Date</label>
                        <input id="nomDuProjet" type="date" name="nomDuProjet" />
                    </div>
                    <div>
                        <label for="gamme">Gamme</label>
                        <select id="gamme" name="game" >
                            <option value="gamme1">Gamme1</option>
                            <option value="gamme2">Gamme2</option>
                            <option value="gamme3">Gamme3</option>
                        </select>
                    </div>
                </div>
                <div classname="conception-box">
                    <h2>Client</h2>
                    <div>
                        <label for="nomDuClieny">Nom du client</label>
                        <input id="nomDuClient" type="text" name="nomDuClient" />
                    </div>
                    <div>
                        <label for="prenomDuClient">Prénom du client</label>
                        <input id="prenomDuClient" type="text" name="prenomDuClient" />
                    </div>
                    <div>
                        <label for="adresseDuClient">Adrresse du client</label>
                        <input id="adresseDuClient" type="text" name="adresseDuClient" />
                    </div>
                    <div>
                        <label for="mailDuClient">Mail du client</label>
                        <input id="mailDuClient" type="text" name="mailDuClient" />
                    </div>
                </div>
            </section>
        </body>
    )
}

export { ConceptionProjet }
