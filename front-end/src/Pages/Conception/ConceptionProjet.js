import React from 'react'
import { BarreNavigation } from '../../Components/BarreNavigation'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard, faPencilRuler } from '@fortawesome/free-solid-svg-icons'

function ConceptionProjet(props) {

    const {
        history
    } = props

    return (
        <body>
            < BarreNavigation />
            <section id="conceptionProjet" className="conception">
                <h1 className="text-title1">Conception de devis</h1>
                <div className="conception-box responsive-box shadow ">
                    <div className="conception-box-title">
                        <FontAwesomeIcon icon={faPencilRuler} size='2x' />
                        <h2 className="text-title2">Projet</h2>
                    </div>
                    <input className="conception-input" id="nomDuProjet" placeholder="Nom du projet" type="text" name="nomDuProjet" />
                    <input className="conception-input" id="referenceDuProjet" placeholder="Référence du projet" type="text" name="referenceDuProjet" />
                    <input className="conception-input" id="nomDuProjet" placeholder="date" type="date" name="nomDuProjet" />
                    <select className="conception-input" id="gamme" name="game" >
                        <option value="" disabled selected hidden>Selectionner une gamme</option>
                        <option value="gamme1">Gamme1</option>
                        <option value="gamme2">Gamme2</option>
                        <option value="gamme3">Gamme3</option>
                    </select>
                </div>
                <div className="conception-box responsive-box shadow">
                    <div className="conception-box-title">
                        <FontAwesomeIcon icon={faPencilRuler} size='2x' />
                        <h2 className="text-title2">Client</h2>
                    </div>
                    <input className="conception-input" id="nomDuClient" placeholder="Nom" type="text" name="nomDuClient" />
                    <input className="conception-input" id="prenomDuClient" placeholder="Prénomt" type="text" name="prenomDuClient" />
                    <input className="conception-input" id="adresseDuClient" placeholder="Adresse" type="text" name="adresseDuClient" />
                    <input className="conception-input" id="mailDuClient" placeholder="Courriel" type="text" name="mailDuClient" />
                </div>
                <button className="responsive-box button shadow transform">Créer le projet</button>
            </section>
        </body>
    )
}

export { ConceptionProjet }
