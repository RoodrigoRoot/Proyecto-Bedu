import React from 'react'
import axios from 'axios'
import "../../assets/styles/details.scss"

class Detail extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id:"",
            name_event: "No tienes eventos registrados por el momento",
            street: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
            col: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
            cp: "44520",
            references: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium erat et tellus vulputate, eu pretium nulla dapibus. Morbi rutrum aliquet nisi, vel dignissim velit ultricies vitae.  ",
            day1: "1",
            day2: "",
            day3: "",
            hour: ""

        }
        this.getEvent()
    }



    async getEvent() {
        try {
            let request = await axios.get('http://localhost:8000/api/eventos/', {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `token ${localStorage.getItem('token')}`
                }

            })

            const { data } = request
            console.log(data)
            if (data.length) {
                data.map((item) => (
                    this.setState({
                        
                        name_event: item.name_event,
                        street: item.street,
                        col: item.col,
                        cp: item.cp,
                        references: item.references,
                        day1: item.day1,
                        day2: item.day2,
                        day3: item.day3,
                        hour: item.hour,
                        date: item.date

                    })
                ))

            } else {
                alert("Carnal, no tienes eventos. Create uno e invitemos a todos los que puedas")
            }





        } catch (error) {
            console.log(error)

        }
    }


     _onSubmitVote(){

     }



    render() {
        return (
            <div >


                <div className="container__event">
                    <span className="event__title"><p>{this.state.name_event}</p></span>


                    <div className="event__details">
                        <div className="event__place">
        <h1>{this.state.id}</h1>
                            <h2 className="event__h2">Lugar:</h2>
                            <span><p><strong>Calle:</strong> {this.state.street}<br /><strong>Colonia:</strong>{this.state.col}<br /><strong> Código Postal: </strong>{this.state.cp} </p>
                            </span><br />
                        </div>

                        <div className="event__references">
                            <span><h2 className="event__h2">Referencias</h2>
                                {this.state.references}</span> <br /> <br />

                        </div>

                    </div>
                    <div className="event__date"><h2 className="event__h2">Votación de Fechas</h2>
                        <span><p>Tenemos 3 fechas tentativas para la carnitas, vota por la mejor para ti. </p></span>
                        <h3>Hora: {this.state.hour}</h3>
                        <div>
                            <ul className="ul__date">
                                <li>Fecha 1: 
                                <input name="1" className="day__vote" type="button" value={this.state.day3} />
                                
                                </li>
                                <li>Fecha 2: 
                                <input className="day__vote" type="button" value={this.state.day3} />
                                
                                </li>
                                <li>Fecha 3:
                                <input className="day__vote" type="button" value={this.state.day3} />

                                </li>

                             

                            </ul>
                            <h3>Fecha Final: {this.state.date}</h3>
                        </div>
                    </div>
                </div>

            </div>
        )
    }


}
export default Detail