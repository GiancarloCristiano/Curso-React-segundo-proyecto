import React from "react"

const cursos = [
    {
        "id": 1,
        "title": "React desde cero",
        "image": "https://edteam-media.s3.amazonaws.com/courses/big/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
        "price": 40,
        "professor": "Beto Quiroga"
    },
    {
        "id": 2,
        "title": "Drupal desde cero",
        "image": "https://edteam-media.s3.amazonaws.com/courses/big/43973b1c-a8e2-4863-9252-2ae41377cab2.png",
        "price": 30,
        "professor": "Beto Quiroga"
    },
    {
        "id": 3,
        "title": "Go desde cero",
        "image": "https://edteam-media.s3.amazonaws.com/courses/big/3ec614b5-a9b7-475c-bf8f-8ba643a129eb.png",
        "price": 50,
        "professor": "Alexys Lozada"
    },
    {
        "id": 4,
        "title": "HTML desde cero",
        "image": "https://edteam-media.s3.amazonaws.com/courses/big/26557907-0555-427e-a40c-6ff207f98d72.png",
        "price": 10,
        "professor": "Alvaro Felipe"
    },
]



const Course = ({ match }) => {

    const cursoActual = cursos.filter(c => c.id === parseInt(match.params.id))[0]

    return (
        <div className="ed-grid m-grid-3">
        {
            cursoActual ? (
                <>
                    <h1 className="m-cols-3">{ cursoActual.title }</h1>
                    <img className="m-cols-1" src={ cursoActual.image } alt={ cursoActual.title } />
                    <p className="m-cols-2">{ cursoActual.professor }</p>
                </> 
            ) :
                <h1>El curso no existe</h1>
        }
        </div>
    )
}

export default Course