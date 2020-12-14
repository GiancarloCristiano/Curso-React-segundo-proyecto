import React, {Component} from "react"

class Formulario extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="ed-grid">
                <h1>Formulario</h1>
                <form>
                    <div className="form__item">
                        <label>Nombre Completo</label>
                        <input type="text"/>
                    </div>
                    <div className="form__item">
                        <label>Correo Electrónico</label>
                        <input type="email"/>
                    </div>
                    <div className="form__item">
                        <input type="submit" className="button full" value="Enviar"/>
                    </div>
                </form>
            </div>
        )
    }

}

export default Formulario