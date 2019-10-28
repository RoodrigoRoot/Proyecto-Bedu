import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../assets/styles/header.scss'

class Header extends Component {

    constructor(props) {

        super(props)

        this.state = {
            val1: "Login",
            val2: "Registro",
            welcome: "Juntando Amigos"

        }


    }

    componentDidMount() {
        if (localStorage.getItem('token')) {
            this.setState({
                val1: "Eventos",
                val2: "Salir",
                val3: "Perfil",
                welcome: "Bienvenido"

            })
        }
    }
    render() {

        return (
            <header>
                <nav>
                    <div id="meet__logo">
                        <h2><Link className="Link" to="/">Le Carne Asade</Link></h2>
                    </div>

                    <div id="name"><h1>{this.state.welcome}</h1></div>
                    <div>
                        <ul id="meet__links">
                            <li className="meet__li__sing"><Link className="Link" to={`/${this.state.val1}`} >{this.state.val1}</Link></li>

                            <li className="meet__li__sing"><Link className="Link" to={`Perfil/${localStorage.getItem('user_id')}`} >{this.state.val3}</Link></li>

                            <li className="meet__li__reg"><a className="Link" href={`/${this.state.val2}`}>{this.state.val2}</a></li>
                        </ul>
                    </div>
                </nav>
                <hr />
            </header>

        )
    }
}

export default Header
