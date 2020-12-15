import React from 'react'
import PropTypes from 'prop-types'


const Curso = ({title, image, price, professor}) => (
    <>
        <article className="card">
            <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
                <img src={image} alt={title} />
            </div>
            <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
                <h3 className="center">{title}</h3>
                <div className="s-main-center">
                    {professor}   
                </div>
                <div className="s-main-center">
                    <a className="button--ghost-alert button--tiny" href="https://ed.team">{ `$ ${price}USD` }</a>
                </div>
            </div>
        </article>   
    </>
)

Curso.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    professor: PropTypes.string
}

Curso.defaultProps = {
    title: "No se encontró título",
    image: "https://www.fondoswiki.com/Uploads/fondoswiki.com/Resoluciones/769-1920x1080.jpg",
    price: "--",
    professor: ""
}


export default Curso;