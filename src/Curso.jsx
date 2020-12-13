import React from 'react'

const mayorDeEdad = edad => edad > 18

const persona = {"nombre" : "Alberto", "apellido": "Quiroga", "edad": 29}

const Curso = () => (
    <>
        <article className="card">
            <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
                <img src="https://ux.ed.team/img/curso-portada.png" alt="card" />
            </div>
            <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
                {
                    mayorDeEdad(persona.edad) ? <h3>Soy mayor</h3> : <p>Soy menor</p>
                }
                <div className="s-mb-2 s-main-center">
                    <div className="card__teacher s-cross-center">
                        <div className="card__avatar s-mr-1">
                            <div className="circle img-container">
                                <img src="https://ux.ed.team/img/profesor.jpg" alt="teacher" />
                            </div>
                        </div>
                    <span className="small">{ `${persona.nombre} ${persona.apellido}` }</span>
                    </div>
                </div>
                <div className="s-main-center">
                    <a className="button--ghost-alert button--tiny" href="https://ed.team">$ 20USD</a>
                </div>
            </div>
        </article>   
    </>
)

export default Curso;