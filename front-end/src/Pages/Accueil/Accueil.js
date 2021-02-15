import React from 'react'
import './Accueil.css'

import { BarreNavigation } from '../../Components/BarreNavigation'


function Accueil() {
    return (
        <form className="accueil login-form">
            <h1>Madera</h1>
            <button type="submit">Conception d'un devis</button>
            <button type="submit">Consulter un devis</button>
        </form>
    )
}

export { Accueil }
