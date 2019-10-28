import React from 'react'
import {Link} from 'react-router-dom'
import '../../assets/styles/btnevent.scss'


const BtnEvent = () =>{
return(
  <div className="btn__content">
      <div className="btn__img">
        
<div className="btn">

          <span className="btn__link"><Link id="link" to="/Carne"> Crear Evento </Link></span>
</div>
      </div>
  </div>
)
}
export default BtnEvent