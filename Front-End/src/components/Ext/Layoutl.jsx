import React from 'react'
import Header from './Header'

import Footer from './Footer'


const Layoult = ({ children }) => {
    let i = 0

    return (
        <div>
            <Header refres={i} />
            {children}
            <Footer />
        </div>
    )

}
export default Layoult