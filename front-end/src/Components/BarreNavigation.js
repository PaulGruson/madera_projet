import React from 'react'
import './barreNavigation.css'

function BarreNavigation() {
    return (
        <ul className="barreNavigation">
            <li><a className="active" href="#home">Accueil</a></li>
            <li><a href="#news">Conception devis</a></li>
            <li><a href="#contact">Consulter devis</a></li>
            <li><a href="#about">Configuration</a></li>
        </ul>
    )
}

export { BarreNavigation }
