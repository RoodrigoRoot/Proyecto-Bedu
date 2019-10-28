import React, { Fragment, Component } from 'react'
import '../../assets/styles/register.scss'

class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      email: '',
      password: '',
      last_name: '',
      first_name: '',
      profile: { location: '', phone: '' }

    }
  }

  _onSubmit = async (e) => {
    e.preventDefault()

    const input = {

      profile: {

        phone: this.state.profile.phone,
        location: this.state.profile.location
      },
      username: this.state.username,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password

    }

    try {
      let request = await fetch('http://localhost:8000/api/usuarios/', {
        body: JSON.stringify(input),
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },

      })
      const { statusText } = request
      if (statusText === "Created") {
        alert("Registro completado. Bienvenido")
        window.location.replace('http://localhost:3000/Login')

      }



    } catch (error) {
      console.log(error)

    }

  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })


  }
  handleInputChangePro = (event) => {
    this.setState({
      profile: { ...this.state.profile, [event.target.name]: event.target.value }
    })


  }
  render() {

    const { username, password, email, last_name, first_name } = this.state
    const { phone, location } = this.state.profile
    return (
      <Fragment>

        <div className="register">
          <div className="register__img">
            <img src="https://image.freepik.com/foto-gratis/cena-bistec-platos-rusticos_23-2148167639.jpg" alt="Carne" />
          </div>
          <div className="register__form">

            <form onSubmit={this._onSubmit}  >
              <label>Nombre de Usuario</label><label>Contraseña</label><br />
              <input name="username" type="text" placeholder="Nombre de usuario"
                value={username}
                className="full__Name"
                onChange={this.handleInputChange}
                required
              />


              <input name="password" type="password" placeholder="Contraseña"
                value={password}
                className="full__Name"
                onChange={this.handleInputChange}
                required
              />
              <br />
              <label>Nombre</label>
              <label>Apellidos</label>
              <br />
              <input name="first_name" type="text" placeholder="Nombre"
                className="full__Name"
                value={first_name}
                onChange={this.handleInputChange}
                required
              />

              <input name="last_name" type="text" placeholder="Apellidos"
                value={last_name}
                onChange={this.handleInputChange}
                required
                className="full__Name"
              />


              <br />
              <label>Email</label><label>Teléfono</label><br />

              <input name="email" type="email" placeholder="Correo Electronico"
                value={email}
                className="full__Name"
                onChange={this.handleInputChange}
                required

              />

              <input name="phone" type="text" placeholder="Teléfono"
                value={phone}
                onChange={this.handleInputChangePro}
                required
                className="full__Name"
              />
              <br />
              <label>Ubicación</label><br />
              <input name="location" type="text" placeholder="Ubicación"
                value={location}
                onChange={this.handleInputChangePro}
                required
                className="full__Name"
              />


              <br />
              <input className="full__Name" type="submit" value="Registrar"
                id="btn"
              />
            </form>
          </div>
        </div>
      </Fragment>
    )
  }
}
export default Register