import React from "react"

const Historial = ({match, location, history}) => (
    <div>
        { JSON.stringify(match) }
        { JSON.stringify(location) }
        { JSON.stringify(history) }

    </div>
)

export default Historial