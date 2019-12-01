import React, { Fragment, Component } from 'react'
import '../../assets/styles/register.scss'
import imagen from '../../assets/media/roast.png'

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
      let request = await fetch('http://18.223.168.22/api/usuarios/', {
        body: JSON.stringify(input),
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },

      })
      const { statusText } = request
      if (statusText === "Created") {
        alert("Registro completado. Bienvenido")
        window.location.replace('http://3.134.85.16/Login')

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
            <img className="img__reg" src={imagen} alt="Registro" />
          </div>

          <div className="register__form">

            <form onSubmit={this._onSubmit}  >
              <h1>Registro de Usuario</h1>
              <label>Usuario</label><label className="label__left">Contraseña</label><br />
              <div className="form__flex">

                <input name="username" type="text" placeholder="Usuario"
                  value={username}

                  onChange={this.handleInputChange}
                  required
                />


                <input name="password" type="password" placeholder="Contraseña"
                  value={password}

                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <br />
              <label>Nombre</label>
              <label className="label__left">Apellidos</label>
              <br />
              <div className="form__flex">
                <input name="first_name" type="text" placeholder="Nombre"

                  value={first_name}
                  onChange={this.handleInputChange}
                  required
                />

                <input name="last_name" type="text" placeholder="Apellidos"
                  value={last_name}
                  onChange={this.handleInputChange}
                  required

                />
              </div>

              <br />
              <label>Email</label><label className="label__left">Teléfono</label><br />
              <div className="form__flex">
                <input name="email" type="email" placeholder="Email"
                  value={email}

                  onChange={this.handleInputChange}
                  required

                />

                <input name="phone" type="text" placeholder="Teléfono"
                  value={phone}
                  onChange={this.handleInputChangePro}
                  required

                />
              </div>
              <br />
              <label>Ubicación</label><br />
              <div className="form__flex">
                <input name="location" type="text" placeholder="Ubicación"
                  value={location}
                  onChange={this.handleInputChangePro}
                  required

                />


                <br />
                <input className="full__Name" type="submit" value="Registrar"
                  id="btn"
                />
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    )
  }
}
export default Register