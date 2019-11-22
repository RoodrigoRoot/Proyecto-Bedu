import React from 'react'
import axios from 'axios'
import "../../assets/styles/details.scss"

class Detail extends React.Component{
    
constructor(props) {
    super(props)
    this.state= {
        name_event:"No tienes eventos registrados por el momento",
        street:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        col:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        cp:"44520",
        references:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium erat et tellus vulputate, eu pretium nulla dapibus. Morbi rutrum aliquet nisi, vel dignissim velit ultricies vitae. Vestibulum tellus metus, euismod vel arcu at, molestie congue enim. Vestibulum eu efficitur massa. Nunc et vehicula lectus, nec eleifend quam.  ",
        date:"1",

    }
    this.getEvent()
}



async getEvent(){
    try{
        let request = await axios.get('http://localhost:8000/api/eventos/',{
            headers:{
                "Content-Type":"application/json",
                "Authorization":`token ${localStorage.getItem('token')}`
            }
            
        })
        
        const {data} =request
        console.log(data)
        if(data.length){
            data.map((item)=>(
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
        <div >
            
            
            <div className="container__event">
                <span className="event__title"><p>{this.state.name_event}</p></span>
                

                <div className="event__details">
               <div className="event__place">
                    <h2 className="event__h2">Lugar:</h2>
                        <span><p><strong>Calle:</strong> {this.state.street}<br/><strong>Colonia:</strong>{this.state.col}<br/><strong> Código Postal: </strong>{this.state.cp} </p>
                        </span><br/> 
               </div>

                   <div className="event__references">
                        <span><h2 className="event__h2">Referencias</h2>
                        {this.state.references}</span> <br/> <br/>
                        
                   </div>
                   
                </div>
                <div className="event__date"><h2 className="event__h2">Fechas</h2>
                <div>
                    <ul className="ul__date">
                        <li>Fecha 1:</li>
                        <li>Fecha 2:</li>
                        <li>Fecha 3:</li>
                    </ul>
                </div>
                </div>
            </div>

        </div>
    )
}


}
export default Detail