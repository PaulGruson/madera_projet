import React from 'react'
import { BarreNavigation } from '../../Components/BarreNavigation'
import './ConceptionDevis.css'

function ConceptionDevis(props) {

    const {
        history
    } = props

    return (
        <body>
            < BarreNavigation />
            <div class="testbox">
                <form action="/">
                    <hr/><hr/>
                    <fieldset>
                        <legend>Projet</legend>
                        <div class="item">
                            <label for="name">Nom du projet<span>*</span></label>
                            <input id="name" type="text" name="text" required />
                        </div>
                        <div class="item">
                            <label for="address">Référence du projet<span>*</span></label>
                            <input id="address" type="text" name="text" required />
                        </div>
                        <div class="item">
                            <label for="bdate">Date de création<span>*</span></label>
                            <input id="bdate" type="date" name="bdate" required />
                            <i class="fas fa-calendar-alt"></i>
                        </div>
                        <select>
                            <option selected value="" disabled selected>La gamme du projet</option>
                            <option value="1">Gamme premium</option>
                            <option value="2">Gamme standard</option>
                            <option value="3">Gamme eco</option>
                        </select>
                    </fieldset>
                    <hr />
                    <fieldset>
                        <legend>Client</legend>
                        <div class="item">
                            <label for="name">Nom<span>*</span></label>
                            <div class="name-item">
                                <input id="name" type="text" name="name" placeholder="Prénom" required />
                                <input id="name" type="text" name="name" placeholder="Nom" required />
                            </div>
                        </div>
                        <div class="item">
                            <label for="email">Email<span>*</span></label>
                            <input id="email" type="text" name="text" required />
                        </div>
                        <div class="item">
                            <label for="position">Adresse<span>*</span></label>
                            <input id="position" type="text" name="text" required />
                        </div>
                        <fieldset>
                            <div class="btn-block">
                                <button type="submit" href="/">Rechercher</button>
                            </div>
                        </fieldset>
                    </fieldset>
                </form>
            </div>
        </body>
    )
}

export { ConceptionDevis }