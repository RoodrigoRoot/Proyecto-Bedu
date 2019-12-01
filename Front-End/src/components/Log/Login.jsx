import React, { Fragment, Component } from 'react'
import '../../assets/styles/login.scss'
import axios from 'axios'


class Login extends Component {

    state = {
        username: "",
        password: "",

    }

    _onSubmit = async (e) => {

        e.preventDefault()
        const { username, password } = this.state
        try {

            let request = await axios.post('http://18.223.168.22/api/v2/login/ ', {
                username,
                password
            })

            const { data } = request
            localStorage.setItem('token', data.token)
            localStorage.setItem('user_id', data.id)
            window.location.replace('http://3.134.85.16/')


        } catch (error) {
            console.log(error)
            alert("Tu usuario o contrasena son incorrectos, por favor revisalos")
        }
    }
    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })


    }


    render() {
        return (
            <Fragment>

                <div className="login__content">
                    <img className="img__login" src="https://i2.wp.com/thehappening.com/wp-content/uploads/2017/06/portada-55.jpg?fit=1024%2C694&ssl=1" alt="Login" />

                    <div className="login__center">
                        <h2>Inicio de Sesión</h2>
                        <p><strong>¡Bienvenido!</strong> Es momentos de unas carnitas <span role="img" aria-label="sheep"> &#128536;</span></p>

                        <form onSubmit={this._onSubmit}>
                            <label><strong> Usuario:</strong></label>

                            <input type="text"
                                placeholder="Usuario"
                                name="username"
                                value={this.state.username}
                                onChange={this.handleInputChange}
                                required
                            />
                            <label><strong>Contraseña:</strong></label>
                            <input type="password"
                                placeholder="Contraseña"
                                value={this.state.password}
                                name="password"
                                onChange={this.handleInputChange}
                                required
                            />
                            <input id="btn" type="submit" value="Enviar" />
                        </form>
                    </div>

                </div>

            </Fragment>
        )
    }
}
export default Login