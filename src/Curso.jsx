import React from 'react'

const curso = {
    "title" : "React desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/big/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
    "price": "50usd"
}

const Curso = () => (
    <>
        <article className="card">
            <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
                <img src={curso.image} alt={curso.title} />
            </div>
            <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
                <h3 className="center">{curso.title}</h3>
                <div className="s-main-center">
                    <a className="button--ghost-alert button--tiny" href="https://ed.team">{ `$ ${curso.price}` }</a>
                </div>
            </div>
        </article>   
    </>
)

export default Curso;