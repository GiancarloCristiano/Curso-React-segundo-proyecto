import React, {Component} from "react"

class Formulario extends Component {

    constructor(props) {
        super(props)

        this.state = {
            nombre: "",
            correo: ""
        }


        this.cambiarNombre = this.cambiarNombre.bind(this)
        this.cambiarCorreo = this.cambiarCorreo.bind(this)
    }


    cambiarNombre(e) {
        this.setState({
            nombre: e.target.value
        })
    }

    cambiarCorreo(e) {
        this.setState({
            correo: e.target.value
        })
    }


    render() {
         return (
            <div className="ed-grid">
                <h1>Formulario {this.props.name}</h1>
                <form id="elemento">
                    <div className="ed-grid m-grid-2">
                        <div className="form__item">
                            <label>Nombre Completo</label>
                            <input type="text" 
                                onChange={this.cambiarNombre}/>
                        </div>
                        <div className="form__item">
                            <label>Correo Electrónico</label>
                            <input type="email"
                                onChange={this.cambiarCorreo}/>
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

    componentDidMount(){
        let elemento = document.getElementById("elemento")
        console.log(elemento)

    }

}

export default Formulario