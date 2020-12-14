import React, {Component} from "react"

class Formulario extends Component {

    constructor(props) {
        super(props)

        this.state = {
            nombre: "",
            correo: ""
        }

    }


    render() {
        return (
            <div className="ed-grid">
                <h1>Formulario</h1>
                <form>
                    <div className="ed-grid m-grid-2">
                        <div className="form__item">
                            <label>Nombre Completo</label>
                            <input type="text" 
                                onChange={ e => this.setState({nombre: e.target.value})}/>
                        </div>
                        <div className="form__item">
                            <label>Correo Electrónico</label>
                            <input type="email"
                                onChange={ e => this.setState({correo: e.target.value})}/>
                        </div>
                    </div>
                </form>
                <div>
                    <h2>{ `Hola ${this.state.nombre}` }</h2>
                    <span>{ `Tu correo es: ${this.state.correo}` }</span>
                </div>
            </div>
        )
    }

}

export default Formulario