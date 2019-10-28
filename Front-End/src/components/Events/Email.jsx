import React from 'react'
import '../../assets/styles/email.scss'

const Email = () =>{

    return(
        <div className="email__content">
           <div className="title">
                <h2 className="email__title">Envía una invitación a tus amigos.</h2>
           </div>
            <br/>
            <form className="form__event">
                <label>Email:</label>
                <input type="email" 
                       name="email" 
                       placeholder="Correo Electronico"/>
                <input type="submit" value="Enviar"/>
            </form>

        </div>
    )

}
export default Email