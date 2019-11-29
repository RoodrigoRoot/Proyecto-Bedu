import React from 'react'
import DetailGuest from '../components/guest/DetailGuest'
import {useParams} from "react-router-dom";



const Guest = ()=>{
    let { id } = useParams();
    
return(    <div>
        
        <DetailGuest unique={id}/>
    </div>
    )
}
export default Guest