import React from 'react'
import "./styles/styles.scss"
//import Curso from './Curso'
import Banner from './Banner'
import CourseGrid from './CourseGrid'
import { BrowserRouter as Router, Route, Switch }  from "react-router-dom"
import Formulario from './Formulario'
import Course from './Course'

const App = () => (
    <Router>
        <Switch>
        <Route path="/" exact component={ Banner } />
        <Route path="/cursos/:id" component={ Course } />
        <Route path="/cursos" component={ CourseGrid } />
        <Route path="/formulario" component={ () => <Formulario name="Página de contacto" /> } />
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
export default App