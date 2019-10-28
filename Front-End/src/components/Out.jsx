import React from 'react'
import '../assets/styles/out.scss'
const Out = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user_id')

    return (
        <div className="container__out">
            <img src="https://image.freepik.com/foto-gratis/turistas-viajan-estacion-tren_1150-12438.jpg" alt="Despedida" />
            <div className="out__text">
                <h2>¡Vuelve pronto!</h2>
                <h3>Te Carnearemos Mucho  :(</h3>
            </div>

        </div>
    )
}
export default Out