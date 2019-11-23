import React from 'react'
import '../../assets/styles/forme.scss'

class FormE extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            creator:1,
            name_event:"",
            street:"",
            col:"",
            email1:"",
            email2:"",
            email3:"",
            email4:"",
            email5:"",
            email6:"",
            email7:"",
            cp:"",
            references:"",
            day1:"",
            day2:"",
            day3:"",
            date:"",
            hour:""

        }
    }

    _onSubmit= async (e)=>{
        const {name_event,creator,street,col,cp,references,date,email1,email2,email3,email4,email5,email6,hour} = this.state
        
        const input= {
            name_event,creator,street,col,cp,references,date,email1,email2,email3,email4,email5,email6,hour}
        
        e.preventDefault()
        try{
            console.log(name_event,creator,street,col,cp,references,date,email1,email2,email3,email4,email5,email6)
            await fetch('http://localhost:8000/api/eventos/',{
            body: JSON.stringify(input),
            method: 'POST',
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`token ${localStorage.getItem('token')}`
                },
                
            
            })
            
            
        
            alert("Evento Creado")

            window.location.replace('http://localhost:3000/Eventos')
        }catch(error){

            console.log(error.message)
        }
    }

    handleChange=( e )=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <div className="content__form">
                <img className="reg__img" src="https://image.freepik.com/foto-gratis/verduras-carnes-brasa-parrilla-sobre-mesa_23-2148167593.jpg" alt="Registro"/>
                
                <div className="form__event">
                
                    <form onSubmit={this._onSubmit} method="POST"><br/>
                    <h2>( ͡ ͡° ͜ ʖ ͡ ͡°) Hagamos una carnita (͡° ͜ʖ° ͡)</h2>
                        
                        <input size="350" type="text"
                        name="name_event"
                        value={this.state.name_event}
                        placeholder="Motivo del Evento"
                        onChange={this.handleChange}
                        required
                        />
                <h4>Email de los Invitados</h4>
                       <div className="event__invite">
                            
                            <input type="email"
                            className="invite"
                            placeholder="Primer invitado"
                            value={this.state.email1}
                            onChange={this.handleChange}
                            name="email1"
                            required
                            />
                           
                            
                            <input type="email"
                            className="invite"
                            placeholder="Segundo invitado"
                            value={this.state.email2}
                            onChange={this.handleChange}
                            name="email2"
                            required
                            />
                           
                            
                            <input type="email"
                            className="invite"
                            placeholder="Tercer invitado"
                            value={this.state.email3}
                            onChange={this.handleChange}
                            name="email3"
                            required
                            />
                           
                            
                            <input type="email"
                            className="invite"
                            placeholder="Cuarto invitado"
                            value={this.state.email4}
                            onChange={this.handleChange}
                            name="email4"
                            required
                            />
                           
                            
                            <input type="email"
                            className="invite"
                            placeholder="Quinto invitado"
                            value={this.state.email5}
                            onChange={this.handleChange}
                            name="email5"
                            />
                           
                            
                            <input type="email"
                            className="invite"
                            placeholder="Sexto invitado"
                            value={this.state.email6}
                            onChange={this.handleChange}
                            name="email6"
                            />
                            
                       </div>
                
                        
                        <input type="text"
                        name="street"
                        value={this.state.street}
                        placeholder="Calle"
                        onChange={this.handleChange}
                        required
                        />
                
                        
                        <input type="text"
                        name="col"
                        value={this.state.col}
                        placeholder="Colonia"
                        onChange={this.handleChange}
                        required
                        />
                        
                        
                        
                        <input type="text"
                        name="cp"
                        value={this.state.cp}
                        placeholder="cp"
                        onChange={this.handleChange}
                        required
                        />
                        
                        
                        <input type="text"
                        name="references"
                        value={this.state.references}
                        placeholder="referencias"
                        onChange={this.handleChange}
                        required
                        />
                <h4>Selecciona 3 fechas en las que puede ser el evento</h4>
                <div class="tooltip">
                        <input type="date"
                        value={this.state.day1}
                        onChange={this.handleChange}
                        name="day1"
                        required
                        
                        />
                     
    <span class="tooltiptext">Fecha tentativa</span>
</div>


<div class="tooltip">
                        <input type="date"
                        value={this.state.day2}
                        onChange={this.handleChange}
                        name="day2"
                        required
                        
                        />
                     
    <span class="tooltiptext">Fecha tentativa</span>
</div>



                        <div class="tooltip">
                        <input type="date"
                        value={this.state.day3}
                        onChange={this.handleChange}
                        name="day3"
                        required
                        
                        />
                     
    <span class="tooltiptext">Fecha tentativa</span>
</div>
                        
                        <input type="time"
                        value={this.state.hour}
                        onChange={this.handleChange}
                        name="hour"
                        required
                        placeholder="Hora"
                        />
                       
                    <input id="send" type="submit" value="C r e a r"/>
                
                    </form>
                </div>
            </div>
        )
    }

}
export default FormE