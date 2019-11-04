import React from 'react'
import '../assets/styles/notfound.scss'

const NotFound = () => {

return(
    <div className="container__not">
       <div className="not__left">

           <img src="https://media.giphy.com/media/l0Iych4GHWMRxci2I/giphy.gif" alt="dog-astronaut"/>
           <h3>¿Y si de paso me agregas carnal? <a href="https://www.facebook.com/urcinoalvarez">¡Facebook!</a></h3>
        
       </div>
       <div className="not__right">
        <p className="not__found"> <h1>404 <br/> Page Not Found </h1></p>
        <br/>
        <br/>
        <br/>
        <h2 className="not__seems">seems like you are lost here.</h2> 
        <h2 className="not__found"> Get back to home</h2>           
       </div>
    </div>
)

}
export default NotFound