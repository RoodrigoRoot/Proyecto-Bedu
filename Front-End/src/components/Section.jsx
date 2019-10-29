import React, { Fragment } from 'react'
import '../assets/styles/section.scss'
const Section = () => {

    return (
        <Fragment>
            <div className="section">
                <h2>Carnemonos un poco</h2>
                <div className="section__container">
                    <article className="section__container__text">
                        <br />
                        <p>Le Carne es una aplicación gratuita para hacer una
                        gran<br /> Carne Asada con tus amigos, con todas las cosas<br />
                            que debes considerar para que sea un éxito, desde<br />
                            las carnes, condimentos, cervezas e incluso el clima.<br />
                            ¡Pruébala lo más pronto Posible!<br /><br />

                            Búscanos en la PlayStore como:<br />
                            <strong>Le Carne</strong>
                        </p>
                    </article>

                    <article className="section__article">
                        <img id="roast" src="https://media2.giphy.com/media/l378AwfJ7pqLlRHr2/giphy.gif?cid=790b761104fcd4fdda31cd4eb8ceeea4ed63d1b61043311e&rid=giphy.gif" alt="Carne" />
                    </article>
                </div>
            </div>
        </Fragment>
    )
}
export default Section