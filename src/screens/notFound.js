import React from 'react'
import Planet from '../Components/planet'
import { Link } from 'react-router-dom'

const NotFoundScreen = () => {
    return (
        <div>
            <h3>Página não encontrada!</h3>
            <Link to='/'>Voltar para Home</Link>
        </div>
    )
}

export default NotFoundScreen