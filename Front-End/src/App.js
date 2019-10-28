import React from 'react'

import Log from './components/User/Login'
import Index from './pages/Index'
import Register from './pages/Register'
import Logout from './pages/Logout'
import Event from './pages/Events'
import Profile from './pages/Profile'
import  {BrowserRouter,Route,Switch} from 'react-router-dom'
import Layoult from './components/Ext/Layoutl'
import CreateEvent from './components/Events/FormE'


class App extends React.Component{

  

    render(){
    return(
    <BrowserRouter>
        <Layoult>
            <Switch>
                <Route exact path ="/" component={Index}/>
                <Route exact path ="/Login" component={Log}/>
                <Route exact path ="/Registro" component={Register}/>
                <Route exact path ="/salir" component={Logout}/>
                <Route exact path ="/Eventos" component={Event}/>
                <Route exact path ="/Perfil" component={Profile}/>
                <Route exact path ="/Perfil/:id" children={<Profile/>}/>
                <Route exact path ="/Carne" component={CreateEvent}/>
               
            </Switch>
            </Layoult>
        </BrowserRouter>
        )

   }   }
export default App