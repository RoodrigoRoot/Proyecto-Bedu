import React from 'react'
import '../../assets/styles/ListEvent.scss'
import axios from 'axios'


class ListEvent extends React.Component{
    
constructor(props) {
    super(props)
    this.state= {
        name_event:"",
        street:"",
        col:"",
        cp:"",
        references:"",
        date:"",

    }
    this.getEvent()
}



async getEvent(){
    try{
        let request = await axios.get('http://ec2-13-58-232-56.us-east-2.compute.amazonaws.com/api/eventos/',{
            headers:{
                "Content-Type":"application/json",
                "Authorization":`token ${localStorage.getItem('token')}`
            }
            
        })
        
        const {data} =request
        console.log(data)
        if(data.length){
            data.map((item,index)=>(
                this.setState({
                    name_event: item.name_event,
                    street:item.street,
                    col:item.col,
                    cp:item.cp,
                    references:item.references,
                    date:item.date
    
                })
            ))
    
        }else{
            console.log("No tienes eventos")
        }

    
        
        

    }catch(error){
        console.log(error)
     
    }
}
render(){
    return(
        <div className="event__list">
            
            <h2 className="event_title">Tus Eventos</h2>
            <div className="event__card">
                <h4  className="event__h">Evento: {this.state.name_event}</h4>
                

                <div className="event__data">
                <h3>
                    Lugar:
                    </h3>
                    <span>Calle: {this.state.street}<br/> Colonia:    {this.state.col}<br/> Código Postal: {this.state.cp}</span><br/> 
                    <span><h3>Referencias</h3>{this.state.references}</span> <br/> <br/>
                    <span>Fecha: {this.state.date}</span>
                </div>
            </div>

        </div>
    )
}


}
export default ListEvent