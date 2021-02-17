import React from 'react'
import { BarreNavigation } from '../../Components/BarreNavigation'
import './ConceptionDevis.css'

function ConceptionDevis(props) {

    const {
        history
    } = props

    return (
        <div className="conceptionDevis">
            < BarreNavigation />
            <div className="projet">
                <form action="/">
                    <fieldset className="field">
                        <legend>Projet</legend>
                        <div class="item" className="champ">
                            <label for="name">Nom du projet<span>*</span></label>
                            <input id="name" type="text" name="nomProjet" required />
                        </div>
                        <div class="item" className="champ">
                            <label for="referenceProjet">Référence du projet<span>*</span></label>
                            <input id="referenceProjet" type="text" name="refProjet" required />
                        </div>
                        <div class="item" className="champ">
                            <label for="date">Date de création<span>*</span></label>
                            <input id="date" type="date" name="bdate" required />
                            <i class="fas fa-calendar-alt"></i>
                        </div>
                        <div className="selectGamme champ">
                            <select>
                                <option selected value="" disabled selected>La gamme du projet</option>
                                <option value="1">Gamme premium</option>
                                <option value="2">Gamme standard</option>
                                <option value="3">Gamme eco</option>
                            </select>
                        </div>
                    </fieldset>
                    <hr />
                    <fieldset className="field">
                        <legend>Client</legend>
                        <div class="item" className="champ">
                            <label for="name">Nom<span>*</span></label>
                            <div class="name-item">
                                <input id="prenom" type="text" name="prenom" placeholder="Prénom" required />
                                <input id="name" type="text" name="name" placeholder="Nom" required />
                            </div>
                        </div>
                        <div class="item" className="champ">
                            <label for="email">Email<span>*</span></label>
                            <input id="email" type="text" name="email" required />
                        </div>
                        <div class="item" className="champ">
                            <label for="adresse">Adresse<span>*</span></label>
                            <input id="adresse" type="text" name="adresse" required />
                        </div>
                        <fieldset className="field">
                            <div className="btn-block">
                                <button type="submit" href="/">Rechercher</button>
                            </div>
                        </fieldset>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export { ConceptionDevis }
