import { BrowserRouter, Route, Switch } from "react-router-dom"

import { Accueil } from "./Pages/Accueil/Accueil"
import { ConceptionProjet } from "./Pages/Conception/ConceptionProjet"
import { ConceptionProduit } from "./Pages/Conception/ConceptionProduit"
import { Consultation } from "./Pages/Consultation/Consultation"

import './App.css'
import { BarreNavigation } from "./Components/BarreNavigation"
import { ConceptionDevis } from "./Pages/Conception/ConceptionDevis"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/accueil" component={Accueil} />
        <Route exact path="/conceptionprojet" component={ConceptionProjet} />
        <Route exact path="/conceptionproduit" component={ConceptionProduit} />
        <Route exact path="/consultation" component={Consultation} />
        <Route path="/" component={Accueil} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

