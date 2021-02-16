import React from 'react'
import './BarreNavigation.css'
 
function BarreNavigation() {
    return (
        <ul className="barreNavigation">
            <li><a href="accueil">Accueil</a></li>
            <li><a href="conceptiondevis">Conception devis</a></li>
            <li><a href="#contact">Consulter devis</a></li>
            <li><a href="#about">Configuration</a></li>
        </ul>
    )
}

export { BarreNavigation }
