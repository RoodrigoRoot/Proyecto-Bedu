import React from 'react'
import '../../assets/styles/footer.scss'
import twitt from '../../assets/media/twitt.png'
import face from '../../assets/media/face.png'
import git from '../../assets/media/github.png'
const Footer = () => {
    return (
        <footer>
            <span className="rights" >Derecho Reservados 2019 &copy;</span>
            <div className="footer__number">

                <p><a href="https://wa.me/527411196882">Contacto: +527411196882</a></p>
            </div>
            <div className="footer__social">
                <a className="social__icons" href="https://twitter.com/FrezRod"><img src={twitt} alt="Twiiter" /> </a>
                <a className="social__icons" href="https://github.com/RoodrigoRoot/Carnitas-Bedu"><img src={git} alt="GitHub" /> </a>
                <a className="social__icons" href="https://www.facebook.com/urcinoalvarez"><img src={face} alt="Facebook" /> </a>
            </div>

        </footer>
    )
}
export default Footer