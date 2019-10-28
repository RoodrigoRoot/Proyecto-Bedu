import React from 'react'
import '../../assets/styles/social.scss'
import twitt from '../../assets/media/twitt.png'
import face from '../../assets/media/face.png'
import git from '../../assets/media/github.png'
const Social = () => {
        return (

                <div className="main__social">
                        <a className="main__icons" href="https://twitter.com/FrezRod"><img src={twitt} alt="Twiiter" /> </a>
                        <a className="main__icons" href="https://twitter.com/FrezRod"><img src={git} alt="GitHub" /> </a>
                        <a className="main__icons" href="https://www.facebook.com/urcinoalvarez"><img src={face} alt="Facebook" /> </a>
                </div>

        )
}
export default Social