import React from 'react'
import './Accueil.css'

import { BarreNavigation } from '../../Components/BarreNavigation'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard, faPencilRuler } from '@fortawesome/free-solid-svg-icons'

function Accueil() {
    return (
        <div>
            <BarreNavigation />
            <section className="accueil">
                <a className="accueil-container responsive-box shadow transform text-title2" href="conceptionprojet">
                    Concevoir un devis
                    <FontAwesomeIcon icon={faPencilRuler} size='4x' />
                </a>
                <a className="accueil-container responsive-box shadow transform text-title2" href="conceptionprojet">
                    Consulter un devis
                    <FontAwesomeIcon icon={faClipboard} size='4x' />
                </a>
            </section>
        </div>
    )
}

export { Accueil }
