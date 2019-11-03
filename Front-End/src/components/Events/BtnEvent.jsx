import React from 'react'
import {Link} from 'react-router-dom'
import '../../assets/styles/btnevent.scss'


const BtnEvent = () =>{
return(
  <div className="btn__content">
      <div className="btn__img">
        <img src="https://images.unsplash.com/photo-1461530927168-44328109da52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="Crear Evento"/>
<div className="btn">

          <strong><span className="btn__link"><Link id="link" to="/Carne"> Crear Evento </Link></span></strong>
</div>
      </div>
  </div>
)
}
export default BtnEvent