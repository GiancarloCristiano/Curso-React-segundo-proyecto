import React from 'react'
import "./styles/styles.scss"
//import Curso from './Curso'
import Banner from './Banner'
import CourseGrid from './CourseGrid'
import { BrowserRouter as Router, Route, Switch }  from "react-router-dom"
import Formulario from './Formulario'

const App = () => (
    <Router>
        <Switch>
        <Route path="/" exact component={ Banner } />
        <Route path="/cursos" exact component={ CourseGrid } />
        <Route path="/formulario" exact component={ () => <Formulario name="Página de contacto" /> } />
        <Route component={() => (
            <div className="ed-grid">
                <h1>Error 404</h1>
                <span>Página no encontrada</span>
            </div>
        )} />
        </Switch>        
    </Router>


)

//<Formulario name="EDTeam" />
export default App;