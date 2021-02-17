import React, { useState, useEffect } from "react"
import './BarreNavigation.css'

// import des icones
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function BarreNavigation() {

    const [menuActive, setMenuActive] = useState(false)

  
    function myFunction() {
        setMenuActive(!menuActive)
    }

    return (
        <section className={`barreNavigation ${menuActive ? "responsive" : ""}`} id="BarreNavigation">
            <a href="accueil">Accueil</a>
            <a href="conceptionprojet">Conception Devis</a>
            <a href="consultation">Consultation Devis</a>
            <a href="#about">Configuration</a>
            <a className="barreNavigation-icone" onClick={myFunction}>          
                <FontAwesomeIcon icon={faBars} size='1x' />
            </a>
        </section>

        // <ul className="barreNavigation">
        //     <li><a href="accueil">Accueil</a></li>
        //     <li><a href="conceptiondevis">Conception devis</a></li>
        //     <li><a href="#contact">Consulter devis</a></li>
        //     <li><a href="#about">Configuration</a></li>
        // </ul>
    )
}

export { BarreNavigation }
