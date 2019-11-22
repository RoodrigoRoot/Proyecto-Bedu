import React from 'react'
import {Link} from 'react-router-dom'
import "../../assets/styles/detailbtn.scss"

const DetailBtn= ()=> {

    return(
        <div>
             <strong><span><Link className="btn__detail" to="/Detalles"> Detalles del Evento </Link></span></strong>
        </div>
    )

}
export default DetailBtn
