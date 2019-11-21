import React from 'react'
import '../assets/styles/main.scss'
import video from '../assets/media/Pexels Videos 3972.mp4'
import Social from './Ext/Social'
const Main = () => {
    return (
        <main>
            <div className="Main__content">
                <video autoPlay="autoplay" className="video" loop>
                    <source src={video} type="video/mp4" />

                </video>
                <Social />
                <div className="centrado"><h1>Carnenado con tus Amigos  </h1></div>


            </div>
        </main>


    )
}
export default Main